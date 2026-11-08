import type { Metadata } from "next";
import Link from "next/link";
import { Check, Mail } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { CheckoutButton } from "@/components/CheckoutButton";

export const metadata: Metadata = { title: "Pricing — Free Review, Then $9.90", description: "Start with one free college essay review per 24 hours, then unlock three reviews for one essay over 30 days for $9.90.", alternates: { canonical: "/pricing/" } };

const faqs = [
  ["Is using this cheating?", "Writivia gives critique on writing you created; it does not produce an essay or replace full sentences. You decide what to revise and submit. If your school has a specific AI policy, ask your counselor before using any feedback tool."],
  ["Do you store my essay?", "In the first release, your draft history stays in your browser rather than an account. Text is processed when you request grading, is not added to our application database, is not used for model training, and can be removed with Delete this essay."],
  ["Will Turnitin or AI detectors flag my essay?", "Writivia cannot predict what a third-party detector will do. Because we give editorial direction rather than replacement prose, the final words remain yours. AI detectors are imperfect, so follow your school's disclosure rules instead of relying on a detector score."],
  ["Can I share feedback with a parent or counselor?", "Read-only sharing is planned for the Season Pass account release. It is not available in the anonymous first release, so we do not present it as a current feature."],
  ["What is the refund policy?", "Email hello@writivia.com within seven days of purchase. We offer a full refund when no more than one paid review has been completed. Stripe returns approved refunds to the original payment method."],
  ["Do you offer school or counselor plans?", "Not yet. We are speaking with counselors about classroom-safe workflows, student privacy, and useful review limits. Email hello@writivia.com if you want to help shape the first counselor plan."],
];

export default function Pricing() {
  const plans = [
    { name: "Free", price: "$0", note: "Ready now", items: ["1 complete review per 24 hours", "Overall + four dimension scores", "3 priority fixes", "No credit card"], cta: "Start free", href: "/#grader" },
    { name: "Single Essay", price: "$9.90", note: "Secure Stripe checkout", items: ["3 reviews for one essay", "30-day review window", "Line-by-line feedback", "No subscription"], checkout: true },
    { name: "Season Pass", price: "$69", suffix: "/ 6 months", note: "Waitlist — not for sale", items: ["Planned six-month access", "Hook and statement modes", "Account-based history", "Read-only sharing when accounts launch"], cta: "Join launch list", href: "mailto:hello@writivia.com?subject=Season%20Pass%20launch", featured: true },
  ];
  return <>
    <section className="shell page-hero centered"><Breadcrumbs items={[{ label: "Pricing", href: "/pricing/" }]} /><span className="kicker">Simple pricing, honest status</span><h1>Pricing</h1><p>Start with a complete review. Pay only when the revision tools are ready to earn it.</p></section>
      <section className="shell pricing-grid">{plans.map(plan => <article key={plan.name} className={plan.featured ? "plan featured" : "plan"}>{plan.featured && <span className="plan-flag">Planned for application season</span>}<span className="plan-note">{plan.note}</span><h2>{plan.name}</h2><div className="plan-price">{plan.price}<small>{plan.suffix}</small></div><ul>{plan.items.map(item => <li key={item}><Check size={17} />{item}</li>)}</ul>{plan.checkout ? <CheckoutButton/> : <Link className={plan.featured ? "button button-wide" : "button button-outline button-wide"} href={plan.href!}>{plan.cta}</Link>}</article>)}</section>
    <section className="shell anchor-section"><div><span className="section-number">Why this price</span><h2>A private essay consultant can cost more for one hour than the Season Pass costs for the whole season.</h2></div><p>Software should not pretend to replace a trusted teacher or counselor. It should make useful, repeatable feedback available between those conversations—and show you where to spend the human time you have.</p></section>
    <section className="paper-section"><div className="shell"><div className="section-heading"><span className="section-number">Questions</span><h2>Before you choose a plan</h2></div><div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div><p className="contact-line"><Mail size={16} /> Questions? <a href="mailto:hello@writivia.com">hello@writivia.com</a></p></div></section>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q,a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />
  </>;
}
