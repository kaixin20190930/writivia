import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Writivia handles account, essay, payment, and usage data.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicy() {
  return <>
    <section className="shell page-hero">
      <Breadcrumbs items={[{ label: "Privacy policy", href: "/privacy-policy/" }]} />
      <span className="kicker">Last updated November 9, 2026</span>
      <h1>Privacy Policy</h1>
      <p>How Writivia handles the information needed to provide essay feedback, accounts, and paid access.</p>
    </section>
    <section className="shell prose-section">
      <h2>Information we process</h2>
      <p>We process the essay text and grading mode you submit to generate feedback. We also process limited technical data used to prevent abuse, including an IP address, browser identifier, character count, and a shortened hash of the submission. Application logs do not store the full essay text.</p>
      <h2>Accounts and authentication</h2>
      <p>Clerk provides account registration, email verification, and Google sign-in. We receive the account identifier and basic profile information needed to recognize your session and attach paid review access to your account. Google account data is used only for sign-in and is not sold or used for advertising.</p>
      <h2>Payments and access</h2>
      <p>Stripe processes payments. Writivia does not receive or store full card details. We retain payment references, plan status, review usage, expiration dates, and refund status so we can provide and revoke paid access correctly.</p>
      <h2>Draft storage and service providers</h2>
      <p>Draft history remains in your browser unless you submit text for grading. Submitted text is sent to the model provider to generate feedback and is not added to an essay database or used by Writivia to train models. Clerk, Stripe, Cloudflare, and the model provider process limited data under their own service terms.</p>
      <h2>Retention, deletion, and choices</h2>
      <p>Rate-limit and entitlement records are retained only as long as needed to operate the service, prevent duplicate benefits, handle refunds, and meet legal obligations. You can remove local draft data with the product's delete control. To request deletion of account-related data, email <a href="mailto:hello@writivia.com">hello@writivia.com</a>.</p>
      <h2>Contact</h2>
      <p>Questions or privacy requests can be sent to <a href="mailto:hello@writivia.com">hello@writivia.com</a>. We may update this policy when the product or its service providers change, and the date above will reflect the latest revision.</p>
    </section>
  </>;
}
