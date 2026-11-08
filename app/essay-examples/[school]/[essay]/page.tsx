import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, PenLine } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { getSchool } from "@/lib/examples";
import { getSchoolEssay, getSchoolEssayDates, getSchoolEssays, schoolEssaySlugs } from "@/lib/school-essays";
import { absoluteUrl } from "@/lib/site";

const countWords = (body: string[]) => body.join(" ").trim().split(/\s+/).filter(Boolean).length;

export function generateStaticParams() { return schoolEssaySlugs; }

export async function generateMetadata({params}:{params:Promise<{school:string;essay:string}>}):Promise<Metadata>{
  const {school,essay}=await params;
  const sample=getSchoolEssay(school,essay);
  const guide=getSchool(school);
  if(!sample||!guide)return {};
  const path=`/essay-examples/${school}/${essay}/`;
  return {
    title:`${sample.title} — ${guide.short} Essay Example`,
    description:`Read this ${countWords(sample.body)}-word, team-written ${guide.short} supplemental essay example with three editor notes. ${sample.summary}`,
    alternates:{canonical:path},
  };
}

export default async function SchoolEssayPage({params}:{params:Promise<{school:string;essay:string}>}){
  const {school,essay}=await params;
  const sample=getSchoolEssay(school,essay);
  const guide=getSchool(school);
  if(!sample||!guide)notFound();
  const count=countWords(sample.body);
  const dates=getSchoolEssayDates(sample);
  const path=`/essay-examples/${school}/${essay}/`;
  const related=getSchoolEssays(school).filter(item=>item.slug!==essay);
  return <>
    <section className="shell page-hero school-hero">
      <Breadcrumbs items={[{label:"Essay examples",href:"/essay-examples/"},{label:guide.short,href:`/essay-examples/${school}/`},{label:sample.title,href:path}]}/>
      <span className="kicker">{guide.short} · {sample.promptType} · {count} words · team-written sample</span>
      <h1>{sample.title}</h1><p>{sample.summary}</p>
    </section>
    <section className="shell example-context"><div><span className="section-number">Sample prompt</span><p>{sample.prompt}</p></div><div><span className="section-number">Use this example carefully</span><p>Study its decisions, evidence, and reflection. Do not copy the language, identity, or events into an application.</p></div></section>
    <section className="paper-section essay-stack"><div className="shell"><article className="sample-essay standalone-example"><header><span>Complete example · {count} words</span><h2>{sample.summary}</h2></header><div className="essay-layout"><div className="essay-body">{sample.body.map(paragraph=><p key={paragraph}>{paragraph}</p>)}<small>Original teaching sample written by the Writivia team. It is not a real student's submitted essay and does not imply admission to {guide.name}.</small></div><aside><h3><PenLine size={17}/> Editor's margin</h3>{sample.notes.map((note,index)=><div key={note}><span>{index+1}</span><p>{note}</p></div>)}</aside></div></article></div></section>
    <section className="shell school-next"><div><span className="section-number">Return to the guide</span><h2>Plan the complete {guide.short} response set.</h2><Link className="button" href={`/essay-examples/${school}/`}>{guide.short} essay guide</Link></div><div><h3>More {guide.short} examples</h3>{related.map(item=><Link href={`/essay-examples/${school}/${item.slug}/`} key={item.slug}>{item.title}<ArrowRight size={16}/></Link>)}</div></section>
    <JsonLd data={[{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Essay examples",item:absoluteUrl("/essay-examples/")},{"@type":"ListItem",position:2,name:guide.short,item:absoluteUrl(`/essay-examples/${school}/`)},{"@type":"ListItem",position:3,name:sample.title,item:absoluteUrl(path)}]},{"@context":"https://schema.org","@type":"Article",headline:sample.title,description:sample.summary,datePublished:dates.publishedAt,dateModified:dates.updatedAt,wordCount:count,author:{"@type":"Organization",name:"Writivia"},publisher:{"@type":"Organization",name:"Writivia"},mainEntityOfPage:absoluteUrl(path)}]}/>
  </>;
}
