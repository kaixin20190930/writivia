import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link href="/" className="wordmark wordmark-light">writivia<span>.</span></Link>
          <p>Write better application essays.</p>
        </div>
        <div>
          <strong>Tools</strong>
          <Link href="/college-essay-reviewer/">Essay reviewer</Link>
          <Link href="/personal-statement-grader/">Personal statement grader</Link>
          <Link href="/college-essay-hook-grader/">Hook grader</Link>
        </div>
        <div>
          <strong>Learn</strong>
          <Link href="/essay-examples/">Essay examples</Link>
          <Link href="/pricing/">Pricing</Link>
          <Link href="/refund-policy/">Refund terms</Link>
          <Link href="/ai-policy/">AI policy</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Writivia</span>
        <span>Independent of every college and university.</span>
      </div>
    </footer>
  );
}
