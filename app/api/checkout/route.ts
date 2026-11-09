import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { z } from "zod";

export const runtime = "nodejs";
const checkoutSchema = z.object({ sessionId:z.string().min(8).max(128), essayId:z.string().min(8).max(128) });

export async function POST(request: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) return NextResponse.json({ error: "Checkout is not configured yet." }, { status: 503 });
  const parsed=checkoutSchema.safeParse(await request.json().catch(()=>null));
  if(!parsed.success) return NextResponse.json({error:"A valid essay session is required."},{status:400});
  const {sessionId,essayId}=parsed.data;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const origin = new URL(request.url).origin;
  const bucket=Math.floor(Date.now()/(30*60*1000));
  const idempotencyKey=createHash("sha256").update(`${sessionId}:${essayId}:${bucket}`).digest("hex");
  const purchaseId=idempotencyKey.slice(0,32);
  const metadata={writivia_purchase_id:purchaseId,sessionId,essayId,plan:"single_essay"};
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    managed_payments: { enabled: false },
    client_reference_id: purchaseId, metadata,
    line_items: [{ quantity: 1, price_data: { currency: "usd", unit_amount: 990, product_data: { name: "Writivia Single Essay", description: "Revise and recheck one essay for 30 days" } } }],
    payment_intent_data: { metadata },
    success_url: `${origin}/?checkout=success&session_id={CHECKOUT_SESSION_ID}#grader`,
    cancel_url: `${origin}/pricing/?checkout=cancelled`,
    allow_promotion_codes: true,
    consent_collection: { terms_of_service: "required" },
  },{idempotencyKey});
  if (!session.url) return NextResponse.json({ error: "Stripe did not return a checkout URL." }, { status: 502 });
  const response = NextResponse.json({ url: session.url });
  response.cookies.set("writivia_purchase", purchaseId, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", maxAge: 60 * 60 * 24 * 30, path: "/" });
  return response;
}
