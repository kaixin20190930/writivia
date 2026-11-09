import { essayExamples, schoolSlugs } from "../lib/examples";
import { schoolEssays } from "../lib/school-essays";

const errors:string[]=[];
const standalone=new Set<string>();
for(const example of essayExamples){
  if(standalone.has(example.slug)) errors.push(`Duplicate standalone slug: ${example.slug}`);
  standalone.add(example.slug);
  const embeddedSchool=schoolSlugs.find(school=>example.slug===school||example.slug.startsWith(`${school}-`)||example.slug.endsWith(`-${school}`));
  if(embeddedSchool) errors.push(`Standalone slug contains a school slug: ${example.slug}`);
}
for(const school of schoolSlugs) if(standalone.has(school)) errors.push(`Standalone and school guide collision: ${school}`);
const nested=new Set<string>();
for(const essay of schoolEssays){
  const key=`${essay.schoolSlug}/${essay.slug}`;
  if(nested.has(key)) errors.push(`Duplicate nested school essay slug: ${key}`);
  nested.add(key);
}
if(errors.length){ console.error(errors.join("\n")); process.exit(1); }
console.log(`Slug validation passed: ${standalone.size} standalone examples, ${schoolSlugs.length} school guides, ${nested.size} school essays.`);
