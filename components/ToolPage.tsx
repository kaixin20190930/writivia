import Link from "next/link";
import type { GradeMode } from "@/lib/rubric";
import { GradeForm } from "./GradeForm";
import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";
import { absoluteUrl } from "@/lib/site";

type ToolPageProps = {
  title: string; mode: GradeMode; eyebrow: string; intro: string; note: string;
  children: React.ReactNode; path?: string;
};

export function ToolPage({ title, mode, eyebrow, intro, note, children, path }: ToolPageProps) {
  const toolPath = path || ({
    full: "/college-essay-reviewer/",
    hook: "/college-essay-hook-grader/",
    statement: "/personal-statement-grader/",
  } as const)[mode];
  return <>
    <section className="shell page-hero">
      <Breadcrumbs items={[{ label: title, href: toolPath }]} />
      <span className="kicker">{eyebrow}</span><h1>{title}</h1><p>{intro}</p>
    </section>
    <section className="shell tool-stage"><GradeForm mode={mode} compact /><p className="tool-note">Editor’s note: {note}</p></section>
    <section className="shell prose-section">{children}</section>
    <section className="ink-section small-cta"><div className="shell"><h2>Read good work. Then improve your own.</h2><div><Link className="button button-light" href="/essay-examples/">Browse essay examples</Link><Link className="text-link-light" href="/">Use the college essay grader →</Link></div></div></section>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Writivia " + title, applicationCategory: "EducationalApplication", operatingSystem: "Web", url: absoluteUrl(toolPath), offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }} />
  </>;
}
