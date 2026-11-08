import { z } from "zod";

export const gradeModeSchema = z.enum(["full", "hook", "statement"]);
export type GradeMode = z.infer<typeof gradeModeSchema>;

export const gradeRequestSchema = z.object({
  text: z.string().min(200).max(12000),
  mode: gradeModeSchema,
  sessionId: z.string().min(8).max(128),
  essayId: z.string().min(8).max(128),
  fingerprint: z.string().min(8).max(256),
});

export const gradeResultSchema = z.object({
  total: z.number().int().min(0).max(100),
  dimensions: z.object({
    structure: z.number().int().min(0).max(100),
    argument: z.number().int().min(0).max(100).optional(),
    language: z.number().int().min(0).max(100),
    grammar: z.number().int().min(0).max(100).optional(),
  }),
  top_fixes: z.array(z.object({ quote: z.string(), issue: z.string(), direction: z.string() })).length(3),
  line_feedback: z.array(z.object({ quote: z.string(), comment: z.string() })).min(5).max(12),
});

export type GradeResult = z.infer<typeof gradeResultSchema>;

const baseCriteria = [
  "Score the student's original application essay from 0 to 100. Every dimension score must also use the 0–100 scale (for example, 82, not 8.2 or 8). Apply these criteria:",
  "- structure: Does the opening enter a specific moment quickly? Is there a clear turn or development? Does the ending return to the essay's central meaning without repeating it?",
  "- argument: Does each paragraph make a clear point supported by concrete evidence? Flag empty adjectives, résumé listing, and claims the scene does not earn.",
  "- language: Are words specific and natural? Flag awkward translated phrasing, clichés, abstractions, and monotonous sentence length.",
  "- grammar: Check tense consistency, subject-verb agreement, punctuation, fragments, and run-ons.",
  "Exactly three top fixes are required. Give 5–12 line-level comments. Quote only short excerpts from the input.",
  "Set total to the rounded average of the returned dimension scores. Never mix a 10-point dimension scale with a 100-point total.",
  "Do not rewrite a complete sentence for the student; give direction only.",
  "Do not judge, estimate, or mention the author's admission chances.",
  "Do not infer sensitive facts beyond what the student wrote.",
].join("\n");

const modeCriteria: Record<GradeMode, string> = {
  full: "Review the full essay with all four criteria weighted equally.",
  hook: "Focus on the opening only. Weight structure and language most heavily. Treat total as opening strength, while still returning all four schema fields.",
  statement: "For argument, focus on whether personal experience, motivation, reflection, and future direction are specific and connected. Avoid rewarding prestige or dramatic hardship.",
};

export function buildRubric(mode: GradeMode) {
  return "You are a rigorous, encouraging US college essay editor.\n" + baseCriteria + "\n" + modeCriteria[mode];
}

const fullDimensions = {
  type: "object",
  additionalProperties: false,
  properties: {
    structure: { type: "integer", minimum: 0, maximum: 100 },
    argument: { type: "integer", minimum: 0, maximum: 100 },
    language: { type: "integer", minimum: 0, maximum: 100 },
    grammar: { type: "integer", minimum: 0, maximum: 100 },
  },
  required: ["structure", "argument", "language", "grammar"],
} as const;

const hookDimensions = {
  type: "object",
  additionalProperties: false,
  properties: {
    structure: { type: "integer", minimum: 0, maximum: 100 },
    language: { type: "integer", minimum: 0, maximum: 100 },
  },
  required: ["structure", "language"],
} as const;

export function getGradeJsonSchema(mode: GradeMode) { return {
  type: "object",
  additionalProperties: false,
  properties: {
    total: { type: "integer", minimum: 0, maximum: 100 },
    dimensions: mode === "hook" ? hookDimensions : fullDimensions,
    top_fixes: {
      type: "array", minItems: 3, maxItems: 3,
      items: {
        type: "object", additionalProperties: false,
        properties: { quote: { type: "string" }, issue: { type: "string" }, direction: { type: "string" } },
        required: ["quote", "issue", "direction"],
      },
    },
    line_feedback: {
      type: "array", minItems: 5, maxItems: 12,
      items: {
        type: "object", additionalProperties: false,
        properties: { quote: { type: "string" }, comment: { type: "string" } },
        required: ["quote", "comment"],
      },
    },
  },
  required: ["total", "dimensions", "top_fixes", "line_feedback"],
} as const; }
