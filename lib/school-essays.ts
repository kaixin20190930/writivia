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
  {
    schoolSlug: "mit",
    slug: "the-sensor-that-needed-a-bus-stop",
    title: "The Sensor That Needed a Bus Stop",
    promptType: "Field of study",
    prompt: "What field of study appeals to you most right now, and why?",
    summary: "A failed air-quality sensor draws the writer toward environmental engineering that begins with field conditions and public use.",
    body: [
      "My first air-quality sensor worked perfectly on my desk. At the bus stop, condensation clouded its housing, passing trucks produced impossible spikes, and the battery died before evening commuters arrived. I had treated measurement as an electronics problem: connect the sensor, calibrate the code, graph the result. The stop taught me that environmental data is also a question of weather, placement, maintenance, and whether the people affected can interpret what the instrument records.",
      "I rebuilt the enclosure from a discarded food container, added a shield for road spray, and compared readings against a reference station. The new numbers were steadier, but a transit organizer asked a harder question: what decision could riders make from my graph? A daily average hid the short peaks parents worried about when children boarded buses. We redesigned the display around time of day, marked uncertainty, and wrote repair instructions that used parts available at a hardware store. The project became less polished and more useful.",
      "Environmental engineering appeals to me because no component can be declared successful alone. A durable housing may distort airflow; a precise reading may answer the wrong public question; a beautiful dashboard may conceal uncertainty. I want to study the interactions among sensing, infrastructure, and community decision-making, especially where inexpensive instruments can expand whose observations count. The failed desk prototype did not discourage me from measurement. It made measurement more interesting. I now want to know not only whether a device can detect pollution, but how its design, explanation, and ownership determine whether evidence travels beyond the circuit board.",
    ],
    notes: ["The desk-to-field failure immediately establishes the engineering problem.", "A transit organizer changes the success criterion from precision to usefulness.", "The chosen field grows from interacting constraints rather than a career declaration."],
  },
  {
    schoolSlug: "mit",
    slug: "three-versions-of-the-ramp",
    title: "Three Versions of the Ramp",
    promptType: "Community",
    prompt: "Describe one way you have collaborated with a community important to you.",
    summary: "A makerspace ramp project succeeds only after its designers give users control over the testing process.",
    body: [
      "Our makerspace celebrated the first portable stage ramp before anyone had rolled across it. The plywood held the required weight, the hinge folded cleanly, and our measurements matched the published slope. Maya, a wheelchair user from the theater group, stopped halfway up. The transition strip caught her front casters, and the handrail blocked the angle she used to push. We had designed for a specification and photographed success before asking whether the object worked.",
      "Maya declined our offer to ‘fix it quickly.’ Instead, she asked for three versions she could compare. We built removable transition strips, shifted the rail, and marked force readings at different slopes. At the next test, performers evaluated setup time, turning space, and what happened when a cable crossed the landing. Maya chose a design none of us preferred visually because it let her approach independently. We documented her reasoning beside the dimensions so a future builder would understand why the awkward-looking clearance mattered.",
      "The ramp changed our makerspace rules. Projects involving a community now name who defines success, who can stop a test, and who controls the final documentation. My contribution was not the winning design; it was helping turn an embarrassing failure into a repeatable review process. Community collaboration, I learned, begins when the people affected can reject the problem statement as well as the prototype. I still enjoy the moment a mechanism moves for the first time, but I no longer confuse motion with function. The more important test is whether the person expected to use a design can recognize their decisions inside it.",
    ],
    notes: ["The opening exposes the gap between compliance and actual use.", "Maya retains authority over comparison and success criteria.", "The lasting contribution is a changed process, not a savior narrative."],
  },
  {
    schoolSlug: "mit",
    slug: "the-code-i-deleted",
    title: "The Code I Deleted",
    promptType: "Unexpected challenge",
    prompt: "Tell us about a challenge you did not anticipate and how you responded.",
    summary: "A loose motor mount forces a programmer to abandon elegant work and redesign the team's debugging method.",
    body: [
      "Three days before competition, our robot developed a leftward drift. I assumed the controller needed tuning and spent an evening adjusting offsets, thresholds, and recovery logic. Each patch improved one run and damaged the next. By midnight, the program had become an elaborate argument for my first diagnosis. Ana watched the robot accelerate, then asked why I believed the failure was software. I heard the question as criticism because I had invested too much time in the answer.",
      "We placed tape across the floor and measured turn angle at several speeds. The error appeared only under high torque. Beneath the shell, a loose motor mount tilted by a few millimeters. My code had been compensating for a screw. We tightened the bracket, restored the earlier program, and watched the robot hold its line. Deleting my fixes took seconds; admitting they had hidden the real problem took longer. I wrote the failure into our log, including the tests I should have run before editing.",
      "The challenge was not the loose mount. It was separating loyalty to the project from loyalty to my work. Our team now lists mechanical, electrical, environmental, and software hypotheses before assigning a fix, and the person least attached to the leading explanation designs the next test. I still love elegant code, but I value it less than a method that can prove the code unnecessary. Unexpected problems will continue to expose what I assume. My response is no longer to work faster inside the assumption; it is to make the assumption visible enough for evidence and teammates to challenge it.",
    ],
    notes: ["The growing codebase makes attachment to the wrong theory visible.", "A controlled test distinguishes the layer of failure.", "The reflection identifies the internal challenge and a repeatable team response."],
  },
  {
    schoolSlug: "mit",
    slug: "instructions-for-a-machine-i-would-leave",
    title: "Instructions for a Machine I Would Leave",
    promptType: "Hands-on making",
    prompt: "Tell us about something you created, repaired, or made more understandable.",
    summary: "Repairing a school greenhouse controller shifts the goal from a clever fix to a system another student can maintain.",
    body: [
      "The greenhouse controller failed every winter break. By January, seedlings sat in dry trays while the screen displayed a cheerful green check. I found a corroded moisture probe and replaced it, but the repair felt temporary: the wiring diagram existed only in a graduating senior's notebook, error messages used unexplained numbers, and the enclosure required a screwdriver no one stored nearby. I could make the system run again without making it repairable.",
      "I rebuilt the controller around that distinction. Color-coded connectors prevented the pump and sensor leads from being swapped. A transparent panel exposed indicator lights without opening the humid enclosure. I replaced numeric errors with short messages and added a paper troubleshooting card because the network was often the component that had failed. Then I asked a ninth grader who had never seen the system to diagnose three staged faults. She found my labels clear and my reset sequence impossible; I had placed the button behind a water line.",
      "We moved the button, revised the card, and recorded each test in a maintenance log. The controller survived the next break, but the more satisfying result came when the ninth grader replaced a probe without calling me. Making has become, for me, an exercise in imagining the moment after the maker leaves. A device is not understandable because its creator can explain it. It is understandable when another person can inspect, question, repair, and improve it with evidence the object makes available. The greenhouse now grows plants and, quietly, its next group of maintainers.",
    ],
    notes: ["The false green check creates a concrete reason to repair the system.", "A novice test reveals a usability flaw the maker overlooked.", "Maintainability becomes the deeper definition of successful making."],
  },
  {
    schoolSlug: "mit",
    slug: "the-table-with-no-head",
    title: "The Table with No Head",
    promptType: "Collaboration",
    prompt: "Describe a time you worked with others to solve a problem that mattered to you.",
    summary: "A tutoring team redesigns its intake process after students reveal that efficiency has been silencing the information tutors need.",
    body: [
      "At our Saturday math clinic, tutors sat along one side of a long table while students waited opposite us. We called names, assigned worksheets, and congratulated ourselves on serving forty students in two hours. Then Leila returned for the fourth week with the same unfinished algebra page. I began explaining slope again. She interrupted: she understood slope, but the worksheet's tiny graph labels blurred together. No one had asked because our efficient intake question was only, ‘What topic do you need?’",
      "The tutoring team mapped what happened from arrival to departure. Students spoke first to a volunteer surrounded by a line, then received a topic label that followed them to a tutor. We replaced that label with three choices: concept, assignment, or access barrier, plus space to describe something else. We rearranged the room into small round tables and let students choose written or spoken check-in. Leila tested a large-print graph template and showed us that thicker grid lines mattered more than larger numbers.",
      "Our numbers changed. We served fewer students per hour, but more completed a plan they could use independently at home. Collaboration required us to challenge the metric that made our original system look successful. I contributed the process map and templates; students supplied the evidence that defined the problem, and other tutors found bottlenecks I had normalized. The table now has no obvious head. That physical change reminds me that solving a problem together is not gathering people around my answer. It is arranging the work so the answer can be revised by whoever encounters its consequences.",
    ],
    notes: ["Leila's interruption reveals that the team's efficiency metric is incomplete.", "The redesign includes physical space, intake language, and student testing.", "The ending uses the table to symbolize redistributed authority without overexplaining it."],
  },
  {
    schoolSlug: "nyu",
    slug: "the-agenda-with-three-entrances",
    title: "The Agenda with Three Entrances",
    promptType: "Bridge building",
    prompt: "Tell us about a time you connected people or ideas across a difference.",
    summary: "A student organizer redesigns a meeting after discovering that a shared room does not create equal participation.",
    body: [
      "Our neighborhood climate meeting looked diverse from the doorway: teenagers, shop owners, retirees, renters, and city staff sat in the same library room. Inside, the conversation belonged to the people most comfortable with planning vocabulary and rapid English. I had translated the flyer into Mandarin and Spanish and assumed the bridge was complete. Mrs. Wu attended twice without speaking, then handed me a page of questions after everyone else had left.",
      "Her questions revealed that our agenda offered only one entrance: interrupt a fast public discussion. For the next meeting, we sent three prompts in advance, accepted voice messages, and opened with small tables organized by specific decisions rather than broad ‘community input.’ Shop owners could mark delivery conflicts on a map; students recorded heat along walking routes; residents could submit comments without attaching a name. We projected every source together and labeled which proposals still lacked evidence. Participation widened, but disagreement did not disappear—and that was useful. We could finally see where priorities actually conflicted.",
      "I learned that bridge building is not persuading different people to cross toward my format. It is redesigning the format so knowledge can travel in more than one direction. Translation matters, but language access without control over timing, medium, and decision rules can remain decorative. I now begin group work by asking how someone can enter the conversation, how their contribution will be represented, and who can challenge the summary. The agenda with three entrances slowed our meetings. It also produced decisions people recognized as partly their own, which is a stronger connection than agreement manufactured by silence.",
    ],
    notes: ["The opening distinguishes visible diversity from actual participation.", "The revised agenda changes timing, medium, and decision structure.", "The ending defines bridge building as shared control rather than persuasion."],
  },
  {
    schoolSlug: "nyu",
    slug: "the-map-after-closing-time",
    title: "The Map After Closing Time",
    promptType: "Global perspective",
    prompt: "Describe an experience that changed how you understand a community or place.",
    summary: "A neighborhood mapping project teaches the writer that one location can contain several valid and time-dependent realities.",
    body: [
      "My first neighborhood map was clean enough to frame. It showed bus stops, clinics, shade trees, and the shortcuts I used between school and home. I called the additions ‘local knowledge’ until Ms. Rivera asked why the map showed the basketball court but not the intersection her son avoided after dark. I had mapped the place I experienced at three in the afternoon and quietly presented it as the place everyone inhabited.",
      "I began hosting walks at different hours with residents who moved through the neighborhood differently. Children marked play spaces adults dismissed; wheelchair users traced slopes I had labeled flat; night-shift workers identified the few businesses with lit entrances after midnight. Instead of merging every observation into a single authoritative layer, I built views for mobility, shade, sound, memory, and perceived safety. Each mark carried a date because construction, seasons, and policing changed routes. Contradictions stayed visible, and contributors could revise their own notes without erasing earlier conditions.",
      "The project made ‘global perspective’ feel less like collecting distant places and more like recognizing plurality within one block. Location does not produce a single experience; time, language, access, work, and power continually redraw it. I still love the precision of coordinates, but I now ask who selected the legend and when the map claims to be true. That question travels. Whether I am reading a dataset, entering a new city, or joining a campus community, I want to resist treating my first route as the whole terrain. Understanding begins when the map admits more than one center.",
    ],
    notes: ["A resident's question exposes the limits of the writer's first map.", "Multiple timed layers provide a concrete method for preserving perspective.", "The global insight grows from careful local observation rather than travel claims."],
  },
  {
    schoolSlug: "nyu",
    slug: "two-recipes-for-the-same-table",
    title: "Two Recipes for the Same Table",
    promptType: "Cross-cultural collaboration",
    prompt: "Tell us about a time when another person's perspective changed your approach.",
    summary: "Planning a community dinner forces two organizers to replace a symbolic fusion dish with a process that preserves distinct traditions.",
    body: [
      "For our community center's winter dinner, I proposed one ‘fusion’ dumpling combining my grandmother's scallion filling with Samira's family spice blend. I imagined the dish as a cheerful symbol of connection. Samira asked why connection required turning two recipes into one. Her family prepared sambusas for specific celebrations, and removing the shape and serving ritual made the spice mixture recognizable to me but less meaningful to her.",
      "We abandoned the fusion plan and designed paired cooking stations instead. At each table, a family taught one folding method and explained which parts could change: my grandmother welcomed vegetable substitutions but guarded the dough texture; Samira's aunt adjusted heat but kept the triangular fold. Guests collected short recipe cards with audio links, and translators recorded terms that had no useful one-word equivalent. We ended with a shared sauce table where experimentation belonged to the person eating, not to organizers trying to manufacture unity in advance.",
      "Samira changed my understanding of collaboration from combination to relationship. Difference does not need to disappear for people to make something together. Sometimes respect means preserving boundaries, naming ownership, and allowing each tradition to remain specific while the table around it becomes genuinely shared. Since the dinner, I ask who has permission to adapt an idea and what meaning an apparently efficient blend might erase. The event produced no signature fusion dish. It produced something better: two recipes people could encounter on their own terms, plus a process for asking carefully before we called alteration appreciation.",
    ],
    notes: ["The proposed fusion dish gives the disagreement a specific object.", "Samira retains authority over what adaptation would erase.", "The shared table offers connection without forcing sameness."],
  },
  {
    schoolSlug: "nyu",
    slug: "the-caption-before-the-camera",
    title: "The Caption Before the Camera",
    promptType: "Community contribution",
    prompt: "How have you helped make a community more accessible or welcoming?",
    summary: "A film club changes its production workflow when captions move from final decoration to an early creative constraint.",
    body: [
      "Our film club added captions the night before every screening. We called that accessibility, though the rushed files misspelled names, ignored music, and collapsed overlapping dialogue into unreadable blocks. During a feedback session, Jonah asked why captions were treated as packaging rather than part of the film. He described a joke whose timing disappeared because the punch line appeared three seconds early. I had thought accuracy meant copying spoken words. He showed me that captions also direct attention and rhythm.",
      "We moved caption planning into preproduction. Scripts marked meaningful sounds, speakers, and places where text might cover visual information. Editors tested reading speed alongside cuts, and performers reviewed names before export. Jonah led a workshop using scenes with competing audio, then challenged us to create a one-minute film whose story remained clear without speech. The constraint changed our camera choices: a vibrating glass, a glance toward a door, and the tempo of footsteps carried information we previously left to dialogue.",
      "My contribution was helping redesign the checklist, schedule, and review roles so the practice survived beyond one enthusiastic project. More importantly, I learned to treat access as a source of craft knowledge rather than a correction applied after creative decisions were finished. Welcoming a wider audience is not only opening the screening room; it is allowing that audience's ways of perceiving to shape the work from its beginning. Our captions became more accurate, but our films also became more attentive to what images, sound, and text each can do best.",
    ],
    notes: ["The early caption errors make a familiar accessibility gap concrete.", "Jonah contributes technical and artistic knowledge rather than serving as inspiration.", "The durable contribution is a changed production workflow."],
  },
  {
    schoolSlug: "nyu",
    slug: "the-last-bus-rule",
    title: "The Last-Bus Rule",
    promptType: "Community and responsibility",
    prompt: "Describe a responsibility that changed the way you work with other people.",
    summary: "Scheduling volunteers teaches the writer that an efficient plan can transfer invisible costs to people with the fewest options.",
    body: [
      "I scheduled volunteers for our food pantry by filling every shift with the fewest gaps. The spreadsheet looked efficient. On Thursday nights, however, Elena always left cleanup ten minutes early. I privately labeled her unreliable until she showed me the transit app: the next accessible bus arrived forty-five minutes later. My schedule had treated everyone's final ten minutes as equal while assigning the largest cost to the person with the fewest transportation choices.",
      "We added a last-bus rule. Every shift form asked for hard arrival and departure constraints, and cleanup roles rotated so leaving at a stated time did not require an apology. Volunteers could swap through a shared board instead of negotiating privately with the coordinator. We also changed the closing checklist so tasks could begin before the doors locked. The pantry did not become perfectly efficient; some shifts needed an extra person. But attendance stabilized, and the same volunteers returned because the system no longer depended on hidden sacrifices.",
      "Responsibility now means looking beyond whether every box is filled. I ask who absorbs the inconvenience that a clean plan conceals and whether they had a voice in defining the constraint. Elena did not need me to solve transportation. She needed a schedule that treated her information as part of the design. The last-bus rule has followed me into group projects, rehearsals, and meetings: state constraints early, make adjustment public rather than shameful, and measure a plan by whether people can continue participating—not merely whether it works once on paper.",
    ],
    notes: ["The spreadsheet's apparent efficiency creates the essay's central contradiction.", "Elena provides the missing constraint and keeps her agency.", "The ending turns one scheduling change into a precise working method."],
  },
  {
    schoolSlug: "johns-hopkins",
    slug: "the-colonies-that-did-not-glow",
    title: "The Colonies That Did Not Glow",
    promptType: "Academic interest",
    prompt: "Tell us about a question or discovery that changed the direction of your learning.",
    summary: "A failed fluorescence experiment teaches the writer to treat negative results as information rather than embarrassment.",
    body: [
      "On the morning our bacterial colonies were supposed to glow green, they looked exactly like yesterday's beige dots. I checked the lamp, the filter, and the incubation time, hoping the failure belonged to equipment. My partner, Nia, asked a less comforting question: what if the transformation itself had failed? I had planned the week around photographing success. We now had a plate full of evidence I wanted to call nothing.",
      "We reconstructed the process from our notes. My record said ‘mix gently’; Nia's recorded the number of inversions. One sample had warmed while we searched for ice. Our controls were too limited to distinguish a damaged plasmid from mishandled cells. Instead of repeating the same procedure, we designed smaller tests: fresh reagents, timed temperature changes, and a control for each handling step. The second experiment produced fluorescence in some conditions and not others. More important, it showed which uncertainty each control could answer.",
      "The beige colonies changed my interest in biology from results to inference. Living systems vary, instruments fail, and a clean image can conceal a weak explanation. I began reading methods sections before conclusions and keeping notes detailed enough for someone else to challenge my memory. Negative results no longer feel empty; they define the boundary of a claim and expose the next experiment a confident story might skip. I want to study how experimental design turns messy biological behavior into responsible evidence—not by forcing every plate to glow, but by making it clear what a dark plate can and cannot tell us.",
    ],
    notes: ["The non-glowing plate creates immediate scientific and emotional stakes.", "Nia redirects attention from equipment toward experimental design.", "The ending converts failure into a precise interest in inference and controls."],
  },
  {
    schoolSlug: "johns-hopkins",
    slug: "the-interview-question-we-removed",
    title: "The Interview Question We Removed",
    promptType: "Collaboration",
    prompt: "Describe a time collaboration changed the way you approached a problem.",
    summary: "A youth health survey improves when student interviewers challenge an adult-designed question that was producing misleading answers.",
    body: [
      "Our youth health survey asked, ‘Do you have reliable access to nutritious food?’ The question had survived three adult review meetings and looked professional on the page. During pilot interviews, nearly every student answered yes. Mateo, another interviewer, pointed out that several then described skipping lunch because the cafeteria line made them late to class. The survey treated food as available if it existed, while students described access through time, cost, embarrassment, and school discipline.",
      "We brought the contradiction to the research team. Rather than replacing one phrase ourselves, Mateo and I held a workshop where students sorted possible questions by clarity and comfort. They rejected ‘food insecurity’ as unfamiliar and ‘Do you go hungry?’ as accusatory. The revised sequence asked about missed meals, reasons, frequency, and where students sought alternatives. We added a ‘prefer not to answer’ option and trained interviewers not to fill silence with examples that could steer a response. The pattern changed: availability was high, but usable access varied sharply by schedule and transportation.",
      "Collaboration changed more than the wording. It changed who counted as a method expert. The adults knew sampling and privacy; student interviewers recognized when a formal question failed to match daily life; participants knew which answers felt safe to give. My contribution was documenting revisions and helping test consistency, not rescuing the project with a perfect phrase. I now approach research instruments as negotiated tools. A question does not become neutral because everyone receives the same sentence. It becomes more trustworthy when the people expected to answer can show researchers what the sentence is unable to hear.",
    ],
    notes: ["A polished survey question creates the central methodological problem.", "Students influence wording, response choices, and interviewer behavior.", "The reflection distributes expertise across the collaboration."],
  },
  {
    schoolSlug: "johns-hopkins",
    slug: "the-cooling-route",
    title: "The Cooling Route",
    promptType: "Community and discovery",
    prompt: "How has working with a community sharpened a question you care about?",
    summary: "Mapping summer heat with delivery workers turns a temperature project into an inquiry about routes, schedules, and usable evidence.",
    body: [
      "My first neighborhood heat map used afternoon temperature readings from fixed sensors. The hottest blocks appeared in red, the shaded park in blue, and the result seemed obvious enough to publish. Mr. Davis, who delivers groceries by bicycle, studied it and asked where the map showed time spent waiting at loading docks. His hottest place was not our hottest sensor. It was a treeless service entrance where a ten-minute delay could become forty.",
      "We changed the project from mapping surfaces to mapping routes. Delivery workers, crossing guards, and home-care aides carried small loggers and marked stops, water access, shade, and delays. Fixed sensors helped us compare measurements, but interviews explained why exposure accumulated. We published layers by hour and activity rather than a single average. Participants reviewed the routes before release so a map intended to support workers would not reveal private addresses or predictable schedules.",
      "The collaboration sharpened my question from ‘Where is the neighborhood hot?’ to ‘How do infrastructure and work rules shape who must remain in the heat?’ Temperature remained essential, but it was no longer sufficient. I learned that community knowledge does not merely decorate a dataset; it can redefine the unit of analysis, the privacy risk, and the outcome worth measuring. I want to keep studying environmental health where sensors and lived routes challenge one another. The most useful map may not be the one with the densest measurements, but the one that helps people identify which wait, rule, or missing patch of shade can actually change.",
    ],
    notes: ["Mr. Davis reveals a form of exposure the fixed sensors cannot represent.", "Community participation changes collection, privacy review, and visualization.", "The refined research question connects environment with work and infrastructure."],
  },
  {
    schoolSlug: "johns-hopkins",
    slug: "the-dose-on-the-kitchen-table",
    title: "The Dose on the Kitchen Table",
    promptType: "Public-facing research",
    prompt: "Describe an experience that changed how you communicate complex information.",
    summary: "Helping a grandmother organize medication reveals the gap between technically correct instructions and usable health information.",
    body: [
      "My grandmother's medication sheet was accurate and nearly unusable. It listed generic names, dosages, and abbreviations in a grid printed smaller than the nutrition label on a tea bag. She arranged the bottles on her kitchen table by color instead: white cap in the morning, blue label with dinner, small bottle only when her knee hurt. I began translating the sheet, confident that larger type and Chinese labels would solve the problem.",
      "Then two pills shared the same color, one instruction changed with food, and my translation of ‘as needed’ sounded like permission to take a dose whenever she remembered it. We asked her pharmacist to review our system. Together we created a weekly card organized by time and purpose, added photographs verified against each refill, and marked questions that required a call rather than a guess. My grandmother chose the symbols and practiced explaining the card back to us. Her corrections exposed where our neat categories still relied on medical vocabulary.",
      "The kitchen table changed how I understand communication. Correct information is not yet usable information, and simplification can introduce new risk if the audience cannot test or revise it. I now design explanations around decisions: what must someone notice, what action follows, and where should uncertainty stop the process? I am interested in health research not only for what it discovers, but for the difficult translation between evidence and daily care. That translation requires technical accuracy, language, visual design, and respect for the person expected to act when no researcher is standing nearby.",
    ],
    notes: ["The tiny medication grid makes an information-design problem tangible.", "The pharmacist and grandmother both revise the proposed solution.", "The ending connects communication choices to responsible health research."],
  },
  {
    schoolSlug: "johns-hopkins",
    slug: "the-second-version-of-consent",
    title: "The Second Version of Consent",
    promptType: "Research responsibility",
    prompt: "Tell us about a time when new information changed what you believed was responsible.",
    summary: "An oral-history archive moves from one-time permission to continuing participant control.",
    body: [
      "For our community garden archive, I wrote a consent form with checkboxes for recording, transcription, and online publication. Every interviewee signed it. I believed the signatures made the project responsible until Mrs. Alvarez heard her recording on the draft website. She had agreed to preserve the story of the garden's closure, but the page placed her account beside a photograph of her former home. The combination revealed more than either item alone.",
      "We removed the page and asked contributors to review not only their files but the context around them. Some approved audio but not searchable transcripts; others wanted names visible to neighbors and hidden from search engines. We built a second version of consent with separate choices for format, identification, download, and future reuse. Each published item included a review date and a direct way to request changes. When two memories conflicted, we kept both only after the speakers understood how the disagreement would appear.",
      "I had treated consent as a gate crossed before research began. The archive taught me to see it as an ongoing relationship affected by design, combination, and time. A signature cannot predict every exposure created by a new interface. Responsibility therefore includes making revision possible and sharing enough control that participants can respond to consequences researchers did not anticipate. This lesson now shapes the questions I ask about any study involving people: not only whether data may be collected, but who can reinterpret it, how context changes its meaning, and what happens when permission needs a second version.",
    ],
    notes: ["The form initially appears thorough, making its limitation more instructive.", "Mrs. Alvarez identifies a privacy risk created by combining materials.", "The revised definition of consent is procedural and applicable to future research."],
  },
  {
    schoolSlug: "ucla", slug: "the-closing-checklist", title: "The Closing Checklist", promptType: "Leadership PIQ",
    prompt: "Describe an example of your leadership experience in which you positively influenced others or contributed to group efforts over time.",
    summary: "A bakery employee leads by redesigning an unreliable closing system rather than claiming a title.",
    body: [
      "At the bakery, closing depended on whoever remembered the most. Marta checked the ovens, Luis counted the register, and I restocked flour. When one person was absent, tasks vanished with them. After I forgot to label a tray and the morning crew discarded it, I proposed a checklist. My first version was a wall of text written in the shorthand I already understood. It made my work visible and everyone else's harder.",
      "We rebuilt it station by station. Luis added photographs for register screens; Marta replaced vague verbs with temperatures and times; the shortest coworker moved the sheet from a shelf she could not reach. We tested the list by switching roles and marked every point where someone still had to ask the original expert. I organized the revisions, but each worker owned the instructions for a station. Within three weeks, new employees could close with fewer interruptions, and experienced workers stopped carrying every exception in memory.",
      "Leadership here looked less like directing people than making knowledge shareable. I learned to treat confusion as evidence about a system, not a weakness in the person using it. Since then, I begin group projects by asking which task depends on one person's private memory and how the process will survive their absence. The checklist did not make our bakery error-free. It gave us a common object to question, revise, and hand forward—and taught me that influence can be measured by how well a group works when its leader is not in the room.",
    ], notes:["The opening identifies a structural problem rather than a missing title.","Coworkers shape the solution and retain ownership of their expertise.","The ending defines leadership through durability and shared knowledge."],
  },
  {
    schoolSlug: "ucla", slug: "sound-mapped-in-charcoal", title: "Sound Mapped in Charcoal", promptType: "Creative expression PIQ",
    prompt: "Every person has a creative side. Describe how you express yours.",
    summary: "Drawing neighborhood soundscapes helps the writer translate rhythm, memory, and disagreement into visual form.",
    body: [
      "I draw sounds I cannot record accurately. The laundromat becomes repeating charcoal arcs; the bus brakes cut a white diagonal through graphite; my grandmother's mahjong tiles appear as clustered squares with one edge left open. I began these maps because phone recordings flattened distance. On paper, I could decide which sound approached, which receded, and which memory changed the way I heard it.",
      "My first drawings treated the neighborhood as my composition. Then a shop owner said I had made his delivery gate look violent, while he heard its metal slam as the start of each workday. I invited neighbors to annotate copies with colors and shapes of their own. Children drew bass from passing cars as waves; a night nurse marked the quiet after stores closed; one resident circled sounds that signaled safety. I layered their marks without forcing them into a single legend, allowing the same corner to hold comfort and disturbance.",
      "Creativity, for me, is a method for making perception discussable. Charcoal is imprecise enough to show motion and erasable enough to admit revision. The drawings do not prove what a place sounds like; they reveal choices about attention. I now exhibit them beside blank transparencies so viewers can add a layer rather than only receive mine. The work has made me more willing to begin with a strong interpretation and less willing to mistake it for the final one. A shared map becomes alive when another person can hear differently inside it and leave a visible response.",
    ], notes:["Specific visual marks make an abstract creative practice concrete.","A shop owner's objection changes the form and authorship of the work.","The ending connects material choice with the writer's creative philosophy."],
  },
  {
    schoolSlug: "ucla", slug: "the-class-after-the-last-bus", title: "The Class After the Last Bus", promptType: "Educational opportunity PIQ",
    prompt: "Describe how you have taken advantage of a significant educational opportunity or worked to overcome an educational barrier.",
    summary: "A student redesigns access to an evening coding course when transportation makes attendance unequal.",
    body: [
      "The free coding course met at 6:30 p.m., forty minutes after the last direct bus left my neighborhood. I attended by taking two routes and walking from a transfer stop, but three classmates disappeared after the first week. The program called the course open-access because tuition was zero. Transportation, dinner schedules, and family responsibilities were costs the registration page did not count.",
      "I asked the instructor to record lectures, but classmates explained that video alone would not replace debugging help. We created a hybrid lab on Saturday afternoons at the library. I reserved laptops, converted exercises to run without software installation, and paired remote students with in-person partners through a shared error log. The first log was chaotic, so we added fields for expected output, attempted fixes, and the smallest reproducible example. Students who missed Tuesday could arrive Saturday with a problem others could actually investigate.",
      "The opportunity taught me coding, especially the patience required to isolate an error. Building access to it taught me something broader: an open door is not an accessible path. I learned to identify which part of an experience cannot simply be recorded—the conversation, equipment, feedback, or protected time—and design around that missing function. I still took the long bus route when I could. The difference was that learning no longer depended on everyone having the same route, and our debugging practice improved for every student because we documented exactly how we got stuck instead of hiding it from one another during the weekly lab.",
    ], notes:["The opening distinguishes free tuition from practical access.","The hybrid lab preserves debugging interaction rather than merely posting videos.","The educational insight grows from both learning code and redesigning participation."],
  },
  {
    schoolSlug: "cornell", slug: "from-sensor-to-public-question", title: "From Sensor to Public Question", promptType: "College-specific fit",
    prompt: "Why are you drawn to the academic opportunities in your selected Cornell undergraduate college?",
    summary: "A field sensor project leads the writer toward engineering that connects measurement, infrastructure, and public interpretation.",
    body: [
      "My first air-quality sensor succeeded on a desk and failed at a bus stop. Condensation clouded its housing, trucks distorted readings, and the battery died before evening commuters arrived. Rebuilding it taught me that measurement is never only electronics. It includes weather, placement, maintenance, and the public question a number is supposed to answer. A daily average, for example, hid the short pollution peaks parents noticed during school pickup.",
      "In Cornell Engineering, I would pursue that full chain through environmental systems coursework, project teams, and undergraduate research that treats field conditions as part of design. I want to strengthen my understanding of fluid flow and sensor calibration, then test inexpensive instruments against reference equipment. Cornell's project-based culture also matters because housings, power systems, interfaces, and community use cannot be solved in separate notebooks. I would verify specific courses and research openings each term rather than assuming access from a program name.",
      "I would bring experience documenting low-cost repairs and translating graphs for our transit coalition. More importantly, I would bring the habit my failed prototype produced: ask who will maintain the device, which uncertainty must remain visible, and what decision the display enables. I am drawn to Cornell because engineering there can move between fundamentals, field testing, and consequences beyond the laboratory. My goal is not simply a more accurate sensor. It is a measurement system durable and understandable enough that communities can challenge what is measured and use the evidence in consequential public decisions that affect their routes home.",
    ], notes:["Prior work establishes fit before Cornell resources appear.","The response connects academic foundations with project-based testing.","Contribution is a practiced method, not a promise to transform the college."],
  },
  {
    schoolSlug: "cornell", slug: "the-seed-card-archive", title: "The Seed-Card Archive", promptType: "Academic interest",
    prompt: "Describe an area of study that excites you and how you hope to explore it at Cornell.",
    summary: "Conflicting garden records create an interest in archives, information design, and community authority.",
    body: [
      "The garden card read, ‘June 14—rain, two jars.’ I entered it into a spreadsheet as weather and harvest data. Mrs. Alvarez laughed: two jars meant tomato-blight samples. Stars marked saved seeds; question marks sometimes meant produce donated before weighing. My clean table was accurate only because I had removed the marks I could not explain. I began interviewing gardeners and attaching their accounts to scanned cards. When memories conflicted, we kept both.",
      "That drawer made me interested in how information systems turn uncertain human records into searchable categories. At Cornell, I would connect humanistic study of archives with information science methods for metadata, interface design, and participatory research. I want to examine how a catalog can reveal disagreement without making it unusable, and how contributors can retain meaningful control after material goes online. Cornell's breadth is valuable here because the question crosses history, design, computing, and the ethics of community partnership rather than fitting neatly within one technique.",
      "I would bring the consent checklist and narrator-review workflow our garden developed, expecting both to change when tested with communities that have different reasons to distrust collection. The question I want to pursue is no longer what an old card means. It is who gains the authority to stabilize that meaning, how interfaces distribute that authority, and when a responsible system should deliberately preserve uncertainty. Cornell would let me follow that question from material records to computational structures while keeping the people represented by the data inside the process of describing it.",
    ], notes:["A mistaken interpretation produces the academic question.","The proposed study requires several fields for a specific reason.","The contribution remains accountable to communities rather than treating them as data."],
  },
  {
    schoolSlug: "cornell", slug: "the-kitchen-with-four-languages", title: "The Kitchen with Four Languages", promptType: "Community contribution",
    prompt: "How will your experiences enable you to contribute to Cornell's community?",
    summary: "A multilingual bakery teaches the writer to build systems that expose hidden assumptions and distribute expertise.",
    body: [
      "Before the bakery opened, our prep list moved through four languages: Marta's shorthand, my English and Mandarin, Luis's Spanish, and the gestures everyone used when words failed. I believed translating quickly made me useful until I sent a tray to the wrong oven. I had translated the ingredient but not the timing mark. The error showed that our instructions worked only for people who already understood them.",
      "We redesigned the list together. Icons marked temperature, colors marked proofing time, and photographs showed dough at each stage. Then we traded stations and tried to break the system. Luis noticed that one symbol looked like a freezer; Marta found that my timeline ignored overlapping work; our shortest coworker moved the checklist from a shelf she could not reach. The finished page belonged to no single translator, which made it easier for a new employee to question and improve.",
      "At Cornell, I would contribute this habit of making shared work inspectable. In project teams, student organizations, or a cooperative kitchen, I would ask which instruction depends on private memory, who has been left to guess, and how a newcomer can test the process without embarrassment. I do not expect every difference to become an icon or every disagreement to disappear through organization. What I can offer is patience for the unglamorous infrastructure—documentation, alternate formats, review points, and translated context—that lets more people use their expertise confidently. The bakery taught me that a community becomes stronger when fluency is not the price of entry.",
    ], notes:["The language difference is grounded in a visible production error.","Every coworker contributes expertise to the redesigned system.","The Cornell contribution is specific, modest, and transferable."],
  },
  {
    schoolSlug: "usc", slug: "when-the-caption-changes-the-shot", title: "When the Caption Changes the Shot", promptType: "Academic curiosity",
    prompt: "Describe how you plan to pursue your academic interests at USC.",
    summary: "Caption design connects the writer's interests in filmmaking, language, and accessible media.",
    body: [
      "Our film club used to add captions the night before a screening. The files copied dialogue but missed names, music, and timing. Jonah pointed to a joke whose punch line appeared three seconds early and asked why access was treated as packaging rather than part of the film. When we moved caption planning into preproduction, our camera choices changed. A vibrating glass, a glance toward a door, and the rhythm of footsteps began carrying information we had previously left to speech.",
      "That experience organized my interests around one question: how do image, sound, and text share narrative responsibility? At USC, I would pursue the question across cinematic production, media studies, and accessible design rather than treating them as unrelated interests. Production courses could strengthen visual sequencing; study of language and audience could help me examine how captions translate tone; collaborative projects could test choices with viewers who use different modes of perception. I would confirm current course and project access before naming a final path.",
      "I would bring the caption-first checklist our club developed and experience running review sessions where users can reject an edit, not merely react to a finished film. USC appeals to me because the question requires both making and analysis: create a scene, observe where meaning disappears, and revise the form. I do not want accessibility to remain a compliance pass after creative decisions are locked. I want it to become a source of craft knowledge that changes what the camera notices from the first shot.",
    ], notes:["A captioning failure creates the interdisciplinary question.","USC opportunities are connected to actions instead of listed.","The proposed contribution includes a tested review practice."],
  },
  {
    schoolSlug: "usc", slug: "the-neighborhood-in-layers", title: "The Neighborhood in Layers", promptType: "Community",
    prompt: "How do you plan to contribute to the USC community?",
    summary: "A participatory map becomes the basis for a modest contribution centered on listening, documentation, and revision.",
    body: [
      "My first neighborhood map showed bus stops, shade, clinics, and the shortcuts I knew. Ms. Rivera asked why it included the basketball court but not the intersection her son avoided after dark. I had mapped one person's afternoon and presented it as a community. We began walking routes with children, wheelchair users, shop owners, and night-shift workers. Instead of merging every account, I built layers for mobility, memory, sound, shade, and perceived safety.",
      "The project taught me that contribution begins before proposing a solution. It begins with a method for letting people define what the problem contains. At USC, I would bring participatory mapping skills to student and neighborhood projects where place, transportation, media, or public space matters. I can facilitate walks, document conflicting observations, and build interfaces that show who contributed and when conditions changed. I would join existing work as a learner rather than arrive with a completed map of a community I do not yet know.",
      "I also know what I still need: stronger methods for privacy, long-term stewardship, and deciding when not to publish a location. The most useful contribution I can make is therefore not a promise to map Los Angeles. It is a repeatable practice of asking who chose the legend, who can revise a layer, and what exposure a visualization creates. I hope to help teams make local knowledge visible without flattening it, preserve meaningful changes over time, and let local collaborators freely redraw my assumptions as readily as they redraw a route.",
    ], notes:["The writer's first map contains a clear, correctable limitation.","Contribution is framed as joining existing work with useful methods.","The ending acknowledges privacy limits and continued learning."],
  },
  {
    schoolSlug: "usc", slug: "five-short-answers-one-person", title: "Five Short Answers, One Person", promptType: "Short answers",
    prompt: "Use USC's short responses to reveal interests and details not shown elsewhere in the application.",
    summary: "A connected set demonstrates how concise answers can add personality without becoming a branding exercise.",
    body: [
      "Favorite snack: The scallion pancake corner piece—the crisp triangle everyone claims not to want until only one remains. Best movie: The one my brother pauses to predict incorrectly; his confidence is half the entertainment. Dream trip: A train route chosen for long station stops, because I collect the diagrams cities use to explain themselves. Ideal roommate contribution: Labels that peel off cleanly and a standing offer of tea without compulsory conversation.",
      "Topic I could discuss for hours: why repair instructions fail. I love the moment a diagram assumes the reader already knows which part is ‘obvious.’ At our greenhouse, I replaced numeric controller errors with messages, photographs, and a paper troubleshooting card. A ninth grader tested the system and discovered that my clearly labeled reset button was trapped behind a water line. We moved it. She later replaced a probe without calling me, which felt better than completing the repair myself.",
      "These answers do not summarize my application, and that is their job. The longer essays already explain projects and responsibilities. The short responses add the habits around them: shared food, affectionate argument, transit diagrams, quiet hospitality, and an unreasonable interest in labels. Together they show why I care about understandable systems without forcing every detail to prove a career goal. Concision works when each answer supplies new evidence from ordinary daily life and close relationships. The result should feel like several open windows into one complete, changing person, not five polished slogans designed by the same marketing meeting.",
    ], notes:["The opening models concise details with voice and relational context.","One longer answer connects personality to practiced work.","The final paragraph explains how short responses complement, rather than repeat, the application."],
  },
];

export const schoolEssaySlugs = schoolEssays.map(essay => ({ school: essay.schoolSlug, essay: essay.slug }));
const schoolEssayDates: Record<string,string> = {
  harvard: "2026-11-08T22:51:35+08:00",
  stanford: "2026-11-08T22:54:57+08:00",
  mit: "2026-11-08T23:00:12+08:00",
  nyu: "2026-11-08T23:05:43+08:00",
  "johns-hopkins": "2026-11-08T23:10:22+08:00",
  ucla: "2026-11-08T23:44:30+08:00",
  cornell: "2026-11-08T23:44:30+08:00",
  usc: "2026-11-08T23:44:30+08:00",
};
export function getSchoolEssayDates(essay: SchoolEssay) {
  const timestamp = schoolEssayDates[essay.schoolSlug];
  return { publishedAt: timestamp, updatedAt: timestamp };
}
export function getSchoolEssay(schoolSlug: string, essaySlug: string) {
  return schoolEssays.find(essay => essay.schoolSlug === schoolSlug && essay.slug === essaySlug);
}
export function getSchoolEssays(schoolSlug: string) {
  return schoolEssays.filter(essay => essay.schoolSlug === schoolSlug);
}
