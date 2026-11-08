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
  {
    schoolSlug: "stanford",
    slug: "the-eighty-seven-second-question",
    title: "The Eighty-Seven-Second Question",
    promptType: "Intellectual vitality",
    prompt: "Reflect on an idea or experience that makes you genuinely excited about learning.",
    summary: "A robotics team's wrong diagnosis turns debugging into a study of evidence, attachment, and test design.",
    body: [
      "The robotics room had one reliable object: a red kettle that clicked off after eighty-seven seconds. Our robot was less disciplined. Its left wheel drifted, its sensor saw ghosts, and three days before competition it began reversing whenever it found the boundary line. I spent kettle cycle after kettle cycle changing code. Each correction looked elegant on my laptop and failed on the floor. By midnight, I had written a recovery routine more complicated than the route itself.",
      "Ana watched three runs before asking why I believed every failure was software. I wanted to defend my code, which made her question useful. We taped a grid to the floor, varied one condition at a time, and recorded the angle of each turn. The error appeared only under acceleration. Beneath the shell, a loose motor mount tilted under torque. I had been teaching software to compensate for a screw. We tightened the mount, deleted most of my program, and began a new experiment: how could a team detect which layer of a system was failing before choosing a fix?",
      "That question now follows me beyond robots. In biology lab, I ask whether an odd result comes from the organism, the instrument, or the sampling method. While organizing meetings, I separate a communication failure from a disagreement about goals. I enjoy learning most when a confident explanation becomes testable and then becomes insufficient. The kettle's click still marks our pause: eighty-seven seconds to list competing causes and let the person least attached to our favorite theory design the next test. Curiosity, for me, is not collecting clever answers. It is building fairer ways for reality—and teammates—to prove my first answer wrong.",
    ],
    notes: ["The kettle gives an engineering story a memorable human-scale clock.", "The loose screw changes the question rather than merely ending the problem.", "The conclusion transfers a specific testing habit into new settings."],
  },
  {
    schoolSlug: "stanford",
    slug: "what-the-calendar-protects",
    title: "What the Calendar Protects",
    promptType: "What matters",
    prompt: "Tell us about something that is meaningful to you and why.",
    summary: "A shared family calendar becomes evidence that reliability matters more than eloquent intention.",
    body: [
      "Our shared calendar looks ordinary: blue blocks for my classes, green for my brother's rehearsals, orange for our grandmother's appointments. To me, it records a value I learned by failing to practice it. Last winter I forgot to pick up my brother after orchestra. I arrived twenty minutes late with an elaborate explanation about traffic and a dead phone. He placed his cello between us and asked whether I could drive home without explaining. My intentions had become another task he was expected to manage.",
      "At home, I wrote the facts on a sticky note: I had promised; I had not confirmed; he had waited in the rain. The repair was not a better apology. We built the calendar, added confirmation alarms, and chose backup people together. Months later I missed a smaller commitment and felt the familiar defense forming. This time I named what I had failed to do and asked what repair would help. My brother simply answered. The absence of a dramatic reconciliation meant the system between us was becoming more dependable.",
      "Reliability matters to me because it turns care from a feeling into something another person can use. It is the meeting agenda sent early enough for someone to prepare, the allergy label checked twice, and the message that arrives before a delay becomes another person's emergency. Calendars cannot eliminate mistakes, and organization is not the same as kindness. But a visible commitment gives other people evidence, choices, and permission to remind me. I still value spontaneous generosity; I simply trust it more when it rests on quiet structures that protect someone else's time even when I am tired, embarrassed, or tempted to explain.",
    ],
    notes: ["The response defines a value through a failure and repair rather than a slogan.", "The calendar is mundane, which makes the evidence of care credible.", "The ending distinguishes reliability from perfection or personality."],
  },
  {
    schoolSlug: "stanford",
    slug: "dear-future-roommate-the-middle-shelf",
    title: "Dear Future Roommate: The Middle Shelf",
    promptType: "Roommate letter",
    prompt: "Write a note to your future roommate that reveals something about you.",
    summary: "A practical, lightly humorous roommate note reveals habits around food, sound, shared space, and repair.",
    body: [
      "Dear future roommate, I propose that the middle shelf of our refrigerator become neutral territory. My family treats fridge organization like a minor branch of constitutional law: leftovers on top, ingredients below, and anything unlabeled subject to a public hearing. I will arrive with masking tape, a marker, and probably a jar of scallion sauce made by my grandmother. You are welcome to use it. Please start with less than you think you need.",
      "I study with sound, usually instrumental film scores or the same rain recording until I stop hearing it. I also wake early, but I have learned that ‘quiet’ does not mean closing a drawer slowly after letting it slam the first inch. Tell me what actually wakes you. I would rather adjust a routine than silently build a theory about why you look annoyed at breakfast. In return, if my desk begins migrating across the floor in piles of index cards, you may invoke the Sunday reset: ten minutes, one playlist, no philosophical defense of clutter.",
      "The useful thing to know is that I like shared rituals but do not assume they happen automatically. At home, my brother and I use a calendar because affection did not make me remember every rehearsal. On my robotics team, we pause before fixing because enthusiasm once made me defend bad code. So I will ask before borrowing, label the sauce, and say when something small is becoming irritating. I hope our room can hold both company and retreat. If your day has been terrible, I can offer tea, silence, or a walk, and I will try not to choose for you. The middle shelf will remain available for negotiations and emergency dumplings.",
    ],
    notes: ["The shelf creates a coherent structure instead of a list of quirks.", "Humor remains connected to practical generosity and self-awareness.", "The final options show care without assuming what another person needs."],
  },
  {
    schoolSlug: "stanford",
    slug: "the-map-with-five-legends",
    title: "The Map with Five Legends",
    promptType: "Intellectual curiosity",
    prompt: "What historical moment or event do you wish you could have witnessed?",
    summary: "Rather than selecting a famous spectacle, the writer wants to observe how an ordinary neighborhood map became authoritative.",
    body: [
      "I would witness the afternoon in 1978 when volunteers in my neighborhood decided what belonged on their first community map. The finished copy hangs in our library: bus stops, flood channels, shops, and a confident boundary around the district. I want to sit at the folding table before those lines became inevitable. Who argued for the alley's unofficial name? Which shortcut was too ordinary to mention? Did the person drawing the flood zone live uphill?",
      "My curiosity began when I tried to update that map. Children marked play spaces adults ignored; wheelchair users traced slopes I had called flat; a shop owner identified a corner by a name absent from every city record. I initially combined their observations into one authoritative layer. A resident then asked why my map showed the basketball court but not the intersection her son avoided after dark. I replaced the single legend with layers for mobility, shade, memory, sound, and perceived safety. Contradictions remained visible instead of being averaged away.",
      "Watching the 1978 meeting would not reveal a perfectly inclusive origin. I expect interruptions, missing voices, practical deadlines, and compromises. That is why I want to see it. Maps often appear to describe space while quietly assigning legitimacy. I want to observe the moment when a pencil line became a public fact and ask what alternatives were still on the table. The experience would help me understand not only what the volunteers chose, but how ordinary tools—paper size, meeting time, available symbols—shaped whose neighborhood could become legible. History lives inside those procedural details before it enters the frame on a library wall.",
    ],
    notes: ["The answer chooses a locally meaningful moment rather than a famous event.", "A current mapping project establishes why the historical question matters.", "The writer seeks process and uncertainty, not a fantasy of changing the past."],
  },
  {
    schoolSlug: "stanford",
    slug: "the-bowl-that-listens",
    title: "The Bowl That Listens",
    promptType: "Distinctive contribution",
    prompt: "What aspects of your experiences, interests, and character would help you make a distinctive contribution?",
    summary: "Translating a grandmother's recipe shows how the writer combines technical clarity with respect for embodied knowledge.",
    body: [
      "I began translating my grandmother's recipe notebook because I wanted her dumplings to survive my terrible memory. The pages resisted. A character I read as ‘salt’ was her abbreviation for ‘taste first.’ Water changed with the weather. Red marks pointed to relatives, arguments, and ingredients unavailable in our grocery store. My first translation replaced every uncertainty with a clean instruction. The dumplings were edible and wrong.",
      "Grandmother watched me flatten the next batch, then demonstrated pressure with two fingers. When I asked how much water to add, she asked what the flour sounded like against the bowl. We recorded her hands, photographed textures, tested substitute ingredients, and marked places where the cook had to judge rather than obey. Later, in our language club, I applied the same method to a phrase guide. Speakers recorded when a sentence felt affectionate, old-fashioned, or too formal. The guide became less compact and far more useful in conversation.",
      "I would contribute a fondness for the point where systems meet knowledge they cannot easily contain. I like spreadsheets, instructions, and interfaces, but I have learned to ask what their clarity removes and who should be able to revise them. In a project team, that means documenting decisions while preserving disagreement. In a residence, it may mean trading recipes without pretending every technique fits a tablespoon. I hope to help build tools that are precise enough to share and flexible enough to listen. My grandmother's bowl taught me that uncertainty is not always a defect awaiting measurement; sometimes it is an invitation to pay closer attention.",
    ],
    notes: ["The failed recipe translation provides a concrete origin for the contribution.", "A second setting proves the method is practiced rather than decorative.", "The contribution is specific but remains open to other people's revision."],
  },
];

export const schoolEssaySlugs = schoolEssays.map(essay => ({ school: essay.schoolSlug, essay: essay.slug }));
export function getSchoolEssay(schoolSlug: string, essaySlug: string) {
  return schoolEssays.find(essay => essay.schoolSlug === schoolSlug && essay.slug === essaySlug);
}
export function getSchoolEssays(schoolSlug: string) {
  return schoolEssays.filter(essay => essay.schoolSlug === schoolSlug);
}
