import Link from "next/link";

const links = [
  ["Essay reviewer", "/college-essay-reviewer/"],
  ["Examples", "/essay-examples/"],
  ["Pricing", "/pricing/"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="wordmark" aria-label="Writivia home">
          writivia<span aria-hidden>.</span>
        </Link>
        <nav aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <Link href="/#grader" className="button button-small">Grade my essay</Link>
      </div>
    </header>
  );
}
