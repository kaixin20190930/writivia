import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { activatePurchase, beginStripeEvent, completeStripeEvent, refundPurchaseByPaymentIntent, releaseStripeEvent } from "@/lib/ratelimit";

export const runtime="nodejs";

export async function POST(request:NextRequest){
  const secret=process.env.STRIPE_SECRET_KEY, webhookSecret=process.env.STRIPE_WEBHOOK_SECRET, signature=request.headers.get("stripe-signature");
  if(!secret||!webhookSecret||!signature) return NextResponse.json({error:"Webhook is not configured."},{status:503});
  const stripe=new Stripe(secret); let event:Stripe.Event;
  try{ event=stripe.webhooks.constructEvent(await request.text(),signature,webhookSecret); }
  catch{return NextResponse.json({error:"Invalid signature."},{status:400});}
  if(!await beginStripeEvent(event.id)) return NextResponse.json({received:true,duplicate:true});
  try{
    if(event.type==="checkout.session.completed"){
      const session=event.data.object,meta=session.metadata||{};
      const paymentIntentId=typeof session.payment_intent==="string"?session.payment_intent:session.payment_intent?.id;
      if(session.payment_status!=="paid"||session.amount_total!==990||session.currency!=="usd"||!session.client_reference_id||!paymentIntentId||!meta.sessionId||!meta.essayId) throw new Error("Checkout session failed entitlement validation");
      await activatePurchase({purchaseId:session.client_reference_id,checkoutSessionId:session.id,paymentIntentId,browserId:meta.sessionId,sessionId:meta.sessionId,essayId:meta.essayId,purchasedAt:new Date(event.created*1000).toISOString()});
    }
    if(event.type==="charge.refunded"){
      const charge=event.data.object;
      if(charge.refunded){ const paymentIntentId=typeof charge.payment_intent==="string"?charge.payment_intent:charge.payment_intent?.id; if(paymentIntentId) await refundPurchaseByPaymentIntent(paymentIntentId); }
    }
    await completeStripeEvent(event.id); return NextResponse.json({received:true});
  }catch(error){ await releaseStripeEvent(event.id).catch(()=>undefined); console.error("stripe_webhook_failed",{eventId:event.id,type:event.type,message:error instanceof Error?error.message:"unknown"}); return NextResponse.json({error:"Webhook processing failed."},{status:500}); }
}
