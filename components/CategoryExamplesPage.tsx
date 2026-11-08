import Link from "next/link";
import { ArrowRight, PenLine } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import type { ExampleCategory } from "@/lib/category-examples";
import { countWords } from "@/lib/category-examples";
import { absoluteUrl } from "@/lib/site";

export function CategoryExamplesPage({category}:{category:ExampleCategory}){
  const path=`/essay-examples/${category.slug}/`;
  return <>
    <section className="shell page-hero category-hero"><Breadcrumbs items={[{label:"Essay examples",href:"/essay-examples/"},{label:category.name,href:path}]}/><span className="kicker">Original examples · honest word counts · editor notes</span><h1>{category.name}</h1>{category.intro.map(p=><p key={p}>{p}</p>)}</section>
    <section className="shell category-guide"><div className="section-heading"><span className="section-number">Reading guide</span><h2>What to notice before you borrow a technique.</h2></div><div className="category-guide-grid">{category.sections.map((section,index)=><article key={section.title}><span>0{index+1}</span><h3>{section.title}</h3><p>{section.body}</p></article>)}</div></section>
    <section className="paper-section category-essay-section"><div className="shell"><div className="section-heading"><span className="section-number">Three complete samples</span><h2>Read for movement, evidence, and earned reflection.</h2></div>{category.essays.map((essay,index)=><article className="sample-essay" key={essay.title}><header><span>Example {index+1} · {countWords(essay.body.join(" "))} words · written by our team</span><h2>{essay.title}</h2><p><strong>Sample prompt:</strong> {essay.prompt}</p></header><div className="essay-layout"><div className="essay-body">{essay.body.map(p=><p key={p}>{p}</p>)}<small>Original teaching sample written by Writivia. Do not copy its language, identity, or events.</small></div><aside><h3><PenLine size={17}/> Editor's margin</h3>{essay.notes.map((note,n)=><div key={note}><span>{n+1}</span><p>{note}</p></div>)}</aside></div></article>)}</div></section>
    <section className="shell category-faq"><div className="section-heading"><span className="section-number">Questions</span><h2>Use examples without losing your own material.</h2></div><div className="faq-list">{category.faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
    <section className="ink-section small-cta"><div className="shell"><h2>Apply the structure to your own draft.</h2><div><Link className="button button-light" href={category.toolHref}>{category.toolLabel}</Link><Link className="text-link-light" href="/essay-examples/">Browse all application essay examples <ArrowRight size={15}/></Link></div></div></section>
    <JsonLd data={[{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Essay examples",item:absoluteUrl("/essay-examples/")},{"@type":"ListItem",position:2,name:category.name,item:absoluteUrl(path)}]},{"@context":"https://schema.org","@type":"CollectionPage",name:category.name,description:category.description,url:absoluteUrl(path),hasPart:category.essays.map(essay=>({"@type":"Article",headline:essay.title,wordCount:countWords(essay.body.join(" "))}))},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:category.faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}]}/>
  </>;
}
