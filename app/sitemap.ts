import type { MetadataRoute } from "next";
import { essayExamples, schoolExamples } from "@/lib/examples";
import { exampleCategories } from "@/lib/category-examples";
import { absoluteUrl } from "@/lib/site";
import { schoolEssays } from "@/lib/school-essays";
export default function sitemap(): MetadataRoute.Sitemap {
  const updated = "2026-11-08";
  const staticPages = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/essay-examples/", priority: .9, changeFrequency: "weekly" as const },
    { path: "/pricing/", priority: .7, changeFrequency: "monthly" as const },
    { path: "/ai-policy/", priority: .5, changeFrequency: "yearly" as const },
    { path: "/college-essay-reviewer/", priority: .8, changeFrequency: "monthly" as const },
    { path: "/personal-statement-grader/", priority: .8, changeFrequency: "monthly" as const },
    { path: "/college-essay-hook-grader/", priority: .7, changeFrequency: "monthly" as const },
    { path: "/college-acceptance-calculator/", priority: .75, changeFrequency: "monthly" as const },
  ];
  return [
    ...staticPages.map(page => ({ url:absoluteUrl(page.path), lastModified:new Date(updated), changeFrequency:page.changeFrequency, priority:page.priority })),
    ...essayExamples.map(example => ({ url:absoluteUrl(`/essay-examples/${example.slug}/`), lastModified:new Date(example.updatedAt), changeFrequency:"monthly" as const, priority:.8 })),
    ...exampleCategories.map(category => ({ url:absoluteUrl(`/essay-examples/${category.slug}/`), lastModified:new Date(updated), changeFrequency:"weekly" as const, priority:.85 })),
    ...schoolExamples.map(school => ({ url:absoluteUrl(`/essay-examples/${school.slug}/`), lastModified:new Date(school.updatedAt), changeFrequency:"monthly" as const, priority:.7 })),
    ...schoolEssays.map(essay => ({ url:absoluteUrl(`/essay-examples/${essay.schoolSlug}/${essay.slug}/`), lastModified:new Date(updated), changeFrequency:"monthly" as const, priority:.65 })),
  ];
}
