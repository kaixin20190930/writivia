import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = { title:"Payment received", robots:{ index:false, follow:false } };

export default function CheckoutSuccess() { return <section className="shell checkout-success"><CheckCircle2 size={42}/><span className="kicker">Payment received</span><h1>Your review access is being activated.</h1><p>Stripe has returned you to Writivia. Your three reviews should be available within a few seconds; keep your receipt for payment records.</p><div><Link className="button" href="/#grader">Return to the essay grader</Link><Link href="/pricing/">Review plan details</Link></div></section>; }
