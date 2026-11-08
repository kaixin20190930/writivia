import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3, MessageSquareText, PenLine, SearchCheck, ShieldCheck } from "lucide-react";
import { GradeForm } from "@/components/GradeForm";
import { JsonLd } from "@/components/JsonLd";
import { ScoreCard } from "@/components/ScoreCard";
import { absoluteUrl } from "@/lib/site";
import type { GradeResult } from "@/lib/rubric";

export const metadata: Metadata = {
  title: "Free College Essay Grader — Score & Feedback",
  description: "Paste your college essay for a 0–100 score and line-by-line feedback. Your first full review is free, with no credit card required.",
  alternates: { canonical: "/" },
};

const demo: GradeResult = {
  total: 78,
  dimensions: { structure: 82, argument: 74, language: 80, grammar: 76 },
  top_fixes: [
    { quote: "I've always loved science", issue: "Open on the actual scene.", direction: "Start with the broken microscope, then earn the reflection." },
    { quote: "This taught me many things", issue: "Name the change precisely.", direction: "Show which assumption shifted and why." },
    { quote: "In conclusion", issue: "Let the image carry the ending.", direction: "Return to the workbench without summarizing the lesson." },
  ],
  line_feedback: [],
};

const faqs = [
  ["Is this free?", "One complete review is free every 24 hours, with no credit card required. It includes an overall score, four dimension scores, three priority fixes, and line-level comments so you can make a focused revision."],
  ["Will my school know I used this?", "No. Writivia does not send your essay, score, or usage information to any school. We are an independent feedback tool, not an admissions office or an agent of a college."],
  ["Is using this cheating?", "Writivia critiques writing you created. It does not produce an application essay or rewrite full sentences for you. Your school's rules still apply, so ask a counselor if its policy is unclear."],
  ["Do you store my essay?", "Your draft is saved in your browser so you can return to it. It is sent to our grading service only when you request a review and is not put in our application database or used to train models."],
  ["How is the score calculated?", "The estimate combines structure, argument, language, and grammar. The rubric rewards specific scenes, earned reflection, purposeful organization, precise wording, and technical control. It is guidance, not an official admissions score."],
  ["Can it write my essay for me?", "No. Writivia identifies weak spots and offers revision direction, but it does not provide a finished replacement sentence or write an essay. The ideas, language, and final choices remain yours."],
];

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <span className="kicker"><ShieldCheck size={15} /> Private, focused feedback</span>
          <h1>College Essay Grader</h1>
          <p className="hero-lede">Find the lines that flatten your story—before an admissions reader does.</p>
          <div className="proof-row"><span><Clock3 size={15} /> Feedback in about 20 seconds</span><span>First review free</span><span>No credit card</span></div>
        </div>
        <div className="margin-note" aria-hidden="true">Specific beats impressive.</div>
      </section>
      <section id="grader" className="shell grader-stage">
        <div className="grader-columns"><GradeForm /><ScoreCard result={demo} demo /></div>
        <p className="stage-privacy">Your essay stays private. We never use it to train AI models, ours or anyone else’s. <Link href="/ai-policy/">See exactly how your text is handled.</Link></p>
      </section>

      <section className="ink-section">
        <div className="shell process-grid">
          <div><span className="section-number">01</span><h2>Three steps. Your voice stays yours.</h2></div>
          <ol className="process-list">
            <li><PenLine /><div><strong>Paste</strong><p>Bring the draft you wrote. We do not start it for you.</p></div></li>
            <li><SearchCheck /><div><strong>Get scored</strong><p>See what works across structure, argument, language, and grammar.</p></div></li>
            <li><MessageSquareText /><div><strong>Fix what matters</strong><p>Work through prioritized notes instead of chasing every comma.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="shell editorial-section">
        <div className="section-heading"><span className="section-number">02</span><h2>What a useful college essay review actually looks for</h2></div>
        <div className="editorial-columns">
          <p className="dropcap">A strong application essay does not need to sound important. It needs to make a reader see how you notice, decide, and change. That usually begins with structure: a scene that starts moving before the writer explains what it means, a turn that complicates the first impression, and an ending that reveals rather than announces the point.</p>
          <div><p>Argument matters even in a personal story. Each paragraph should add evidence for an emerging idea about you. A list of achievements proves less than one carefully observed choice. Concrete details—what you heard, attempted, misunderstood, or revised—give reflection something solid to rest on.</p><p>Language and grammar serve that movement. Precise nouns and active verbs beat inflated adjectives. Sentence length should change with the thought. Correct punctuation makes the reading invisible. Writivia scores those four areas separately, then points to the few revisions likely to produce the biggest improvement.</p></div>
        </div>
      </section>

      <section className="paper-section">
        <div className="shell"><div className="section-heading"><span className="section-number">03</span><h2>Questions students ask before pasting a draft</h2></div>
          <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="shell review-reading">
        <div className="section-heading"><span className="section-number">04</span><h2>How to read an essay review without losing your voice</h2></div>
        <div className="review-reading-grid">
          <article><span>01</span><h3>Start with the highest-leverage problem</h3><p>Read the priority fixes before touching individual sentences. If the opening starts too early or the reflection arrives without evidence, polishing adjectives will not repair the reader's experience. Revise the structural problem first.</p></article>
          <article><span>02</span><h3>Return to the quoted evidence</h3><p>A useful comment points to language already in your draft. Read the sentence in its paragraph and ask what job it is doing. Keep the event and insight yours; change the amount, order, or precision of evidence.</p></article>
          <article><span>03</span><h3>Revise one intention at a time</h3><p>Do one pass for movement, one for reflection, and one for language. Trying to accept every suggestion at once usually makes the prose smoother but less personal. A review is a diagnosis, not a replacement draft.</p></article>
          <article><span>04</span><h3>Recheck the reader's path</h3><p>After revising, read only the first sentence of each paragraph. They should reveal a sequence of changing attention rather than four versions of the same lesson. Then read aloud for pace and unnecessary explanation.</p></article>
        </div>
      </section>

      <section className="shell link-section">
        <p className="eyebrow">Keep working</p><h2>Choose the next lens for your draft.</h2>
        <div className="link-grid">
          {[["College Essay Reviewer","Line-by-line notes on the full draft.","/college-essay-reviewer/"],["Personal Statement Grader","Common App feedback built for 650 words.","/personal-statement-grader/"],["Essay Hook Grader","Test whether your first three paragraphs pull weight.","/college-essay-hook-grader/"],["Essay Examples","Study annotated, team-written samples.","/essay-examples/"],["Acceptance Calculator","Explore a broad planning range for 30 schools.","/college-acceptance-calculator/"]].map(([title, text, href]) => <Link href={href} key={href}><strong>{title}</strong><span>{text}</span><ArrowRight /></Link>)}
        </div>
      </section>
      <JsonLd data={[{
        "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Writivia College Essay Grader",
        applicationCategory: "EducationalApplication", operatingSystem: "Web", url: absoluteUrl("/"), offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      }, {
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      }]} />
    </>
  );
}
