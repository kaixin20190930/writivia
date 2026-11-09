type Entry={value:string};
const data=new Map<string,Entry>();
(globalThis as typeof globalThis&{RATE_LIMIT:unknown}).RATE_LIMIT={
  async get(key:string){ return data.get(key)?.value??null; },
  async put(key:string,value:string){ data.set(key,{value}); },
  async delete(key:string){ data.delete(key); },
} as never;

async function main(){
  const {activatePurchase,getActivePurchaseForUser,reservePaidReview}=await import("../lib/ratelimit");
  const base={purchaseId:"purchase-a",checkoutSessionId:"cs_live_same",paymentIntentId:"pi_live_same",browserId:"browser-a",sessionId:"session-a",essayId:"essay-a",userId:"user-a",plan:"single_essay" as const,purchasedAt:"2026-11-09T00:00:00.000Z"};
  const first=await activatePurchase(base);
  if(first.reviewLimit!==3||first.reviewCount!==0) throw new Error("First activation must grant exactly three unused reviews");
  const sameEventReplay=await activatePurchase(base);
  if(sameEventReplay.reviewCount!==0) throw new Error("Same activation replay changed usage");
  const used=await reservePaidReview(first.purchaseId,first.essayId);
  if(!used.success||used.purchase.reviewCount!==1) throw new Error("Paid review was not reserved");
  const differentEventSameSession=await activatePurchase({...base,purchaseId:"purchase-b"});
  if(differentEventSameSession.purchaseId!==first.purchaseId||differentEventSameSession.reviewCount!==1) throw new Error("Session replay reset or duplicated entitlement");
  data.delete("writivia:purchase:purchase-failed");
  const retry=await activatePurchase({...base,purchaseId:"purchase-failed",checkoutSessionId:"cs_retry",paymentIntentId:"pi_retry"});
  if(retry.reviewLimit!==3||retry.reviewCount!==0) throw new Error("Retry after an uncommitted failure did not activate cleanly");
  const season=await activatePurchase({...base,purchaseId:"purchase-season",checkoutSessionId:"cs_season",paymentIntentId:"pi_season",plan:"season_pass"});
  if(season.reviewLimit!==30||Date.parse(season.expiresAt)-Date.parse(season.purchasedAt)!==180*86_400_000) throw new Error("Season Pass terms were not activated correctly");
  const seasonOtherEssay=await reservePaidReview(season.purchaseId,"essay-b");
  if(!seasonOtherEssay.success) throw new Error("Season Pass must work across essays");
  const accountPurchase=await getActivePurchaseForUser(base.userId);
  if(accountPurchase?.purchaseId!==season.purchaseId) throw new Error("Account access must prefer an active Season Pass across devices");
  console.log("Purchase idempotency passed: replay preserved usage, session stayed unique, retry activated once.");
}
main().catch(error=>{ console.error(error); process.exit(1); });
export {};
