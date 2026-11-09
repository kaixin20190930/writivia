import Link from "next/link";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import { Suspense } from "react";

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
        <div className="header-account">
          <Suspense>
            <Show when="signed-out"><SignInButton mode="modal"><button className="text-button" type="button">Sign in</button></SignInButton></Show>
            <Show when="signed-in"><Link href="/account/">Account</Link><UserButton /></Show>
          </Suspense>
          <Link href="/#grader" className="button button-small">Grade my essay</Link>
        </div>
      </div>
    </header>
  );
}
