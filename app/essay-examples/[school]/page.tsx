import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, PenLine } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { essayExamples, exampleSlugs, getExample, getSchool, schoolExamples, schoolSlugs, wordCount } from "@/lib/examples";
import { absoluteUrl } from "@/lib/site";
import { getSchoolEssays } from "@/lib/school-essays";

const promptGuidance: Record<string, string[]> = {
  harvard: [
    "Use this response to supply context the activities list cannot carry: a family practice, responsibility, place, or constraint that shaped how you interpret other people. Keep the emphasis on choices and habits, not on asking the reader to admire the circumstance.",
    "Make curiosity observable. Name what you read, tested, built, debated, or revised, then preserve the uncertainty that still makes the subject worth pursuing instead of ending with a career slogan.",
    "Define community through actual relationships and shared work. Show what another member taught you and the modest practice you would carry into residential life without promising to transform Harvard.",
  ],
  stanford: [
    "Treat intellectual vitality as behavior rather than a trait. Follow the detour that kept you reading, prototyping, collecting, or asking after an assignment ended, including the wrong turn that improved the inquiry.",
    "Give the value consequences. Instead of defining what matters in the abstract, show a moment when honoring it cost time, certainty, status, or an easier option.",
    "Write toward daily life: sleep habits, sounds, shared-space rituals, food, small worries, and how you repair friction. One or two connected details reveal more generosity than a list of manufactured quirks.",
  ],
  mit: [
    "Anchor the field in a problem you have already touched. Explain which observation or failed model sharpened the question, using only the technical vocabulary needed for a non-specialist to understand the decision.",
    "Reveal how work moves among people. Name the person whose expertise changed the design and make your own contribution precise without claiming sole ownership.",
    "A challenge can be small if it forces a real revision. A broken component, contradictory result, missed handoff, or unusable instruction often reveals more judgment than a dramatic obstacle summarized later.",
  ],
  nyu: [
    "Specify the distance crossed: vocabulary, incentives, age, access, discipline, or expectations. The bridge should be a visible process—a translated agenda, redesigned meeting, shared prototype, or rule that redistributed voice.",
    "Describe community through repeated participation. Show what responsibility you returned to, how trust altered the work, and what remained when you were not directing it.",
    "Focus on one exchange, source, language problem, or local consequence that complicated your first interpretation. Travel or New York itself is not proof of a global perspective.",
  ],
  "johns-hopkins": [
    "Open with the uncertainty the group had to resolve, then track responsibility. Show which result or objection changed the plan and why the outcome required more than one person.",
    "Frame interest as a developing question rather than a declared major. Connect an observation to a method—an interview, proof, dataset, archive, or experiment—and end with a sharper question.",
    "Choose a setting where knowledge and care travel in more than one direction. Show the routine that sustained participation and credit the people who defined useful contribution.",
  ],
  ucla: [
    "Establish the situation quickly and spend the PIQ on decisions. Leadership may mean changing a process, sustaining an unglamorous responsibility, or helping a group handle conflict; a title is not evidence by itself.",
    "Show the working process: material, constraint, revision, audience, or technique. Explain what making in this form lets you investigate that another form would not.",
    "Distinguish what was available from what you made of it. Describe the initiative, workaround, or follow-through and ensure the example adds evidence not repeated in another PIQ.",
  ],
  cornell: [
    "Research the undergraduate college receiving the application, not Cornell generally. Pair verified resources with actions and explain how that college's curriculum advances work already underway.",
    "Identify a practice of participation: maintaining a system, translating knowledge, welcoming newcomers, or making disagreement productive. Contribution needs prior evidence and room to change.",
    "Build the interest from a question joining your experiences. If several fields appear, name the problem that requires them and why this Cornell college is the right home for the intersection.",
  ],
  usc: [
    "Organize curiosity around a problem rather than two major names. Show the experience that exposed it, then connect a few verified USC resources to the next investigation, production, or test.",
    "Choose a group where your role became clearer over time. Describe an adjustment prompted by another person and concrete work you can continue without arriving as the community's solution.",
    "Use short answers to add dimensions missing elsewhere: a genuine pleasure, cultural touchstone, odd routine, or concise preference. Specificity beats compressed philosophy and name-dropping.",
  ],
};

const schoolDeepDive: Record<string, { title: string; paragraphs: string[] }> = {
  harvard: {
    title: "Plan the Harvard set as three different windows.",
    paragraphs: [
      "Before drafting, make a small evidence map of the entire application. Put academic interests, family context, activities, relationships, and unfinished questions in separate columns. Harvard's short responses should fill gaps in that map rather than repeat the personal statement's central story. A laboratory project may support the intellectual answer, but the community response should probably reveal a different setting and a different kind of responsibility. Range is useful only when every answer still sounds like the same attentive person.",
      "Then test each response for movement. Even a short answer needs a starting interpretation, pressure from evidence or another person, and a more precise action or question. Remove sentences that merely praise Harvard, summarize an activity already listed, or announce a quality such as resilience. Replace them with the moment that required the quality. Across the set, the reader should learn not only what you have done, but how you notice uncertainty and what you do when your first explanation is incomplete.",
      "For a final audit, label every sentence as context, action, evidence, reflection, or school reference. Long runs of context signal a slow opening; reflection without nearby evidence signals an unsupported claim. Check proper nouns against current official pages and remove any statement that predicts admission, access, or impact. The finished set should make sense to a reader who has not seen your résumé while still adding information the résumé could never show.",
    ],
  },
  stanford: {
    title: "Use Stanford's tonal range without inventing a persona.",
    paragraphs: [
      "Lay the Stanford responses beside one another before polishing any single answer. The intellectual essay can carry inquiry and revision; the values response can show a decision with a real tradeoff; the roommate note can reveal ordinary consideration. If all three depend on the same robotics competition, research internship, or family role, the set is leaving useful evidence hidden. Choose details that operate at different scales—from a sustained question to the small habit another student would encounter on a Tuesday night.",
      "Voice should change with audience, but judgment should remain consistent. A roommate letter may use humor and fragments, yet it still benefits from generosity and self-awareness. The ‘what matters’ response may be earnest, but it should not become a speech. Read each draft aloud and underline lines written mainly to sound impressive or unusual. Replace performance with particulars: the calendar you keep, the object you repair, the question in your notes, or the way you make shared space easier for someone else to use.",
      "After revising, ask two readers to describe the person they met without using adjectives from the draft. Their answers should point to actions and patterns, not merely ‘smart,’ ‘passionate,’ or ‘quirky.’ If they remember only the punch line or accomplishment, restore the choice behind it. Stanford's short format rewards compression, but compression should remove explanation before it removes the evidence that makes a voice trustworthy.",
    ],
  },
  mit: {
    title: "Let the MIT answers show testing, teamwork, and revision.",
    paragraphs: [
      "Create an evidence table with four columns: problem, first model, disconfirming evidence, and revised action. This structure works for technical and nontechnical subjects because it makes learning visible. A kitchen workflow, translation project, proof, instrument, or community process can all demonstrate the habits MIT asks about. Keep enough technical detail to explain why the evidence mattered, but cut terminology that merely signals expertise. The reader should be able to follow the decision even without sharing your field.",
      "MIT also needs to see the people around the work. Name who noticed the error, supplied local knowledge, challenged the goal, or would maintain the result. Credit does not weaken your contribution; it clarifies it. Across the response set, vary your role: perhaps you design in one answer, listen and revise in another, and sustain an unglamorous routine in a third. That range is more persuasive than repeatedly casting yourself as the person with the decisive solution.",
      "On the last pass, circle every number, result, and technical term. Keep it only if it changes the reader's understanding of the constraint or decision. Then underline the verbs attached to you and to collaborators; both groups should be able to act. This audit prevents the project from swallowing the person and prevents teammates from becoming anonymous assistance. The strongest MIT response makes rigor and humility part of the same working method.",
    ],
  },
  nyu: {
    title: "Make bridge building a sequence of observable choices.",
    paragraphs: [
      "Start by naming the specific difference that complicated cooperation. ‘Different backgrounds’ is too broad to guide a story; disagreement about language, scheduling, access, expertise, incentives, or authority gives the writer something concrete to address. Show the first approach and why it failed or excluded someone. Then describe the revised meeting, translation, tool, or decision rule. The outcome need not be perfect, but readers should understand how participation changed and whose knowledge became newly usable.",
      "Avoid presenting another community as a lesson delivered for your benefit. Give collaborators names, choices, objections, and expertise, and explain what continued beyond your involvement. When connecting the experience to NYU, verify any program or partnership on an official page and identify the work you would join rather than the diversity you hope to consume. A credible contribution grows from a practiced method—listening, documentation, translation, maintenance—not from a promise to unite an entire campus.",
      "Revise for scale before style. A single meeting rarely heals a division, and one tool rarely guarantees access. Name the limited result accurately: more people could respond, a decision included new evidence, or a process became easier to question. Proportionate language builds trust and leaves room for future learning. It also makes the connection to NYU more useful because you can identify the next skill, relationship, or accountability structure the experience showed you still need to develop.",
    ],
  },
  "johns-hopkins": {
    title: "Turn discovery into a human and intellectual sequence.",
    paragraphs: [
      "Johns Hopkins responses often become miniature research abstracts: question, method, result, conclusion. Restore the decisions the abstract removes. What did you expect, which observation resisted that expectation, who proposed a different explanation, and what did the group change next? Precise verbs help distinguish your responsibility—calibrated, interviewed, coded, compared, recruited, annotated—from the team's result. The point is not to claim every success but to show how you behave when evidence makes the original plan less comfortable.",
      "Across the set, connect inquiry to consequence without manufacturing a heroic impact story. A result may change the next experiment, the wording of a survey, the way records are described, or the instructions given to a patient or neighbor. End near the next responsible question rather than a fixed destiny. Hopkins can support an emerging direction, but the essay should demonstrate that the direction already has roots in sustained attention and that other people's knowledge can still alter it.",
      "Use a cold-reader test for specialized work. Ask someone outside the field to state the original question, the surprising evidence, your contribution, and the revision. If they cannot, simplify the explanation rather than adding definitions. Then ask a knowledgeable reader whether the method and claims remain accurate. The overlap between those readings is the target: enough precision to respect the work, enough clarity to keep the human decision visible.",
    ],
  },
  ucla: {
    title: "Build four UC PIQs that add, rather than echo, evidence.",
    paragraphs: [
      "Make a grid with the four selected prompts across the top and activity, action, skill, relationship, and insight down the side. Repetition becomes visible quickly. If two PIQs both use student government to prove leadership, move one to a different setting or choose another prompt. UCLA readers do not need four polished versions of the same brand; they need a wider body of evidence about initiative, creativity, responsibility, educational context, and the way you contribute around other people.",
      "The direct UC format rewards early clarity. Name the activity or situation in the first lines, then spend most of the response on decisions, obstacles, adjustments, and results. Reflection should explain how the method changed, not simply state that the experience was meaningful. Because each PIQ stands alone, provide enough context to understand the stakes, but do not rebuild a cinematic opening four times. Specific action usually does more work than scenery, quotations, or a universal conclusion.",
      "Finally, assign each PIQ one sentence that only it can contribute to the application. If that sentence could move unchanged into another answer, the set needs sharper differentiation. Check that outcomes are concrete but not inflated and that other people retain agency. UC readers evaluate the four responses together, so a quieter answer about sustained responsibility can be as valuable as a visible achievement when it supplies evidence unavailable anywhere else.",
    ],
  },
  cornell: {
    title: "Research Cornell at the college and curriculum level.",
    paragraphs: [
      "Begin with the undergraduate college named on the application. Read its requirements, concentrations, project sequences, advising model, and rules for crossing into other colleges. Then connect two or three verified opportunities to prior evidence. A course matters because of the question it would let you test; a lab matters because of the method you need to learn; a community program matters because it introduces accountability to people affected by the work. Names without actions are browsing notes, not fit.",
      "Run two substitution tests. First replace Cornell with a peer university: any paragraph that still works needs more institutional precision. Then remove every Cornell proper noun: the remaining prose should still reveal your history, direction, and working habits. Include contribution as participation rather than prediction. You may bring experience documenting repairs, facilitating multilingual meetings, or maintaining a team system, but expect Cornell collaborators and constraints to change that practice after you arrive.",
      "Before submitting, trace a line from every named resource backward to personal evidence and forward to an intended action. A resource without a backward link sounds borrowed from a brochure; one without a forward link is only admiration. Confirm terminology and availability on the current college website, especially for cross-college study and research access. Precision here demonstrates more than enthusiasm—it shows that you understand the structure you are asking to join.",
    ],
  },
  usc: {
    title: "Give the long response direction and the short answers texture.",
    paragraphs: [
      "For the academic response, identify the problem connecting your interests before naming USC resources. ‘Interdisciplinary’ has little meaning unless the reader sees why one field cannot answer the question alone. Pair a prior project or observation with a small number of current undergraduate opportunities, then state what you would make, investigate, compare, or publish. Verify that programs are active and accessible; do not imply guaranteed work with a professor or confuse the university with the city around it.",
      "Treat the short answers as additional evidence, not miniature mission statements. A favorite object, familiar sound, repeated snack, or honest preference can reveal attention and personality when it is specific. Check the full application for duplication before submitting. If the main essay already explains filmmaking and the academic supplement returns to filmmaking, let the short responses show a different pleasure, relationship, or routine. The goal is coherence without turning every answer into the same campaign slogan.",
      "Do a final USC-specific verification pass after the writing is stable. Confirm school names, program titles, undergraduate eligibility, and whether a cited opportunity is curricular or extracurricular. Replace broad claims about Los Angeles with the particular field site, audience, or industry relationship relevant to the proposed work. The response should still reveal direction if every proper noun is removed, while those nouns should make the plan impossible to send unchanged to another university.",
    ],
  },
};

export function generateStaticParams() { return [...schoolSlugs, ...exampleSlugs].map(school => ({ school })); }

export async function generateMetadata({ params }: { params: Promise<{ school: string }> }): Promise<Metadata> {
  const { school: slug } = await params;
  const example = getExample(slug);
  if (example) return {
    title: `${example.title} — Annotated College Essay Example`,
    description: `${example.summary} Read the complete ${wordCount(example.body)}-word sample with three practical editor notes.`,
    alternates: { canonical: `/essay-examples/${example.slug}/` },
  };
  const school = getSchool(slug);
  if (!school) return {};
  return {
    title: `${school.short} Supplemental Essay Guide — Prompts & Strategy`,
    description: `Plan stronger ${school.short} supplemental essays with guidance for ${school.promptTypes.join(", ")}, evidence selection, and common mistakes.`,
    alternates: { canonical: `/essay-examples/${school.slug}/` },
  };
}

function ExamplePage({ example }: { example: NonNullable<ReturnType<typeof getExample>> }) {
  const related = essayExamples.filter(item => item.slug !== example.slug);
  const count = wordCount(example.body);
  const techniqueHeading = {
    "the-prep-list": "Follow the moment a private routine becomes a shared system.",
    "the-eighty-seven-second-test": "Track the test that replaces an elegant but wrong assumption.",
    "two-jars": "Watch an orderly archive change when community knowledge enters.",
  }[example.slug];
  return <>
    <section className="shell page-hero school-hero">
      <Breadcrumbs items={[{label:"Essay examples",href:"/essay-examples/"},{label:example.title,href:`/essay-examples/${example.slug}/`}]} />
      <span className="kicker">{example.category} · {count} words · team-written sample</span>
      <h1>{example.title}</h1><p>{example.summary}</p>
    </section>
    <section className="shell example-context">
      <div><span className="section-number">Sample prompt</span><p>{example.prompt}</p></div>
      <div><span className="section-number">What to study</span><p>{example.lesson}</p></div>
    </section>
    <section className="paper-section essay-stack"><div className="shell"><article className="sample-essay standalone-example">
      <header><span>Complete example · {count} words</span><h2>{techniqueHeading}</h2><p>The numbered editor notes explain transferable techniques. Do not copy the language, identity, or events.</p></header>
      <div className="essay-layout"><div className="essay-body">{example.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<small>Original sample written by the Writivia team to illustrate technique. It is not a real student's submitted essay.</small></div>
      <aside><h3><PenLine size={17} /> Editor's margin</h3>{example.notes.map((note,index) => <div key={note}><span>{index + 1}</span><p>{note}</p></div>)}</aside></div>
    </article></div></section>
    <section className="shell school-next"><div><span className="section-number">Apply the lesson</span><h2>See what your own draft makes visible.</h2><Link className="button" href="/#grader">Grade my essay — free</Link></div><div><h3>Read another complete example</h3>{related.map(item => <Link href={`/essay-examples/${item.slug}/`} key={item.slug}>{item.title}<ArrowRight size={16} /></Link>)}<Link href="/essay-examples/">All essay examples<ArrowRight size={16} /></Link></div></section>
    <JsonLd data={{ "@context":"https://schema.org", "@type":"Article", headline:example.title, description:example.summary, datePublished:example.publishedAt, dateModified:example.updatedAt, wordCount:count, author:{"@type":"Organization",name:"Writivia"}, publisher:{"@type":"Organization",name:"Writivia"}, mainEntityOfPage:absoluteUrl(`/essay-examples/${example.slug}/`) }} />
  </>;
}

function SchoolGuidePage({ school }: { school: NonNullable<ReturnType<typeof getSchool>> }) {
  const others = schoolExamples.filter(item => item.slug !== school.slug).slice(0, 3);
  const dedicatedExamples = getSchoolEssays(school.slug);
  return <>
    <section className="shell page-hero school-hero">
      <Breadcrumbs items={[{label:"Essay examples",href:"/essay-examples/"},{label:school.short,href:`/essay-examples/${school.slug}/`}]} />
      <span className="kicker">Prompt strategy · evidence planning · no recycled samples</span>
      <h1>{school.short} Supplemental Essay Guide</h1><p>{school.focus}</p>
    </section>
    <section className="shell guide-introduction"><span className="section-number">How to use this guide</span><p>{school.introduction}</p></section>
    <section className="shell prompt-types"><span className="section-number">Common prompt shapes</span><div>{school.promptTypes.map((type,index) => <article key={type}><span>0{index + 1}</span><h2>{type}</h2><p>{promptGuidance[school.slug][index]}</p></article>)}</div></section>
    <section className="shell category-guide"><div className="section-heading"><span className="section-number">School-specific planning</span><h2>{schoolDeepDive[school.slug].title}</h2></div><div className="guide-introduction">{schoolDeepDive[school.slug].paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div></section>
    <section className="paper-section"><div className="shell school-advice"><div className="section-heading"><span className="section-number">Drafting strategy</span><h2>Build the answer from evidence, not adjectives.</h2></div><div className="advice-grid">{school.advice.map((item,index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div><div className="pitfall"><strong>Most common mistake</strong><p>{school.pitfall}</p></div></div></section>
    <section className="shell self-check"><div><span className="section-number">Before you submit</span><h2>Three questions to test the draft.</h2></div><ol>{school.questions.map(question => <li key={question}>{question}</li>)}</ol></section>
    {dedicatedExamples.length > 0 && <section className="paper-section"><div className="shell guide-samples"><span className="section-number">{dedicatedExamples.length} complete {school.short} samples</span><h2>Each example is team-written, fully readable, and annotated.</h2><div>{dedicatedExamples.map(example=><Link href={`/essay-examples/${school.slug}/${example.slug}/`} key={example.slug}><BookOpenCheck size={18}/><span><strong>{example.title}</strong><small>{example.promptType} · {wordCount(example.body)} words</small></span><ArrowRight size={17}/></Link>)}</div></div></section>}
    <section className="shell guide-samples"><span className="section-number">Study technique in a complete essay</span><h2>These examples are not {school.short}-specific. Use them to study structure.</h2><div>{essayExamples.map(example => <Link href={`/essay-examples/${example.slug}/`} key={example.slug}><BookOpenCheck size={18}/><span><strong>{example.title}</strong><small>{example.category} · {wordCount(example.body)} words</small></span><ArrowRight size={17}/></Link>)}</div></section>
    <section className="shell school-next"><div><span className="section-number">Next step</span><h2>Want to see what your draft can improve?</h2><Link className="button" href="/#grader">Use the college essay grader</Link></div><div><h3>More school guides</h3>{others.map(other => <Link href={`/essay-examples/${other.slug}/`} key={other.slug}>{other.short}<ArrowRight size={16} /></Link>)}<Link href="/essay-examples/">All essay examples<ArrowRight size={16} /></Link></div></section>
  </>;
}

export default async function ExampleOrSchoolPage({ params }: { params: Promise<{ school: string }> }) {
  const { school: slug } = await params;
  const example = getExample(slug);
  if (example) return <ExamplePage example={example} />;
  const school = getSchool(slug);
  if (school) return <SchoolGuidePage school={school} />;
  notFound();
}
