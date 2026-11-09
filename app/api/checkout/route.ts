import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { z } from "zod";
import { auth } from "@clerk/nextjs/server";

export const runtime = "nodejs";
const checkoutSchema = z.object({ sessionId:z.string().min(8).max(128), essayId:z.string().min(8).max(128), plan:z.enum(["single_essay","season_pass"]).default("single_essay") });

export async function POST(request: NextRequest) {
  const {userId}=await auth();
  if(!userId) return NextResponse.json({error:"Sign in before purchasing a review plan."},{status:401});
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) return NextResponse.json({ error: "Checkout is not configured yet." }, { status: 503 });
  const parsed=checkoutSchema.safeParse(await request.json().catch(()=>null));
  if(!parsed.success) return NextResponse.json({error:"A valid essay session is required."},{status:400});
  const {sessionId,essayId,plan}=parsed.data;
  if(plan==="season_pass"&&process.env.SEASON_PASS_ENABLED!=="true") return NextResponse.json({error:"Season Pass checkout will open after account access is ready."},{status:409});
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const origin = new URL(request.url).origin;
  const bucket=Math.floor(Date.now()/(30*60*1000));
  const idempotencyKey=createHash("sha256").update(`${sessionId}:${essayId}:${plan}:${bucket}`).digest("hex");
  const purchaseId=idempotencyKey.slice(0,32);
  const metadata={writivia_purchase_id:purchaseId,sessionId,essayId,plan,userId};
  const product = plan === "season_pass"
    ? { amount:6900, name:"Writivia Season Pass", description:"30 essay reviews across 180 days; one-time purchase" }
    : { amount:990, name:"Writivia Single Essay", description:"3 reviews for one essay across 30 days" };
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    managed_payments: { enabled: false },
    client_reference_id: purchaseId, metadata,
    line_items: [{ quantity: 1, price_data: { currency: "usd", unit_amount: product.amount, product_data: { name: product.name, description: product.description } } }],
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
