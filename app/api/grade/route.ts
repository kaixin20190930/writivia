import { createHash } from "node:crypto";
import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";
import { buildRubric, getGradeJsonSchema, gradeRequestSchema, gradeResultSchema } from "@/lib/rubric";
import { clearServerSession, getActivePurchaseForUser, releaseFreeReview, releasePaidReview, reserveFreeReview, reservePaidReview } from "@/lib/ratelimit";
import { auth } from "@clerk/nextjs/server";

export const runtime = "nodejs";

function error(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

function structuredError(code: string, message: string, status: number, upgrade = false) {
  return NextResponse.json({ error: { code, message, upgrade, pricingUrl: upgrade ? "/pricing/" : undefined } }, { status });
}

function getIp(request: NextRequest) {
  if (process.env.NODE_ENV === "production") return request.headers.get("cf-connecting-ip")?.trim() || "unknown";
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
}

export async function POST(request: NextRequest) {
  const raw = await request.json().catch(() => null);
  const parsed = gradeRequestSchema.safeParse(raw);
  if (!parsed.success) return error("Paste between 200 and 12,000 characters, then try again.", 400);

  const { text, mode, fingerprint, essayId } = parsed.data;
  const reviewText = mode === "hook" ? text.split(/\n\s*\n/).slice(0, 3).join("\n\n") : text;
  const textHash = createHash("sha256").update(text).digest("hex").slice(0, 8);
  console.info("grade_requested", { characters: text.length, textHash, mode });

  if (!process.env.OPENAI_API_KEY) return error("Grading is not configured yet. Please try again after launch.", 503);

  let reservationKeys: string[] = [];
  let paidReservation = false;
  const {userId}=await auth();
  const accountPurchase=userId?await getActivePurchaseForUser(userId).catch(()=>null):null;
  const purchaseId = accountPurchase?.purchaseId||request.cookies.get("writivia_purchase")?.value;
  try {
    if (purchaseId) {
      const paid = await reservePaidReview(purchaseId, essayId);
      if (!paid.success) {
        const messages: Record<string,string> = {
          PURCHASE_REFUNDED: "This purchase was refunded and no longer includes review access.",
          PURCHASE_EXPIRED: "This paid review window has expired.",
          ESSAY_MISMATCH: "This purchase is linked to a different essay.",
          PAID_LIMIT_REACHED: "All paid reviews included with this purchase have been used.",
          PURCHASE_NOT_FOUND: "We could not verify this purchase in this browser.",
        };
        return structuredError(paid.code, messages[paid.code] || "Paid access is unavailable.", 429, true);
      }
      paidReservation = true;
    } else {
      const ipId = createHash("sha256").update("ip:" + getIp(request)).digest("hex");
      const browserId = createHash("sha256").update("browser:" + fingerprint).digest("hex");
      const reservation = await reserveFreeReview([ipId, browserId]);
      if (!reservation.success) {
        const response = structuredError("FREE_LIMIT_REACHED", "Your free review for the last 24 hours has been used.", 429, true);
        response.headers.set("X-RateLimit-Reset", String(reservation.reset)); return response;
      }
      reservationKeys = reservation.keys;
    }
  } catch (rateError) {
    console.error("rate_limit_unavailable", { message: rateError instanceof Error ? rateError.message : "unknown" });
    return error("Grading is temporarily unavailable. Please try again shortly.", 503);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 45_000);
  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    let gradingText = reviewText;
    if (reviewText.length > 3000) {
      const paragraphs = reviewText.split(/\n\s*\n/);
      const numbered = paragraphs.map((paragraph, index) => "[P" + (index + 1) + "] " + paragraph).join("\n\n");
      const summary = await openai.responses.create({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        store: false,
        input: [
          {
            role: "system",
            content: "Compress each numbered paragraph into one evidence-rich sentence. Preserve the paragraph number, concrete events, key wording, and the writer's reflection. Do not evaluate, rewrite, or add facts. Keep short passages worth quoting verbatim inside quotation marks.",
          },
          { role: "user", content: numbered },
        ],
        max_output_tokens: 1200,
      }, { signal: controller.signal });
      gradingText = "PARAGRAPH MAP (compressed for cost control):\n" + summary.output_text + "\n\nSELECTED ORIGINAL PASSAGES:\n" + paragraphs.map((paragraph, index) => "[P" + (index + 1) + "] " + paragraph.slice(0, 110)).join("\n\n");
    }
    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      store: false,
      input: [
        { role: "system", content: buildRubric(mode) },
        { role: "user", content: gradingText },
      ],
      text: { format: { type: "json_schema", name: "essay_review", strict: true, schema: getGradeJsonSchema(mode) } },
    }, { signal: controller.signal });

    const rawResult = JSON.parse(response.output_text) as { dimensions?: Record<string, unknown> };
    if (rawResult.dimensions) {
      for (const [key, value] of Object.entries(rawResult.dimensions)) {
        if (typeof value === "number" && value <= 10) rawResult.dimensions[key] = Math.round(value * 10);
      }
    }
    const result = gradeResultSchema.parse(rawResult);
    return NextResponse.json(result, { headers: { "Cache-Control": "no-store" } });
  } catch (modelError) {
    await releaseFreeReview(reservationKeys).catch(() => undefined);
    if (paidReservation) await releasePaidReview(purchaseId).catch(() => undefined);
    console.error("grade_failed", {
      characters: text.length, textHash,
      message: modelError instanceof Error ? modelError.message : "unknown",
    });
    return error("We couldn't grade this one. Nothing was charged — try again.", 503);
  } finally {
    clearTimeout(timeout);
  }
}

export async function DELETE(request: NextRequest) {
  const body = await request.json().catch(() => null) as { sessionId?: string } | null;
  if (body?.sessionId) await clearServerSession(body.sessionId).catch(() => undefined);
  return new NextResponse(null, { status: 204 });
}
