import type { Metadata } from "next";
import { CategoryExamplesPage } from "@/components/CategoryExamplesPage";
import { getExampleCategory } from "@/lib/category-examples";

const category = getExampleCategory("application-essay")!;

export const metadata: Metadata = {
  title: "Application Essay Examples — 3 Annotated Samples",
  description: category.description,
  alternates: { canonical: "/essay-examples/application-essay/" },
};

export default function Page() {
  return <CategoryExamplesPage category={category} />;
}
