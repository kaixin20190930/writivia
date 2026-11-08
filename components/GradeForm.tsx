"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { LoaderCircle, LockKeyhole, Trash2 } from "lucide-react";
import type { GradeMode, GradeResult } from "@/lib/rubric";
import { ScoreCard } from "./ScoreCard";

function getStoredId(key: string) {
  let value = localStorage.getItem(key);
  if (!value) { value = crypto.randomUUID(); localStorage.setItem(key, value); }
  return value;
}

export function GradeForm({ mode = "full", compact = false }: { mode?: GradeMode; compact?: boolean }) {
  const storageKey = "writivia:draft:" + mode;
  const [text, setText] = useState("");
  const [result, setResult] = useState<GradeResult | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "limited">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => { setText(localStorage.getItem(storageKey) || ""); }, [storageKey]);
  useEffect(() => { if (text) localStorage.setItem(storageKey, text); }, [text, storageKey]);
  const words = useMemo(() => text.trim() ? text.trim().split(/\s+/).length : 0, [text]);

  async function grade() {
    setMessage("");
    if (text.length < 200 || text.length > 12000) {
      setStatus("error"); setMessage("Paste between 200 and 12,000 characters before grading."); return;
    }
    setStatus("loading");
    try {
      const response = await fetch("/api/grade/", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, mode, sessionId: getStoredId("writivia:session"), essayId: getStoredId("writivia:essay:" + mode), fingerprint: getStoredId("writivia:fingerprint") }),
      });
      const body = await response.json();
      if (!response.ok) {
        setStatus(response.status === 429 ? "limited" : "error");
        setMessage(typeof body.error === "string" ? body.error : body.error?.message || "Something went wrong. Try again."); return;
      }
      setResult(body); setStatus("idle");
    } catch {
      setStatus("error"); setMessage("We couldn't reach the grader. Check your connection and try again.");
    }
  }

  async function remove() {
    localStorage.removeItem(storageKey); setText(""); setResult(null); setStatus("idle"); setMessage("");
    await fetch("/api/grade/", { method: "DELETE", headers:{"Content-Type":"application/json"}, body:JSON.stringify({sessionId:getStoredId("writivia:session")}) }).catch(() => undefined);
  }

  return (
    <div className={compact ? "grader grader-compact" : "grader"}>
      <div className="editor-sheet">
        <label htmlFor={"essay-" + mode}>{mode === "hook" ? "Your opening" : mode === "statement" ? "Your personal statement" : "Your college essay"}</label>
        <textarea
          id={"essay-" + mode} value={text} onChange={(event) => setText(event.target.value)}
          placeholder={mode === "hook" ? "Paste the first three paragraphs of your essay" : "Paste your college essay here (300–1,500 words)"}
          rows={compact ? 12 : 17}
        />
        <div className="editor-meta">
          <span>{words.toLocaleString()} words</span>
          <span className={words > 0 && words < 300 ? "hint-active" : ""}>{mode === "hook" ? "First 3 paragraphs only" : "300+ words recommended"}</span>
        </div>
        <button className="button button-wide" type="button" onClick={grade} disabled={status === "loading"}>
          {status === "loading" ? <><LoaderCircle className="spin" size={18} /> Reading your essay…</> : "Grade my essay — free"}
        </button>
        {message && (status === "limited" ? <div className="upgrade-card" role="alert"><strong>Your review limit has been reached.</strong><p>{message}</p><Link className="button button-small" href="/pricing/">See review plans</Link></div> : <div className={"form-message " + status} role="alert">{message}</div>)}
        <div className="privacy-note"><LockKeyhole size={14} /> Not used to train AI models. <Link href="/ai-policy/">Read our AI policy</Link></div>
      </div>
      {result && <div><ScoreCard result={result} /><button className="text-button danger" type="button" onClick={remove}><Trash2 size={15} /> Delete this essay</button></div>}
    </div>
  );
}
