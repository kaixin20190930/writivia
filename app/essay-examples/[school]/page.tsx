import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, PenLine } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { essayExamples, exampleSlugs, getExample, getSchool, schoolExamples, schoolSlugs, wordCount } from "@/lib/examples";
import { absoluteUrl } from "@/lib/site";

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
    <section className="shell prompt-types"><span className="section-number">Common prompt shapes</span><div>{school.promptTypes.map((type,index) => <article key={type}><span>0{index + 1}</span><h2>{type}</h2><p>Choose one precise experience that gives the reader new evidence, then connect it directly to the question this prompt asks.</p></article>)}</div></section>
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
