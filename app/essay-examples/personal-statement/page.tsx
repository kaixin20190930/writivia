import type { Metadata } from "next";
import { CategoryExamplesPage } from "@/components/CategoryExamplesPage";
import { getExampleCategory } from "@/lib/category-examples";
const category=getExampleCategory("personal-statement")!;
export const metadata:Metadata={title:"Personal Statement Examples — 3 Annotated Essays",description:category.description,alternates:{canonical:"/essay-examples/personal-statement/"}};
export default function Page(){return <CategoryExamplesPage category={category}/>;}
