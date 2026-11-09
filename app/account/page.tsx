import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getUserPurchases } from "@/lib/ratelimit";

export const metadata:Metadata={title:"Account — Plans and Review Access",robots:{index:false,follow:false}};

export default async function AccountPage(){
  const {userId}=await auth();
  if(!userId) redirect("/sign-in/?redirect_url=/account/");
  const purchases=await getUserPurchases(userId).catch(()=>[]);
  return <>
    <section className="shell page-hero"><Breadcrumbs items={[{label:"Account",href:"/account/"}]}/><span className="kicker">Your Writivia access</span><h1>Account</h1><p>Paid plans follow this account across browsers and devices. Draft text remains in the browser where you write it.</p></section>
    <section className="shell account-plans"><div className="section-heading"><span className="section-number">Plans</span><h2>Review access and usage</h2></div>{purchases.length===0?<article className="account-plan"><h3>No paid plan yet</h3><p>Your free review remains available under the normal daily limit.</p><Link className="button button-small" href="/pricing/">View plans</Link></article>:purchases.map(purchase=><article className="account-plan" key={purchase.purchaseId}><div><span className="plan-note">{purchase.status}</span><h3>{purchase.plan==="season_pass"?"Season Pass":"Single Essay"}</h3></div><dl><div><dt>Reviews remaining</dt><dd>{Math.max(0,purchase.reviewLimit-purchase.reviewCount)} of {purchase.reviewLimit}</dd></div><div><dt>Access expires</dt><dd>{new Intl.DateTimeFormat("en",{dateStyle:"medium"}).format(new Date(purchase.expiresAt))}</dd></div><div><dt>Purchased</dt><dd>{new Intl.DateTimeFormat("en",{dateStyle:"medium"}).format(new Date(purchase.purchasedAt))}</dd></div></dl>{purchase.status==="refunded"&&<p>This purchase was refunded and its remaining access was revoked.</p>}</article>)}</section>
    <section className="shell account-help"><p>Need help with a purchase? Email <a href="mailto:hello@writivia.com">hello@writivia.com</a>.</p></section>
  </>;
}
