import type { Metadata } from "next";
import { CategoryExamplesPage } from "@/components/CategoryExamplesPage";
import { getExampleCategory } from "@/lib/category-examples";
const category=getExampleCategory("common-app")!;
export const metadata:Metadata={title:"Common App Essay Prompts & Examples — 7 Prompts, 3 Samples",description:category.description,alternates:{canonical:"/essay-examples/common-app/"}};
export default function Page(){return <CategoryExamplesPage category={category}/>;}
