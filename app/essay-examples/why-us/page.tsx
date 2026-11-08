import type { Metadata } from "next";
import { CategoryExamplesPage } from "@/components/CategoryExamplesPage";
import { getExampleCategory } from "@/lib/category-examples";
const category=getExampleCategory("why-us")!;
export const metadata:Metadata={title:"Why Us Essay Examples — 3 School-Specific Samples",description:category.description,alternates:{canonical:"/essay-examples/why-us/"}};
export default function Page(){return <CategoryExamplesPage category={category}/>;}
