type Entry={value:string};
const data=new Map<string,Entry>();
(globalThis as typeof globalThis&{RATE_LIMIT:unknown}).RATE_LIMIT={
  async get(key:string){ return data.get(key)?.value??null; },
  async put(key:string,value:string){ data.set(key,{value}); },
  async delete(key:string){ data.delete(key); },
} as never;

async function main(){
  const {activatePurchase,reservePaidReview}=await import("../lib/ratelimit");
  const base={purchaseId:"purchase-a",checkoutSessionId:"cs_live_same",paymentIntentId:"pi_live_same",browserId:"browser-a",sessionId:"session-a",essayId:"essay-a",purchasedAt:"2026-11-09T00:00:00.000Z"};
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
  console.log("Purchase idempotency passed: replay preserved usage, session stayed unique, retry activated once.");
}
main().catch(error=>{ console.error(error); process.exit(1); });
export {};
