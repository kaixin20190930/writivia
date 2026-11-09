type RateLimitStore = { get(key:string):Promise<string|null>; put(key:string,value:string,options:{expirationTtl:number}):Promise<void>; delete(key:string):Promise<void> };
export type Purchase = { purchaseId:string; checkoutSessionId:string; paymentIntentId:string; browserId:string; sessionId:string; essayId:string; status:"active"|"refunded"|"expired"; plan:"single_essay"|"season_pass"; purchasedAt:string; expiresAt:string; reviewLimit:number; reviewCount:number; refundedAt?:string };
const DAY=86_400, PURCHASE_TTL=DAY*181, EVENT_TTL=DAY*365;
export function getStore(){ return (globalThis as typeof globalThis&{RATE_LIMIT?:RateLimitStore}).RATE_LIMIT||null; }
function requireStore(){ const store=getStore(); if(!store) throw new Error("RATE_LIMIT storage is not configured"); return store; }
function purchaseKey(id:string){ return `writivia:purchase:${id}`; }

export async function getPurchase(purchaseId:string|undefined){
  if(!purchaseId) return null;
  const raw=await requireStore().get(purchaseKey(purchaseId)); if(!raw) return null;
  const purchase=JSON.parse(raw) as Purchase;
  if(purchase.status==="active"&&Date.parse(purchase.expiresAt)<=Date.now()){ purchase.status="expired"; await savePurchase(purchase); }
  return purchase;
}
export async function savePurchase(purchase:Purchase){ await requireStore().put(purchaseKey(purchase.purchaseId),JSON.stringify(purchase),{expirationTtl:PURCHASE_TTL}); }
export async function activatePurchase(input:Omit<Purchase,"status"|"reviewLimit"|"reviewCount"|"purchasedAt"|"expiresAt">&{purchasedAt?:string}){
  const store=requireStore();
  const purchaseIdForSession=await store.get(`writivia:stripe-session:${input.checkoutSessionId}`);
  if(purchaseIdForSession){ const existingForSession=await getPurchase(purchaseIdForSession); if(existingForSession) return existingForSession; }
  const existing=await getPurchase(input.purchaseId); if(existing) return existing;
  const purchasedAt=input.purchasedAt||new Date().toISOString();
  const season=input.plan==="season_pass";
  const purchase:Purchase={...input,status:"active",reviewLimit:season?30:3,reviewCount:0,purchasedAt,expiresAt:new Date(Date.parse(purchasedAt)+DAY*(season?180:30)*1000).toISOString()};
  await savePurchase(purchase);
  await store.put(`writivia:stripe-session:${purchase.checkoutSessionId}`,purchase.purchaseId,{expirationTtl:PURCHASE_TTL});
  await store.put(`writivia:stripe-payment:${purchase.paymentIntentId}`,purchase.purchaseId,{expirationTtl:PURCHASE_TTL}); return purchase;
}
export async function refundPurchaseByPaymentIntent(paymentIntentId:string){
  const store=requireStore(); const purchaseId=await store.get(`writivia:stripe-payment:${paymentIntentId}`); if(!purchaseId) return null;
  const purchase=await getPurchase(purchaseId); if(!purchase||purchase.status==="refunded") return purchase;
  purchase.status="refunded"; purchase.refundedAt=new Date().toISOString(); await savePurchase(purchase); return purchase;
}
export async function beginStripeEvent(eventId:string){ const store=requireStore(),key=`writivia:stripe-event:${eventId}`; if(await store.get(key)) return false; await store.put(key,"processing",{expirationTtl:EVENT_TTL}); return true; }
export async function completeStripeEvent(eventId:string){ await requireStore().put(`writivia:stripe-event:${eventId}`,"complete",{expirationTtl:EVENT_TTL}); }
export async function releaseStripeEvent(eventId:string){ await requireStore().delete(`writivia:stripe-event:${eventId}`); }
export async function reservePaidReview(purchaseId:string|undefined,essayId:string){
  const purchase=await getPurchase(purchaseId); if(!purchase) return {success:false as const,code:"PURCHASE_NOT_FOUND"};
  if(purchase.status==="refunded") return {success:false as const,code:"PURCHASE_REFUNDED"};
  if(purchase.status!=="active") return {success:false as const,code:"PURCHASE_EXPIRED"};
  if(purchase.plan==="single_essay"&&purchase.essayId!==essayId) return {success:false as const,code:"ESSAY_MISMATCH"};
  if(purchase.reviewCount>=purchase.reviewLimit) return {success:false as const,code:"PAID_LIMIT_REACHED"};
  purchase.reviewCount+=1; await savePurchase(purchase); return {success:true as const,purchase};
}
export async function releasePaidReview(purchaseId:string|undefined){ const purchase=await getPurchase(purchaseId); if(!purchase||purchase.reviewCount<1||purchase.status!=="active") return; purchase.reviewCount-=1; await savePurchase(purchase); }
export async function reserveFreeReview(identifiers:string[]){
  const store=getStore(); if(!store){ if(process.env.NODE_ENV==="production") throw new Error("Rate limiting is not configured"); return {success:true,keys:[] as string[],reset:Date.now()+DAY*1000}; }
  const keys=identifiers.map(identifier=>`writivia:free-review:${identifier}`),reserved:string[]=[];
  for(const key of keys){ const current=await store.get(key); if(current){ await Promise.all(reserved.map(reservedKey=>store.delete(reservedKey))); return {success:false,keys:[] as string[],reset:Number(current)||Date.now()+DAY*1000}; } const reset=Date.now()+DAY*1000; await store.put(key,String(reset),{expirationTtl:DAY}); reserved.push(key); }
  return {success:true,keys:reserved,reset:Date.now()+DAY*1000};
}
export async function releaseFreeReview(keys:string[]){ const store=getStore(); if(store&&keys.length) await Promise.all(keys.map(key=>store.delete(key))); }
export async function clearServerSession(sessionId:string){ const store=getStore(); if(store) await store.delete(`writivia:session:${sessionId}`); }
