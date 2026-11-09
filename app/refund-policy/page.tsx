import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Refund and Purchase Terms",
  description: "Refund eligibility, timing, and purchase terms for Writivia Single Essay reviews.",
  alternates: { canonical: "/refund-policy/" },
};

export default function RefundPolicy() {
  return <>
    <section className="shell page-hero">
      <Breadcrumbs items={[{ label: "Refund and purchase terms", href: "/refund-policy/" }]} />
      <span className="kicker">Single Essay purchases</span>
      <h1>Refund and Purchase Terms</h1>
      <p>Clear rules for the $9.90 Single Essay plan, including eligibility, access, and processing time.</p>
    </section>
    <section className="shell prose-section">
      <h2>Seven-day request window</h2>
      <p>Request a refund within seven calendar days of purchase by emailing <a href="mailto:hello@writivia.com">hello@writivia.com</a>. Include the email address used at checkout and the Stripe receipt or payment reference so we can locate the order.</p>
      <h2>Eligibility</h2>
      <p>A Single Essay purchase is eligible for a full refund when no more than one paid review has been completed. After two or more paid reviews have been completed, the purchase is not eligible for a refund. This rule lets a customer inspect the paid service while protecting the cost of repeated model processing.</p>
      <h2>How approved refunds work</h2>
      <p>Approved refunds are returned to the original payment method. We aim to review requests within three business days. After Stripe submits a refund, the card issuer or bank controls when the credit appears; this commonly takes several additional business days.</p>
      <h2>Access after a refund</h2>
      <p>Issuing a refund revokes the remaining paid-review access linked to that purchase. Free review access remains subject to the normal daily limit.</p>
      <h2>Questions</h2>
      <p>Email <a href="mailto:hello@writivia.com">hello@writivia.com</a> before purchasing if you are unsure whether the plan fits your draft. Return to <Link href="/pricing/">pricing</Link> for current plan limits and availability.</p>
    </section>
  </>;
}
