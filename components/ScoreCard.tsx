import type { GradeResult } from "@/lib/rubric";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const labels = { structure: "Structure", argument: "Argument", language: "Language", grammar: "Grammar" };

export function ScoreCard({ result, demo = false }: { result: GradeResult; demo?: boolean }) {
  return (
    <section className={demo ? "score-card score-card-demo" : "score-card"} aria-label={demo ? "Example essay score" : "Your essay score"}>
      {demo && <h2 className="sample-label">Sample review</h2>}
      <div className="score-head">
        <div><span className="eyebrow">Overall score</span><div className="big-score">{result.total}<span>/100</span></div></div>
        <div className="score-ring" style={{ "--score": String(result.total * 3.6) + "deg" } as React.CSSProperties}><span>{result.total}</span></div>
      </div>
      <div className="dimension-list">
        {Object.entries(result.dimensions).map(([key, value]) => (
          <div className="dimension" key={key}>
            <div><span>{labels[key as keyof typeof labels]}</span><strong>{value}</strong></div>
            <div className="score-track"><i style={{ width: String(value) + "%" }} /></div>
          </div>
        ))}
      </div>
      <div className="top-fixes">
        <h3>Top fixes</h3>
        {result.top_fixes.map((fix, index) => (
          <div className="fix" key={fix.quote + index}>
            <CheckCircle2 aria-hidden size={18} />
            <p><strong>{fix.issue}</strong> {fix.direction}</p>
          </div>
        ))}
      </div>
      {!demo && <div className="line-feedback">
        <h3>Line-by-line notes</h3>
        {result.line_feedback.map((item, index) => (
          <article key={item.quote + index}>
            <blockquote>“{item.quote}”</blockquote>
            <p><ArrowRight aria-hidden size={16} />{item.comment}</p>
          </article>
        ))}
      </div>}
    </section>
  );
}
