export type SchoolEssay = {
  schoolSlug: string;
  slug: string;
  title: string;
  promptType: string;
  prompt: string;
  summary: string;
  body: string[];
  notes: string[];
};

export const schoolEssays: SchoolEssay[] = [
  {
    schoolSlug: "harvard",
    slug: "the-translated-checklist",
    title: "The Translated Checklist",
    promptType: "Life experience",
    prompt: "How will the life experiences that shape who you are today enable you to contribute to Harvard?",
    summary: "A bakery checklist changes the writer's understanding of competence, language, and shared responsibility.",
    body: [
      "At 6:42 each morning, before our bakery opened, I converted the prep list into gestures for the newest employee: point, weigh, fold. I spoke English and Mandarin; Luis spoke Spanish; Marta's shorthand belonged to twenty years of muscle memory. I believed the quickest translation proved that I was useful. Then I sent twenty-four cardamom buns to the wrong oven because I had translated the ingredient but not the timing mark beside it.",
      "Marta placed the ruined tray between us and asked each person to describe what the list appeared to say. My version privileged words. Luis had followed the color of the containers. Marta assumed everyone recognized a slash meaning ‘after proofing.’ We rebuilt the page together: icons for temperature, colored blocks for time, and photographs showing dough at each stage. The next morning we traded stations and tried to break our own system. Luis found that one icon looked like a freezer; I found that my neat timeline ignored overlapping tasks.",
      "The experience changed what I notice in groups. Silence can mean agreement, but it can also mean that the instructions were designed for the person who wrote them. At school I now circulate meeting questions before discussion, define unfamiliar terms, and ask a new member to test the process rather than merely observe it. At Harvard, I would bring that habit to classrooms and student organizations: not translating every answer for other people, but helping build conditions in which more people can question the instructions. The ruined buns taught me that competence is not performing fluency alone. It is making shared work understandable enough for everyone to revise.",
    ],
    notes: ["The opening makes language and responsibility visible through a concrete routine.", "The writer's mistake leads to a collaborative redesign instead of a heroic rescue.", "The Harvard contribution grows from a practiced method rather than a broad promise."],
  },
  {
    schoolSlug: "harvard",
    slug: "questions-in-the-margin",
    title: "Questions in the Margin",
    promptType: "Intellectual curiosity",
    prompt: "Describe an intellectual experience that has been important to you.",
    summary: "A community archive teaches the writer to treat uncertainty and disagreement as research evidence.",
    body: [
      "The index card read, ‘June 14—rain, two jars.’ I found it in our community garden's filing drawer among thirty years of harvest records. Certain that the note encoded weather and yield, I built a spreadsheet, plotted rainfall, and produced a tidy explanation. Mrs. Alvarez studied my chart and laughed. Two jars meant samples of tomato blight. A star on another card meant seeds saved for spring. My dataset looked consistent because I had discarded every mark I could not explain.",
      "I stopped treating the drawer as a puzzle I could solve alone. Gardeners walked me through the plots they remembered while I recorded audio explanations with permission. When two accounts conflicted, I first tried to select the more detailed memory. Then Mr. Chen asked why disagreement had to be an error. We redesigned the archive so a card could hold multiple annotations, dates, and degrees of confidence. The interface became less elegant, but the record became more honest about how knowledge was made.",
      "That project redirected my curiosity from ‘What does this card mean?’ to ‘Who gets to stabilize its meaning?’ I began reading about archival description and community-based research, then comparing catalog entries with the stories contributors told about the same objects. I am still drawn to orderly evidence, but now I look for the choice behind each category and the voice a clean table leaves outside its columns. The margin no longer feels like a place where incomplete information waits to be corrected. It is where the most important research questions begin—questions about authority, consent, and whether preserving a record can leave room for the people inside it to disagree.",
    ],
    notes: ["The unexplained card establishes an intellectual problem without announcing a field.", "Community expertise changes both the method and the research question.", "The ending preserves uncertainty and points toward continued inquiry."],
  },
  {
    schoolSlug: "harvard",
    slug: "the-empty-chair-protocol",
    title: "The Empty-Chair Protocol",
    promptType: "Community contribution",
    prompt: "Briefly describe an extracurricular activity, employment experience, travel, or family responsibility that has shaped you.",
    summary: "Six absent students force a council organizer to redesign what participation means.",
    body: [
      "Our student council called the festival meeting accessible because the library had a ramp. Six chairs remained empty. The absent students were members of the disability alliance we had invited to review the event plan. I drafted a frustrated message about commitment until Noor asked whether anyone had checked the meeting itself. We had not. Fluorescent lights triggered migraines for two students, the printed agenda failed with screen readers, and the meeting ended after the last accessible bus left campus.",
      "I had treated access as a feature of the building rather than a property of the entire process. We moved the next session online, shared structured questions in advance, and accepted text, audio, and anonymous responses. The proposals changed: a sensory map replaced a generic accessibility symbol, quiet zones received budget lines, and performers were asked for caption files before contracts were signed. More importantly, every proposal now named who had tested it and when the group would review it again.",
      "The empty chairs changed my role from inviting participation to examining how a system defines participation. I now begin planning by asking who chose the time, format, vocabulary, and evidence that will count. Sometimes the answer requires a new tool; sometimes it requires giving another person authority to reject the first solution. In college communities, I would contribute that procedural attention—the patient work of agendas, review dates, alternate formats, and documented ownership that lets good intentions survive beyond one event. Inclusion is not opening the same door and waiting proudly beside it. It is noticing who helped choose the door and whether the route through it remains usable when conditions change.",
    ],
    notes: ["The absent students create a visible contradiction in the opening.", "Specific process changes show contribution without casting the writer as a savior.", "The final definition is earned by repeated planning choices."],
  },
  {
    schoolSlug: "harvard",
    slug: "after-the-kettle-clicked",
    title: "After the Kettle Clicked",
    promptType: "Activity and collaboration",
    prompt: "Describe an activity that has influenced how you work with other people.",
    summary: "A robotics failure teaches the writer to separate loyalty to a theory from loyalty to a team.",
    body: [
      "Our robotics room had one reliable machine: a red kettle that clicked off after eighty-seven seconds. Three days before competition, our robot began drifting left and reversing at the boundary line. I spent six kettle cycles rewriting the control code. Each correction looked persuasive on my laptop and failed on the floor. I added an offset, lowered the sensor threshold, and wrote a recovery routine that made the robot lurch like a cart with a stuck wheel.",
      "Ana watched three runs before asking why I assumed the problem was software. I wanted to defend the hours I had invested, which was exactly why we tested her question. We taped a grid to the floor and logged the angle of each turn at different speeds. The error appeared only under acceleration. When we removed the shell, a loose motor mount tilted under torque. I had been teaching software to compensate for a screw. We tightened the mount, deleted most of my code, and used the recovered time to create a pre-run inspection anyone could follow.",
      "Since then, the kettle's click has become our signal to pause before adding another fix. The person least attached to the leading theory designs the next test, and our logs include discarded explanations, not only successful runs. Robotics taught me that collaboration is not dividing tasks among agreeable people. It is building a method strong enough to expose the idea one teammate most wants to protect. I still enjoy an elegant solution, but I am less interested in being its owner. A team's best evidence may arrive through the question that makes my previous work unnecessary—and my responsibility is to make that question easier to ask.",
    ],
    notes: ["The kettle gives the technical setting a memorable measure of time.", "Ana's question changes the method and redistributes authority.", "Deleting code becomes concrete evidence of intellectual humility."],
  },
  {
    schoolSlug: "harvard",
    slug: "the-quiet-route-home",
    title: "The Quiet Route Home",
    promptType: "Personal context",
    prompt: "What personal experience has most shaped the way you care for other people?",
    summary: "A missed pickup makes the writer replace elaborate apologies with dependable systems.",
    body: [
      "My brother and I used to measure apology by volume. I filled silence with explanations; he answered with the soft click of his cello case. After I forgot to pick him up from rehearsal, I arrived twenty minutes late with a speech prepared about a delayed bus and a dead phone. He placed the cello between us and asked whether I could drive home without explaining. The quiet felt like punishment until I recognized that my explanation required him to comfort the person who had left him waiting.",
      "At home, I wrote the relevant facts on a sticky note: I had promised. I had not checked the schedule change. He had waited outside in the rain. The note looked embarrassingly small beside my defense. The next week I added rehearsals to a shared calendar, set a confirmation alarm, and asked what backup plan he trusted. He chose a neighbor and the bus route. My job was not to design forgiveness; it was to become predictable enough that he did not need it so often.",
      "Months later, I missed a smaller commitment and felt the old explanation forming. This time I named what I had failed to do and asked which repair would help. My brother did not reward the improvement with a dramatic reconciliation; he simply answered. That ordinary response mattered because accountability was becoming a routine rather than a performance after crisis. I still value context, but I no longer use intention to overrule another person's experience. Care can sound like a question, look like a calendar reminder, or take the shape of a quiet car ride in which I resist making my guilt the most important feeling in the room.",
    ],
    notes: ["The cello case turns silence into a physical presence.", "A mundane calendar system demonstrates accountability more credibly than a large promise.", "The ending extends the lesson through a later, smaller test."],
  },
];

export const schoolEssaySlugs = schoolEssays.map(essay => ({ school: essay.schoolSlug, essay: essay.slug }));
export function getSchoolEssay(schoolSlug: string, essaySlug: string) {
  return schoolEssays.find(essay => essay.schoolSlug === schoolSlug && essay.slug === essaySlug);
}
export function getSchoolEssays(schoolSlug: string) {
  return schoolEssays.filter(essay => essay.schoolSlug === schoolSlug);
}
