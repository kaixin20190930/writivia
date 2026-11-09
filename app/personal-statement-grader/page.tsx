import type { Metadata } from "next";
import { ToolPage } from "@/components/ToolPage";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = { title: "Free Personal Statement Grader — Common App Essay Feedback", description: "Grade a Common App personal statement for specificity, reflection, structure, language, and grammar. First complete review is free.", alternates: { canonical: "/personal-statement-grader/" } };

const faqs = [
  ["How should I use the 650-word Common App limit?", "Treat 650 words as a ceiling, not a target. Reserve most of the draft for a specific scene, complication, and changed action; use only the background a reader needs. A complete 560-word essay is stronger than a padded 650-word essay with a second lesson."],
  ["What is the difference between a personal statement and a supplemental essay?", "A personal statement should reveal a way of thinking that can travel across colleges. A supplemental essay answers a narrower prompt about a school, academic interest, activity, community, or contribution. Do not turn the personal statement into a generic why-us response."],
  ["Can I use this grader until my essay is final?", "Yes. Revise the priorities in order, then submit the same essay again when paid access is available. Keep ownership of every sentence: use the feedback to diagnose evidence and structure, not to replace your voice with generated prose."],
] as const;

export default function Page() { return <>
  <ToolPage title="Personal Statement Grader" mode="statement" eyebrow="Built for the 650-word Common App essay" intro="Test whether your experiences and motivation connect on the page—without turning your personal statement into a résumé or a dramatic performance." note="Specific experience matters more than an impressive topic.">
    <h2>Personal statement vs. supplemental essay</h2>
    <p>The Common App personal statement has a 650-word limit and introduces a way of thinking that can travel across schools. A supplemental essay answers a narrower institutional prompt: why a program fits, how you contribute, or what you do outside class. Your main essay should therefore add evidence that the activities list and school-specific answers cannot carry. It does not need to announce a major or summarize every important event.</p>
    <h2>What this free personal statement grader emphasizes</h2>
    <p>The rubric asks whether a lived moment makes your motivation concrete. A restaurant shift, family routine, failed prototype, or difficult handoff matters not because the setting is unusual, but because your decisions and later reflection reveal something precise. The grader checks specificity, reflection, structure, language, and grammar. Specific evidence carries extra weight because an elegant sentence cannot rescue a draft whose claims are unsupported.</p>
    <p>Start near an action that gives the reader a question. Supply background only when it changes the stakes. The middle should complicate the writer’s first interpretation through a mistake, another person’s knowledge, or evidence that refuses the easy explanation. The ending should name a practiced change rather than a universal lesson. One honest adjustment is more credible than claiming the experience transformed every part of your life.</p>
    <h2>How to read the score</h2>
    <p>Use the overall score as orientation, not a verdict. Read the three priority fixes before polishing individual sentences. If the first fix says the central reflection lacks evidence, return to the scene and add the decision or observation that earns it. If structure is weak, move or remove material before correcting punctuation. Line comments are most useful after the essay’s movement is stable.</p>
    <div className="score-card score-card-demo statement-score-example">
      <div className="sample-label">Example scorecard</div>
      <div className="score-head"><div><strong className="big-score">78<span>/100</span></strong><p>Promising evidence; the turn needs one clearer decision.</p></div></div>
      <div className="dimension-list">
        <div className="dimension"><div><span>Specificity</span><strong>84</strong></div><div className="score-track"><i style={{width:"84%"}} /></div></div>
        <div className="dimension"><div><span>Reflection</span><strong>72</strong></div><div className="score-track"><i style={{width:"72%"}} /></div></div>
        <div className="dimension"><div><span>Structure</span><strong>76</strong></div><div className="score-track"><i style={{width:"76%"}} /></div></div>
        <div className="dimension"><div><span>Language and grammar</span><strong>82</strong></div><div className="score-track"><i style={{width:"82%"}} /></div></div>
      </div>
      <p><strong>Top fix:</strong> Show what the writer did differently after the teammate challenged the original plan; the current draft jumps from realization to conclusion.</p>
    </div>
    <h2>Revise in separate passes</h2>
    <p>First revise for movement: opening action, pressure, choice, consequence, and reflection. Next highlight every abstract label—curious, resilient, compassionate, a leader—and locate the action proving it. Then check proportion: other people should retain expertise and agency, and the conclusion should not claim more than the scene supports. Only then tighten sentences. This sequence prevents surface polish from hiding a structural problem.</p>
    <h2>Personal statement questions</h2>
    <div className="faq-list grader-faqs">{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
  </ToolPage>
  <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([question,answer])=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))}} />
  </>; }
