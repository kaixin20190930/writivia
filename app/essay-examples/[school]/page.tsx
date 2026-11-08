import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, PenLine } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { essayExamples, exampleSlugs, getExample, getSchool, schoolExamples, schoolSlugs, wordCount } from "@/lib/examples";
import { absoluteUrl } from "@/lib/site";

const promptGuidance: Record<string, string[]> = {
  harvard: [
    "Use this response to supply context the activities list cannot carry: a family practice, responsibility, place, or constraint that shaped how you interpret other people. Keep the emphasis on choices and habits, not on asking the reader to admire the circumstance.",
    "Make curiosity observable. Name what you read, tested, built, debated, or revised, then preserve the uncertainty that still makes the subject worth pursuing instead of ending with a career slogan.",
    "Define community through actual relationships and shared work. Show what another member taught you and the modest practice you would carry into residential life without promising to transform Harvard.",
  ],
  stanford: [
    "Treat intellectual vitality as behavior rather than a trait. Follow the detour that kept you reading, prototyping, collecting, or asking after an assignment ended, including the wrong turn that improved the inquiry.",
    "Give the value consequences. Instead of defining what matters in the abstract, show a moment when honoring it cost time, certainty, status, or an easier option.",
    "Write toward daily life: sleep habits, sounds, shared-space rituals, food, small worries, and how you repair friction. One or two connected details reveal more generosity than a list of manufactured quirks.",
  ],
  mit: [
    "Anchor the field in a problem you have already touched. Explain which observation or failed model sharpened the question, using only the technical vocabulary needed for a non-specialist to understand the decision.",
    "Reveal how work moves among people. Name the person whose expertise changed the design and make your own contribution precise without claiming sole ownership.",
    "A challenge can be small if it forces a real revision. A broken component, contradictory result, missed handoff, or unusable instruction often reveals more judgment than a dramatic obstacle summarized later.",
  ],
  nyu: [
    "Specify the distance crossed: vocabulary, incentives, age, access, discipline, or expectations. The bridge should be a visible process—a translated agenda, redesigned meeting, shared prototype, or rule that redistributed voice.",
    "Describe community through repeated participation. Show what responsibility you returned to, how trust altered the work, and what remained when you were not directing it.",
    "Focus on one exchange, source, language problem, or local consequence that complicated your first interpretation. Travel or New York itself is not proof of a global perspective.",
  ],
  "johns-hopkins": [
    "Open with the uncertainty the group had to resolve, then track responsibility. Show which result or objection changed the plan and why the outcome required more than one person.",
    "Frame interest as a developing question rather than a declared major. Connect an observation to a method—an interview, proof, dataset, archive, or experiment—and end with a sharper question.",
    "Choose a setting where knowledge and care travel in more than one direction. Show the routine that sustained participation and credit the people who defined useful contribution.",
  ],
  ucla: [
    "Establish the situation quickly and spend the PIQ on decisions. Leadership may mean changing a process, sustaining an unglamorous responsibility, or helping a group handle conflict; a title is not evidence by itself.",
    "Show the working process: material, constraint, revision, audience, or technique. Explain what making in this form lets you investigate that another form would not.",
    "Distinguish what was available from what you made of it. Describe the initiative, workaround, or follow-through and ensure the example adds evidence not repeated in another PIQ.",
  ],
  cornell: [
    "Research the undergraduate college receiving the application, not Cornell generally. Pair verified resources with actions and explain how that college's curriculum advances work already underway.",
    "Identify a practice of participation: maintaining a system, translating knowledge, welcoming newcomers, or making disagreement productive. Contribution needs prior evidence and room to change.",
    "Build the interest from a question joining your experiences. If several fields appear, name the problem that requires them and why this Cornell college is the right home for the intersection.",
  ],
  usc: [
    "Organize curiosity around a problem rather than two major names. Show the experience that exposed it, then connect a few verified USC resources to the next investigation, production, or test.",
    "Choose a group where your role became clearer over time. Describe an adjustment prompted by another person and concrete work you can continue without arriving as the community's solution.",
    "Use short answers to add dimensions missing elsewhere: a genuine pleasure, cultural touchstone, odd routine, or concise preference. Specificity beats compressed philosophy and name-dropping.",
  ],
};

export function generateStaticParams() { return [...schoolSlugs, ...exampleSlugs].map(school => ({ school })); }

export async function generateMetadata({ params }: { params: Promise<{ school: string }> }): Promise<Metadata> {
  const { school: slug } = await params;
  const example = getExample(slug);
  if (example) return {
    title: `${example.title} — Annotated College Essay Example`,
    description: `${example.summary} Read the complete ${wordCount(example.body)}-word sample with three practical editor notes.`,
    alternates: { canonical: `/essay-examples/${example.slug}/` },
  };
  const school = getSchool(slug);
  if (!school) return {};
  return {
    title: `${school.short} Supplemental Essay Guide — Prompts & Strategy`,
    description: `Plan stronger ${school.short} supplemental essays with guidance for ${school.promptTypes.join(", ")}, evidence selection, and common mistakes.`,
    alternates: { canonical: `/essay-examples/${school.slug}/` },
  };
}

function ExamplePage({ example }: { example: NonNullable<ReturnType<typeof getExample>> }) {
  const related = essayExamples.filter(item => item.slug !== example.slug);
  const count = wordCount(example.body);
  return <>
    <section className="shell page-hero school-hero">
      <Breadcrumbs items={[{label:"Essay examples",href:"/essay-examples/"},{label:example.title,href:`/essay-examples/${example.slug}/`}]} />
      <span className="kicker">{example.category} · {count} words · team-written sample</span>
      <h1>{example.title}</h1><p>{example.summary}</p>
    </section>
    <section className="shell example-context">
      <div><span className="section-number">Sample prompt</span><p>{example.prompt}</p></div>
      <div><span className="section-number">What to study</span><p>{example.lesson}</p></div>
    </section>
    <section className="paper-section essay-stack"><div className="shell"><article className="sample-essay standalone-example">
      <header><span>Complete example · {count} words</span><h2>Read once for the story. Read again for the choices.</h2><p>The numbered editor notes explain transferable techniques. Do not copy the language, identity, or events.</p></header>
      <div className="essay-layout"><div className="essay-body">{example.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<small>Original sample written by the Writivia team to illustrate technique. It is not a real student's submitted essay.</small></div>
      <aside><h3><PenLine size={17} /> Editor's margin</h3>{example.notes.map((note,index) => <div key={note}><span>{index + 1}</span><p>{note}</p></div>)}</aside></div>
    </article></div></section>
    <section className="shell school-next"><div><span className="section-number">Apply the lesson</span><h2>See what your own draft makes visible.</h2><Link className="button" href="/#grader">Grade my essay — free</Link></div><div><h3>Read another complete example</h3>{related.map(item => <Link href={`/essay-examples/${item.slug}/`} key={item.slug}>{item.title}<ArrowRight size={16} /></Link>)}<Link href="/essay-examples/">All essay examples<ArrowRight size={16} /></Link></div></section>
    <JsonLd data={{ "@context":"https://schema.org", "@type":"Article", headline:example.title, description:example.summary, datePublished:example.publishedAt, dateModified:example.updatedAt, wordCount:count, author:{"@type":"Organization",name:"Writivia"}, publisher:{"@type":"Organization",name:"Writivia"}, mainEntityOfPage:absoluteUrl(`/essay-examples/${example.slug}/`) }} />
  </>;
}

function SchoolGuidePage({ school }: { school: NonNullable<ReturnType<typeof getSchool>> }) {
  const others = schoolExamples.filter(item => item.slug !== school.slug).slice(0, 3);
  return <>
    <section className="shell page-hero school-hero">
      <Breadcrumbs items={[{label:"Essay examples",href:"/essay-examples/"},{label:school.short,href:`/essay-examples/${school.slug}/`}]} />
      <span className="kicker">Prompt strategy · evidence planning · no recycled samples</span>
      <h1>{school.short} Supplemental Essay Guide</h1><p>{school.focus}</p>
    </section>
    <section className="shell guide-introduction"><span className="section-number">How to use this guide</span><p>{school.introduction}</p></section>
    <section className="shell prompt-types"><span className="section-number">Common prompt shapes</span><div>{school.promptTypes.map((type,index) => <article key={type}><span>0{index + 1}</span><h2>{type}</h2><p>{promptGuidance[school.slug][index]}</p></article>)}</div></section>
    <section className="paper-section"><div className="shell school-advice"><div className="section-heading"><span className="section-number">Drafting strategy</span><h2>Build the answer from evidence, not adjectives.</h2></div><div className="advice-grid">{school.advice.map((item,index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><div className="pitfall"><strong>Most common mistake</strong><p>{school.pitfall}</p></div></div></section>
    <section className="shell self-check"><div><span className="section-number">Before you submit</span><h2>Three questions to test the draft.</h2></div><ol>{school.questions.map(question => <li key={question}>{question}</li>)}</ol></section>
    <section className="shell guide-samples"><span className="section-number">Study technique in a complete essay</span><h2>These examples are not {school.short}-specific. Use them to study structure.</h2><div>{essayExamples.map(example => <Link href={`/essay-examples/${example.slug}/`} key={example.slug}><BookOpenCheck size={18}/><span><strong>{example.title}</strong><small>{example.category} · {wordCount(example.body)} words</small></span><ArrowRight size={17}/></Link>)}</div></section>
    <section className="shell school-next"><div><span className="section-number">Next step</span><h2>Want to see what your draft can improve?</h2><Link className="button" href="/#grader">Use the college essay grader</Link></div><div><h3>More school guides</h3>{others.map(other => <Link href={`/essay-examples/${other.slug}/`} key={other.slug}>{other.short}<ArrowRight size={16} /></Link>)}<Link href="/essay-examples/">All essay examples<ArrowRight size={16} /></Link></div></section>
  </>;
}

export default async function ExampleOrSchoolPage({ params }: { params: Promise<{ school: string }> }) {
  const { school: slug } = await params;
  const example = getExample(slug);
  if (example) return <ExamplePage example={example} />;
  const school = getSchool(slug);
  if (school) return <SchoolGuidePage school={school} />;
  notFound();
}
