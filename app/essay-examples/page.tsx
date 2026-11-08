import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpenCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { essayExamples, exampleGroups, getExample, schoolExamples, wordCount } from "@/lib/examples";
import { absoluteUrl } from "@/lib/site";
import { exampleCategories } from "@/lib/category-examples";

export const metadata: Metadata = {
  title: "College Application Essay Examples — Annotated",
  description: "Read complete, original college application essay examples with honest word counts and editor notes on openings, evidence, reflection, and structure.",
  alternates: { canonical: "/essay-examples/" },
};

export default function Examples() {
  return <>
    <section className="shell page-hero examples-hero">
      <Breadcrumbs items={[{ label: "Essay examples", href: "/essay-examples/" }]} />
      <span className="kicker">Complete, original samples with editor notes</span>
      <h1>College Application Essay Examples</h1>
      <p>Read the full essay, see its actual word count, and study the choices that make it move. Every sample is written by our team to reveal technique—never copied from a student submission.</p>
    </section>

    <section className="shell examples-intro">
      <div><span className="section-number">Read like a writer</span><h2>Use an example to see a choice—not to borrow a story.</h2></div>
      <div>
        <p>First, notice how quickly the essay gives you something concrete to follow. Then mark the sentence that changes your understanding of the opening. Finally, test whether the last paragraph grows from details already on the page.</p>
        <p>Close the sample before drafting. Your own essay needs evidence only you can supply: what you noticed, attempted, misunderstood, changed, and carried forward.</p>
      </div>
    </section>

    <section className="paper-section"><div className="shell example-library">
      <div className="section-heading"><span className="section-number">Complete essays</span><h2>Start with three different ways to build reflection.</h2></div>
      <div className="real-example-grid">{essayExamples.map(example => <Link href={`/essay-examples/${example.slug}/`} key={example.slug}>
        <span>{example.category} · {wordCount(example.body)} words</span>
        <h3>{example.title}</h3><p>{example.summary}</p><strong>Read the full annotated essay <ArrowRight size={16} /></strong>
      </Link>)}</div>
    </div></section>

    <section className="shell example-groups" aria-labelledby="types-heading">
      <div className="section-heading example-types-heading"><span className="section-number">Four common types</span><h2 id="types-heading">What each kind of application essay should teach you.</h2></div>
      {exampleGroups.map((group, groupIndex) => <section key={group.title}>
        <header><span>0{groupIndex + 1}</span><div><h2>{group.title}</h2><p>{group.intro}</p></div></header>
        <div className="type-guide">
          <div><strong>What to learn</strong><p>{group.teaches}</p></div>
          <div><strong>Common mistake</strong><p>{group.commonMistake}</p></div>
          <div><strong>Reading order</strong><p>{group.readingOrder}</p></div>
        </div>
        {group.examples.length > 0 ? <div className="type-example-links">{group.examples.map(slug => { const example = getExample(slug); return example ? <Link href={`/essay-examples/${example.slug}/`} key={slug}><BookOpenCheck size={18} /><span><strong>{example.title}</strong><small>{wordCount(example.body)} words · complete sample with notes</small></span><ArrowUpRight size={18} /></Link> : null; })}</div> : <p className="honest-note">No complete “Why us” sample is published yet. Use the school-specific guides below while our editors finish the first full example.</p>}
      </section>)}
    </section>

    <section className="ink-section category-index"><div className="shell"><div><span className="section-number">Application essay examples by type</span><h2>Choose the guide that matches the draft in front of you.</h2><p>These in-depth collections combine practical reading guidance with three complete, team-written examples and line-specific editor notes.</p></div><div>{exampleCategories.map(category=><Link href={`/essay-examples/${category.slug}/`} key={category.slug}><span><strong>{category.name}</strong><small>3 complete annotated examples</small></span><ArrowUpRight/></Link>)}<a href="#types-heading"><span><strong>Activity Essay Examples</strong><small>Read the guide on this page</small></span><ArrowRight/></a></div></div></section>

    <section className="paper-section"><div className="shell school-index">
      <span className="section-number">School-specific guidance</span><h2>Plan the response before you study a sample.</h2>
      <p className="school-index-lede">These are prompt guides, not recycled essays. Each page explains what that school's common prompt shapes ask you to demonstrate, how to choose evidence, and what to avoid.</p>
      <div>{schoolExamples.map(school => <Link href={`/essay-examples/${school.slug}/`} key={school.slug}><span>{school.short}</span><small>{school.promptTypes.join(" · ")}</small><ArrowUpRight /></Link>)}</div>
    </div></section>

    <section className="ink-section small-cta"><div className="shell"><h2>Ready to look at your own draft?</h2><div><Link className="button button-light" href="/#grader">Grade my essay — free</Link><Link className="text-link-light" href="/college-essay-reviewer/">Get line-by-line feedback →</Link></div></div></section>
    <JsonLd data={{ "@context":"https://schema.org", "@type":"CollectionPage", name:"College Application Essay Examples", url:absoluteUrl("/essay-examples/"), description:"Complete, original application essay examples with editor annotations.", hasPart:essayExamples.map(example => ({ "@type":"Article", headline:example.title, url:absoluteUrl(`/essay-examples/${example.slug}/`), wordCount:wordCount(example.body) })) }} />
  </>;
}
