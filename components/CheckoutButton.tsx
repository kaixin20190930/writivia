"use client";

import { useState } from "react";
import { LoaderCircle } from "lucide-react";

export function CheckoutButton() {
  const [status, setStatus] = useState<"idle"|"loading"|"error">("idle");
  async function checkout() {
    setStatus("loading");
    try {
      const sessionId = localStorage.getItem("writivia:session") || crypto.randomUUID();
      const essayId = localStorage.getItem("writivia:essay:full") || crypto.randomUUID();
      localStorage.setItem("writivia:session", sessionId); localStorage.setItem("writivia:essay:full", essayId);
      const response = await fetch("/api/checkout/", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({sessionId,essayId}) });
      const body = await response.json();
      if (!response.ok || !body.url) throw new Error();
      window.location.assign(body.url);
    } catch { setStatus("error"); }
  }
  return <div className="checkout-action"><button className="button button-outline button-wide" type="button" onClick={checkout} disabled={status === "loading"}>{status === "loading" ? <><LoaderCircle className="spin" size={18}/> Opening secure checkout…</> : "Review one essay"}</button>{status === "error" && <p role="alert">Checkout is temporarily unavailable. Please try again.</p>}</div>;
}
