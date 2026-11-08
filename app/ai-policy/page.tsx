import type { Metadata } from "next";
import Link from "next/link";
import { Ban, Database, GraduationCap, PencilLine, Trash2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "AI Policy — How We Use Your Essay", description: "Learn what Writivia does with your essay, what the AI feedback can and cannot do, and how to delete a draft from your browser.", alternates: { canonical: "/ai-policy/" } };

export default function AiPolicy() {
  const policies = [
    { icon: PencilLine, title: "We critique. We do not write.", text: "Writivia identifies an issue and offers a revision direction. It does not replace a complete sentence or generate an application essay for you." },
    { icon: GraduationCap, title: "No school receives your work.", text: "We do not submit your text, review, or usage information to any college. Writivia is independent and is not an agent of a school." },
    { icon: Ban, title: "Your essay is not training data.", text: "We configure model requests not to store responses and contractually prohibit using submitted application content to train models. Writivia does not use your text to train its own models." },
    { icon: Database, title: "No essay database or analytics payload.", text: "Your browser can keep a draft for your convenience. When you grade it, the full text is processed by our server and model provider, but Writivia does not save it in its application database or send it to analytics tools. Operational logs contain only character count and an eight-character hash prefix." },
    { icon: Trash2, title: "Delete means delete locally.", text: "Use “Delete this essay” to remove the browser copy immediately. Because the first release does not store essay text in our database, there is no server-side essay record to recover later." },
  ];
  return <>
    <section className="shell page-hero"><Breadcrumbs items={[{ label: "AI policy", href: "/ai-policy/" }]} /><span className="kicker">Plain English, matched to the product</span><h1>AI Policy</h1><p>How Writivia handles your essay, where AI enters the review, and the boundaries we will not cross.</p></section>
    <section className="shell policy-list">{policies.map(({icon: Icon, title, text}, index) => <article key={title}><span className="policy-number">0{index + 1}</span><Icon aria-hidden /><div><h2>{title}</h2><p>{text}</p></div></article>)}</section>
    <section className="shell retention-note"><h2>About provider retention</h2><p>Writivia sends grading requests with storage disabled. Limited provider-side safety or abuse-monitoring retention may still apply under the model provider’s data controls. We will not promise technical zero retention until our production account is approved for it. We will publish any material change here before it changes how your text is handled.</p></section>
    <section className="ink-section small-cta"><div className="shell"><h2>Your school’s policy comes first.</h2><div><p>If you are unsure whether AI-assisted feedback is permitted, ask your school counselor before using it.</p><Link className="button button-light" href="/#grader">Back to the grader</Link></div></div></section>
  </>;
}
