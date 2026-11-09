import type { MetadataRoute } from "next";
import { essayExamples, schoolExamples } from "@/lib/examples";
import { exampleCategories } from "@/lib/category-examples";
import { absoluteUrl } from "@/lib/site";
import { getSchoolEssayDates, schoolEssays } from "@/lib/school-essays";
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "/", updatedAt:"2026-11-08", priority: 1, changeFrequency: "weekly" as const },
    { path: "/essay-examples/", updatedAt:"2026-11-08", priority: .9, changeFrequency: "weekly" as const },
    { path: "/pricing/", updatedAt:"2026-11-09", priority: .7, changeFrequency: "monthly" as const },
    { path: "/refund-policy/", updatedAt:"2026-11-09", priority: .5, changeFrequency: "yearly" as const },
    { path: "/ai-policy/", updatedAt:"2026-11-08", priority: .5, changeFrequency: "yearly" as const },
    { path: "/college-essay-reviewer/", updatedAt:"2026-11-08", priority: .8, changeFrequency: "monthly" as const },
    { path: "/personal-statement-grader/", updatedAt:"2026-11-09", priority: .8, changeFrequency: "monthly" as const },
    { path: "/college-essay-hook-grader/", updatedAt:"2026-11-08", priority: .7, changeFrequency: "monthly" as const },
    { path: "/college-acceptance-calculator/", updatedAt:"2026-11-08", priority: .75, changeFrequency: "monthly" as const },
  ];
  const categoryUpdates:Record<string,string>={"personal-statement":"2026-11-09","common-app":"2026-11-08","why-us":"2026-11-08"};
  return [
    ...staticPages.map(page => ({ url:absoluteUrl(page.path), lastModified:new Date(page.updatedAt), changeFrequency:page.changeFrequency, priority:page.priority })),
    ...essayExamples.map(example => ({ url:absoluteUrl(`/essay-examples/${example.slug}/`), lastModified:new Date(example.updatedAt), changeFrequency:"monthly" as const, priority:.8 })),
    ...exampleCategories.map(category => ({ url:absoluteUrl(`/essay-examples/${category.slug}/`), lastModified:new Date(category.updatedAt||categoryUpdates[category.slug]), changeFrequency:"weekly" as const, priority:.85 })),
    ...schoolExamples.map(school => ({ url:absoluteUrl(`/essay-examples/${school.slug}/`), lastModified:new Date(school.updatedAt), changeFrequency:"monthly" as const, priority:.7 })),
    ...schoolEssays.map(essay => ({ url:absoluteUrl(`/essay-examples/${essay.schoolSlug}/${essay.slug}/`), lastModified:new Date(getSchoolEssayDates(essay).updatedAt), changeFrequency:"monthly" as const, priority:.65 })),
  ];
}
