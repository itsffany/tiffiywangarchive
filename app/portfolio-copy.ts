export type PortfolioPageCopy = {
  section: string;
  title: string;
  intro?: string;
  columns?: { title: string; body: string }[];
  note?: string;
};

export const portfolioCopy: Record<string, PortfolioPageCopy[]> = {
  "clinical-copilot": [
    {
      section: "AR learning / thesis project",
      title: "Wire Field AR",
      intro: "An augmented reality learning experience for the electric field around a charged straight wire.",
      columns: [
        { title: "Learning loop", body: "Predict -> receive feedback -> explore -> reflect" },
        { title: "Role", body: "Independent project · UX research · interaction design · iterative prototyping" },
      ],
      note: "Designed for undergraduate electrodynamics education · 2025-2026",
    },
    {
      section: "01 / Project framing",
      title: "Building spatial intuition before the physics lab",
      intro: "The experience adds an observable, hands-on concept-building step between equation-based instruction and experimental measurement.",
      columns: [
        { title: "Learners", body: "Undergraduates in physics, optics, and electrical engineering who know the mathematics but are still developing a spatial model of electric fields." },
        { title: "Use context", body: "A mobile pre-lab activity for predicting direction, comparing field strength, and exploring parameters around a virtual wire." },
        { title: "Teaching role", body: "A three-dimensional aid that helps instructors see how students reason and surface misconceptions before formal derivation or measurement." },
        { title: "Core tasks", body: "Determine field direction for positive and negative line charges; compare strength at different distances; connect r, lambda, and E." },
      ],
    },
    {
      section: "01 / Project framing",
      title: "The gap is between calculation, diagrams, and spatial reasoning",
      intro: "Literature and tool reviews, instructor conversations, and student concept testing clarified what AR needed to contribute beyond a three-dimensional visualization.",
      columns: [
        { title: "Instructor insight", body: "Knowing the formula does not guarantee that a student can reason about direction in space. The design needed moments of active prediction and observation." },
        { title: "Tool and literature review", body: "Professional simulations support precise analysis but carry a steep learning curve. A focused, low-friction model could keep the learning task visible." },
        { title: "Student concept testing", body: "Two undergraduate physics students valued spatial visualization, asked to enter textbook parameters, and stressed that the tool should complement—not replace—problem solving and lab work." },
      ],
      note: "Design question: How might we help students explain changes in field direction and strength, rather than simply watch a 3D model?",
    },
    {
      section: "01 / Project framing",
      title: "Narrowing the concept to one charged straight wire",
      intro: "The topic was selected by balancing the learning objective, the verifiability of the physics model, and the feasibility of prototyping.",
      columns: [
        { title: "Concepts considered", body: "A waveguide mode game, point charges and dipoles, and a field-superposition sandbox each introduced either too much prerequisite knowledge or too many variables." },
        { title: "Why this model", body: "A uniformly charged straight wire has clear spatial symmetry. A small set of variables can explain direction and strength, and student reasoning can become concrete tasks." },
        { title: "Scope decision", body: "The prototype first standardizes the infinite, uniformly charged wire. Finite-length and edge effects can follow only after the visual model and equation remain fully aligned." },
      ],
    },
    {
      section: "02 / Design approach",
      title: "Commit to a prediction before receiving feedback",
      intro: "Prediction, feedback, exploration, and reflection are separated so students do not encounter every arrow, parameter, and explanation at once.",
      columns: [
        { title: "01 · Predict", body: "Place direction arrows and compare field strength at points A, B, and C, making the learner’s current mental model visible." },
        { title: "02 · Feedback", body: "Explain both correct reasoning and specific misconceptions in the context of the task just completed." },
        { title: "03 · Explore", body: "Adjust parameters, observe the field in 3D, and compare before-and-after results alongside the equation." },
        { title: "04 · Reflect", body: "Record parameters, observations, and explanations, then compare the original prediction with what the model revealed." },
      ],
      note: "The flow supports active construction and spatial reasoning while progressively disclosing information to reduce cognitive overhead.",
    },
    {
      section: "02 / Design approach",
      title: "Give every visual element a precise physical meaning",
      intro: "The interface distinguishes the field itself, direction arrows, and distance guides so observation aids are not mistaken for field lines.",
      columns: [
        { title: "Direction", body: "For an infinite uniformly charged wire, a positive line charge produces a radial field pointing outward; a negative line charge points inward." },
        { title: "Magnitude", body: "At a fixed line-charge density, field magnitude is inversely proportional to the perpendicular distance r from the wire." },
        { title: "Parameter", body: "Lambda describes charge per unit length—not total charge. Its sign changes direction; its absolute value changes magnitude." },
      ],
      note: "In vacuum: |E| = |lambda| / (2 pi epsilon0 r). Dashed circles mark distance and do not represent field lines.",
    },
    {
      section: "03 / Solution",
      title: "Challenge first: set direction, then compare strength",
      intro: "Understanding becomes an answer the learner can express, giving the system something specific to respond to.",
      columns: [
        { title: "01 · Frame the task", body: "Introduce direction prediction and strength comparison before entering the interaction." },
        { title: "02 · Place direction arrows", body: "Use spatial manipulation to position arrows and express the learner’s reasoning." },
        { title: "03 · Compare field strength", body: "Review points A, B, and C at different distances and identify the strongest and weakest locations." },
      ],
    },
    {
      section: "03 / Solution",
      title: "Move from one judgment to an explanation of the pattern",
      intro: "The response, the three-dimensional visualization, and the mathematical relationship stay connected throughout exploration.",
      columns: [
        { title: "Targeted feedback", body: "Address direction and magnitude separately, identifying exactly what needs to be reconsidered." },
        { title: "Parameter exploration", body: "Keep the 3D model, controls, and equation visible together so changes can be compared directly." },
        { title: "Follow-up questions", body: "Let students ask about distance, line-charge density, and other concepts without leaving the learning flow." },
      ],
    },
    {
      section: "03 / Solution",
      title: "Turn observations into the learner’s own explanation",
      intro: "Theory and notes help students review symbols, record evidence, and check whether they understand why the field changed.",
      columns: [
        { title: "Concept guidance", body: "Explain lambda, perpendicular distance r, and field direction so the interface and equation use the same language." },
        { title: "Model comparison", body: "Contrast the line charge’s 1/r relationship with the point charge’s 1/r² relationship, reminding students to identify the model before applying a formula." },
        { title: "Observation notes", body: "Capture what changed, what was observed, and how the learner explains it—not just a snapshot of one interaction." },
      ],
    },
    {
      section: "04 / Testing and iteration",
      title: "Accuracy came first; interaction clarity followed",
      intro: "Task-based testing and think-aloud sessions examined the physics, the learning task, and the usability of the interface.",
      columns: [
        { title: "Who tested", body: "A physics instructor checked assumptions and equations; physics students tested tasks and controls; non-physics participants evaluated prompts and general clarity." },
        { title: "What changed", body: "The prototype standardized the infinite-wire model, aligned parameter changes with the equation, rewrote ambiguous prompts, exposed the Explore controls, and moved tools away from the model." },
        { title: "Priority shift", body: "Visual polish could not compensate for a mismatch between the physical model, the mathematical relationship, and the task the learner was asked to complete." },
      ],
    },
    {
      section: "04 / Project outcome",
      title: "A complete learning flow organized around the electric-field concept",
      intro: "The final deliverables include a high-fidelity interactive prototype, guided learning tasks, and supporting explanations refined through concept and usability feedback.",
      columns: [
        { title: "Clearer learning goals", body: "Direction, magnitude, and distance become prediction, comparison, and explanation tasks rather than abstract statements." },
        { title: "An interface in service of learning", body: "Challenge, exploration, AI guidance, theory, and notes each have a distinct role from first judgment to reflection." },
        { title: "Meaningful iteration", body: "Model accuracy and equation consistency were resolved before refining prompts, control visibility, and visual obstruction." },
        { title: "Next validation", body: "A classroom study should measure whether learners independently reason about direction and distance, distinguish line and point charges, and receive physically accurate AI feedback." },
      ],
      note: "Reflection: a 3D visualization has educational value only when the task, equation, and feedback remain aligned.",
    },
  ],

  "atlas-operations": [
    {
      section: "AR / Spatial storytelling / 2025",
      title: "AR Memory Garden",
      intro: "Plant memories into everyday space.",
      columns: [
        { title: "A memory takes form", body: "A virtual plant carries a personal memory into the physical world." },
        { title: "A place becomes meaningful", body: "Encounter it again in a familiar environment and continue the relationship through interaction." },
      ],
      note: "Experience design · interaction design · 3D asset creation",
    },
    {
      section: "01 / Project framing",
      title: "Connecting personal memories to real-world places",
      intro: "Memory Garden combines written reflections, digital plants, and physical surroundings into a spatial experience people can revisit.",
      columns: [
        { title: "Audience", body: "NYU students interested in digital art and interactive experiences, as well as anyone looking for a more expressive way to preserve everyday moments." },
        { title: "Use context", body: "The concept begins in campus courtyards and personal spaces, turning familiar places into anchors for memory. A shared public garden is a future direction." },
        { title: "Design goal", body: "Move beyond writing a memory: let people see it in space, interact with it, and create an emotional reason to return to that place." },
      ],
    },
    {
      section: "02 / Design approach",
      title: "Using planting and care to structure the memory experience",
      intro: "A plant gives an abstract memory a recognizable form. Planting connects it to place; care creates a reason to return and participate again.",
      columns: [
        { title: "01 · Memory takes form", body: "Words explain what the memory means, while the plant makes it recognizable in the camera view." },
        { title: "02 · Place carries meaning", body: "Seeing the plant in a real environment ties the memory to the space the user currently occupies." },
        { title: "03 · Interaction responds", body: "Heart and watering actions turn attention into participation, followed by visible feedback." },
      ],
      note: "Experience arc: write a memory -> enter the physical setting -> interact with the plant -> leave a reason to return.",
    },
    {
      section: "02 / Design approach",
      title: "Storyboard: from finding a place to expressing a memory",
      intro: "Early concepts explored spatial selection and memory capture before the core journey was narrowed into a testable AR prototype.",
      columns: [
        { title: "01 · Observe the environment", body: "Look around for a place that feels appropriate for the memory." },
        { title: "02 · Confirm where to plant", body: "Use a visible placement cue to show where the digital plant will appear." },
        { title: "03 · Write the memory", body: "Give the plant a sentence or short story so it carries personal meaning." },
      ],
    },
    {
      section: "02 / Design approach",
      title: "Making the return visit part of the memory",
      intro: "The longer-term concept connects growth, revisiting, and care. The current prototype focuses on writing, placing the plant, and immediate interaction.",
      columns: [
        { title: "A plant that changes over time", body: "Growth could respond to time, emotion, or environmental conditions, giving people something new to discover when they return." },
        { title: "Revisit and care", body: "At the original location, users could see the plant and its memory again, then continue the relationship through actions such as watering." },
      ],
    },
    {
      section: "03 / Production process",
      title: "Bringing a digital plant into the live camera view",
      intro: "The process moves from 3D construction to material studies and recorded AR scenes, showing how form design enters the spatial experience.",
      columns: [
        { title: "01 · Model structure", body: "Use the untextured model to check the relationship between petals, branches, and the central form." },
        { title: "02 · Material expression", body: "Test how metallic, translucent, and pale surfaces reveal the model’s details." },
        { title: "03 · AR context", body: "Evaluate scale and spatial presence against the ground, background, and changing camera angles." },
      ],
    },
    {
      section: "03 / Production process",
      title: "Building a surreal internal structure through the plant silhouette",
      intro: "Petals, fine branches, and a central axis create a recognizable botanical form, while wrapped, layered, and open structures give it a distinctly digital character.",
      columns: [
        { title: "Overall silhouette", body: "Petals unfold around the central axis to create a stable vertical composition." },
        { title: "Layered detail", body: "Curved surfaces, intertwined forms, and negative space reward a closer view." },
        { title: "Multi-angle review", body: "Check how branches and petals overlap from different viewpoints so the form remains readable in space." },
      ],
    },
    {
      section: "03 / Production process",
      title: "Using reflection and transparency to emphasize a digital materiality",
      intro: "The render preserves the model’s material system while added lighting reveals curvature, layering, and interior gaps before the asset enters AR.",
      columns: [
        { title: "Reflective surfaces", body: "Silver and pale-pink highlights clarify curved forms and separate the plant from the real grass around it." },
        { title: "Transparency and negative space", body: "Light passing through translucent and open structures exposes the interior layers and highlights the need to test legibility against bright backgrounds." },
        { title: "From render to environment", body: "The final effect must still be evaluated against real light, background contrast, camera movement, and screen size." },
      ],
    },
    {
      section: "03 / Experience",
      title: "Memory input: explain what to capture before entering AR",
      intro: "The opening screen uses a flower image, a writing field, and one planting action to keep the first step focused.",
      columns: [
        { title: "Prompt the memory", body: "Ask for a memory or story the user wants to preserve, connecting the plant to personal content from the beginning." },
        { title: "Support a short response", body: "The recorded prototype enters “happy,” demonstrating the transition from prompt state to typed content." },
        { title: "Make the next step clear", body: "Plant Your Memory Here completes the entry and moves the user into the AR camera view." },
      ],
    },
    {
      section: "03 / Experience",
      title: "Spatial placement: let the plant share the frame with the real world",
      intro: "The camera first reveals the surroundings, then introduces the digital plant. The physical background provides cues for scale, location, and viewing angle.",
      columns: [
        { title: "Observe the environment", body: "Read the ground and surrounding space before placing the digital object." },
        { title: "Adjust the viewpoint", body: "Move the camera while maintaining a clear relationship between the plant and the ground plane." },
        { title: "The plant appears", body: "Use the real setting as a spatial reference so the virtual plant feels anchored rather than overlaid." },
      ],
      note: "Design question: Is the placement clear before the plant appears, and does the ground relationship remain understandable as the camera moves?",
    },
    {
      section: "03 / Experience",
      title: "Care interactions: respond immediately to the user’s attention",
      intro: "Heart and watering controls invite active participation, while expression and watering animations make each completed action visible.",
      columns: [
        { title: "Heart response", body: "An expressive reaction appears above the plant, acknowledging the user’s attention." },
        { title: "Watering action", body: "A watering-can animation appears beside the plant to represent care." },
        { title: "Return to observation", body: "After the animation, the plant remains available for viewing, exploration, and further interaction." },
      ],
    },
    {
      section: "Prototype scope and future system",
      title: "Separating what the current prototype proves from the longer-term garden",
      intro: "The recorded prototype demonstrates the core interaction. Persistent growth and shared spaces require additional data, state management, and validation.",
      columns: [
        { title: "Current prototype", body: "01 · Enter memory text and trigger planting\n02 · View the digital plant in a live camera scene\n03 · Receive animated feedback through heart and watering actions" },
        { title: "Next-stage expansion", body: "01 · Save the memory and spatial location for return visits\n02 · Connect growth to time, emotion, or environmental state\n03 · Define public and private memories before exploring a shared garden" },
      ],
      note: "Technical direction: Blender for 3D assets; Lens Studio and WebAR were considered as delivery options. The next prototype should validate positioning, saved content, and changing states end to end.",
    },
    {
      section: "Outcome and next steps",
      title: "Turning remembrance into a spatial experience people can participate in",
      intro: "Digital plants connect expression, observation, and care, exploring how personal memories can become part of an everyday environment.",
      columns: [
        { title: "Form and interaction express the idea together", body: "The plant is more than decoration. Written content gives it meaning, spatial placement brings it into the environment, and care feedback responds to participation." },
        { title: "Validate comprehension first", body: "Observe whether people understand the writing prompt, planting action, and care controls—and whether they can locate and clearly view the plant on first use." },
        { title: "Then validate continuity", body: "Test whether saving, revisiting, and state changes remain reliable. Before moving into public space, define how personal content is visible and managed." },
      ],
    },
  ],

  "studio-index": [
    {
      section: "Brooklyn Seltzer Museum · Digital museum experience",
      title: "Walk with Walter",
      intro: "One person’s voice. A city’s seltzer memories.",
      columns: [
        { title: "Platform", body: "Bloomberg Connects" },
        { title: "Scope", body: "Content strategy · experience structure · UI/UX · video production" },
      ],
      note: "8 stops · approximately 30 minutes · published experience",
    },
    {
      section: "01 / Project framing",
      title: "Turning oral history into a self-guided museum experience",
      intro: "The guide brings together Walter Backerman’s personal stories, the context of the collection, and a clear sequence of stops for both on-site and remote visitors.",
      columns: [
        { title: "Institutional goal", body: "Connect museum objects with the lived experience of a working seltzer deliveryman inside a family-run factory that is still in operation." },
        { title: "Visitor need", body: "Give spontaneous stories enough context and structure for people who may not know the neighborhood, the family, or the industry." },
        { title: "My role", body: "Lead UI/UX Designer across experience design, video recording and editing, and collaborative production of the guide." },
      ],
      note: "One content structure supports two contexts: a visit among the objects and a remote exploration of the museum’s history.",
    },
    {
      section: "01 / Project framing",
      title: "Researching the relationship between story, navigation, and pace",
      intro: "Surveys, interviews, and a review of another guide on the same platform helped identify how content should be structured and discovered.",
      columns: [
        { title: "Survey", body: "Ten responses provided directional insight into age, navigation, content, and pacing. The experience was clear, but needed stronger reasons to keep exploring." },
        { title: "Interviews", body: "Questions about museum visits, platform familiarity, expectations, memorable moments, and friction revealed why a visit flows—or breaks down." },
        { title: "Comparative review", body: "The New York City Fire Museum’s Jill Freedman guide showed how a person’s voice, archival imagery, and collection objects can form one narrative." },
      ],
    },
    {
      section: "02 / Design approach",
      title: "Move from understanding history to wanting to hear more",
      intro: "Walter’s point of view became the reason to continue. The structure supports that voice without asking every visitor to move at the same pace.",
      columns: [
        { title: "A person is the through-line", body: "Walter’s humor, voice, and lived experience carry meaning that a conventional label cannot. His story connects the stops." },
        { title: "Context appears where it is needed", body: "Names, neighborhoods, and family relationships are explained at the moment they matter—especially for visitors from outside New York." },
        { title: "Visitors choose their pace", body: "Independent stops support both sequential listening and selective browsing for different ages, interests, and attention spans." },
        { title: "Stories reconnect to objects", body: "Bottles, trucks, photographs, and locations turn oral history into an experience grounded in the physical museum." },
      ],
    },
    {
      section: "02 / Design approach",
      title: "Start with the story, then decide how information appears",
      intro: "A character-led narrative, thematic stops, and purposeful media turn spontaneous conversation into an experience people can enter, pause, and resume.",
      columns: [
        { title: "People before information", body: "Meet the storyteller first, then move into family, industry, and city culture so visitors understand why this history is his to tell." },
        { title: "Independent but connected stops", body: "Each stop has one theme and a place in the overall arc, while still allowing visitors to follow their interests." },
        { title: "A role for every medium", body: "Video preserves voice; archival images connect objects; short text supplies context; maps and transcripts create alternate ways in." },
        { title: "Two anchor stories", body: "A postwar family trade and a childhood on the Bronx delivery route ground broader history in specific lived experience." },
      ],
    },
    {
      section: "02 / Design approach",
      title: "Eight stops create a recognizable narrative arc",
      intro: "The published sequence moves from meeting Walter and his family, through the objects and culture of seltzer, and back to experience, preservation, and legacy.",
      columns: [
        { title: "01 · Person and family", body: "" },
        { title: "02 · Object and industry", body: "" },
        { title: "03 · Experience and legacy", body: "" },
      ],
    },
    {
      section: "02 / Design approach",
      title: "Turning spontaneous storytelling into a publishable experience",
      intro: "Design decisions continued through story selection, recording, editing, platform configuration, and stakeholder review—not just the interface.",
      columns: [
        { title: "From research to story framework", body: "Project goals, visitor needs, and themes shaped what should be recorded before material accumulated." },
        { title: "From recording to multimedia structure", body: "Walter’s stories were recorded and edited into stops that combine video, images, and concise supporting text while preserving his natural delivery." },
        { title: "From feedback to launch", body: "Content and technical details were refined with stakeholders before configuration in Bloomberg Connects. Ongoing feedback remains the next step." },
      ],
    },
    {
      section: "03 / Experience",
      title: "From entering the guide to understanding a story—and back to the objects",
      intro: "The roughly 30-minute experience uses eight stops. The platform supplies the tools; the project organizes narrative order, media, and context.",
      columns: [
        { title: "Enter the guide", body: "Set expectations with the subject, length, and number of stops." },
        { title: "Choose a stop", body: "Preview numbered themes and follow the sequence or browse freely." },
        { title: "Watch and listen", body: "Begin with Walter’s voice, expression, and humor." },
        { title: "Add context", body: "Supply the family, identity, and neighborhood details needed for the story." },
        { title: "Connect to objects", body: "Link the narrative to bottles, trucks, photographs, and places." },
        { title: "Keep exploring", body: "Offer archival and cultural threads without interrupting the main story." },
      ],
    },
    {
      section: "03 / Experience",
      title: "From “What is this?” to “Which story do I want to hear?”",
      intro: "Scale, themes, and previews appear progressively so visitors can set their own pace before committing to a stop.",
      columns: [
        { title: "Understand the scope", body: "The title establishes Walter as the guide; 30 minutes and eight stops set expectations; the introduction defines what the experience covers." },
        { title: "Choose a theme", body: "Numbers make sequence visible while images and titles preview the subject of each stop." },
        { title: "The opening progression", body: "Meet Walter; expand his perspective into a family history; then connect everyday work and craft to popular culture." },
      ],
    },
    {
      section: "03 / Experience",
      title: "Keep the main story clear, then let curiosity branch outward",
      intro: "A person’s story creates the foundation; related images and thematic links connect it to the wider culture of seltzer.",
      columns: [
        { title: "Video preserves the person", body: "Expression, pauses, and humor give the oral history warmth. Identity and theme make clear who—and what—the visitor is hearing." },
        { title: "Text adds only the missing context", body: "Brief descriptions connect family and historical background. Transcripts provide another way to access the content." },
        { title: "Optional depth", body: "Comics and popular culture, delivery trucks and archives, bottle history, and a Touch Tour create focused paths for visitors who want more." },
      ],
    },
    {
      section: "03 / Experience",
      title: "Every research insight maps to a content decision",
      intro: "The final system makes the design logic visible while distinguishing the team’s work from the capabilities supplied by Bloomberg Connects.",
      columns: [
        { title: "Person-led narrative", body: "Walter’s experience drives the guide theme, the introductory stop, and the video content." },
        { title: "Context at the point of need", body: "Identity, family, and neighborhood background appear in stop titles and descriptions." },
        { title: "Flexible pace", body: "Independent themes, previews, and related content support different interests and visit styles." },
        { title: "Connection to place", body: "Images, objects, and map entry points tie the oral history back to the museum and its collection." },
      ],
      note: "Team delivery: research, narrative direction, stop structure, recording, editing, and content refinement. Platform: page framework, media playback, maps, and transcripts.",
    },
    {
      section: "Delivery and reflection",
      title: "A published digital guide that visitors can access today",
      intro: "The project connects research, content architecture, multimedia production, and platform publishing through Walter’s voice.",
      columns: [
        { title: "Delivered", body: "A public eight-stop Walk with Walter guide, listed at approximately 30 minutes and available through a shareable link." },
        { title: "Most important learning", body: "Authenticity and structure have to work together: preserve Walter’s voice while giving visitors enough context and a clear way into the story." },
        { title: "Next iteration", body: "Establish the recording relationship and story outline earlier, then test navigation and comprehension with both on-site and remote visitor tasks." },
      ],
    },
  ],

  "memory-field": [
    {
      section: "Selected work / 2026",
      title: "PetJoJo",
      intro: "Make choices clearer. Make purchases more confident.",
      columns: [
        { title: "Project", body: "An e-commerce experience redesign for a pet brand, focused on product understanding, trust, and purchase action." },
        { title: "Role", body: "Tiffany Wang · UI/UX Designer · Team: Tiffany Wang / Shiyu Zeng" },
      ],
      note: "Three-month project · 2026",
    },
    {
      section: "01 / Project framing",
      title: "Moving from brand appeal to confident purchase decisions",
      intro: "The redesign focused on the product detail page—where customers decide whether an item is right for their pet and whether the brand has earned their trust.",
      columns: [
        { title: "User goal", body: "Understand whether a product fits their pet and find enough information to make a confident purchase." },
        { title: "Business goal", body: "Preserve the brand’s visual character while making value, product details, and the path to purchase easier to understand." },
        { title: "Design scope", body: "Information hierarchy, reviews, shipping and returns, and consistent purchase controls across the experience." },
      ],
    },
    {
      section: "01 / Project framing",
      title: "After a page looks appealing, what does a customer still need to know?",
      intro: "The original persona and an experience review were reframed as three practical questions that shape a purchase decision.",
      columns: [
        { title: "Is it right for my pet?", body: "Specific product information and in-use imagery help people understand purpose, fit, and everyday use." },
        { title: "Can I trust it?", body: "Reviews and service information reduce uncertainty around quality, shipping, and returns." },
        { title: "What should I do next?", body: "A clear quantity control and primary purchase action reduce the jump between information and action." },
      ],
      note: "Chelsea’s underlying need: understand how a product could improve her cat’s life—not choose on appearance or price alone.",
    },
    {
      section: "02 / Design approach",
      title: "Organize the page around the sequence of a purchase decision",
      intro: "First understand the product. Then build trust. Finally, make the action unmistakable.",
      columns: [
        { title: "01 · Understand", body: "Product imagery and a concise description connect the item’s value to a recognizable use case." },
        { title: "02 · Build trust", body: "Reviews, shipping, and returns appear close to the questions they answer instead of forcing a separate search." },
        { title: "03 · Purchase", body: "Hierarchy, spacing, and consistent controls make quantity selection and Add to Cart easy to identify." },
      ],
      note: "Design principle: keep important information close to the decision point, reveal long content on demand, and use visual changes to improve comprehension and action.",
    },
    {
      section: "02 / Design approach",
      title: "Turn reference research into specific design moves",
      intro: "Patterns from Chewy and The Kind Pet became concrete questions and actions rather than a visual mood board.",
      columns: [
        { title: "Can users see the next step?", body: "Emphasize Add to Cart and standardize the purchase controls." },
        { title: "Can users understand the product quickly?", body: "Move the core description forward, break up long paragraphs, and surface key points." },
        { title: "Can users find the detail they need?", body: "Group long-form information by topic and reveal it on demand." },
        { title: "Do users have evidence to decide?", body: "Bring reviews closer to product information and reorganize shipping and returns." },
      ],
    },
    {
      section: "03 / Solution",
      title: "01 · Create a stable, easy-to-scan purchase area",
      intro: "The purchase zone brings the product name, price, quantity, and primary action into one consistent component, with service details in a supporting role.",
      columns: [
        { title: "Prioritize the main action", body: "Color, position, and white space establish a clear visual priority for Add to Cart." },
        { title: "Standardize the component", body: "The floating purchase control and the in-page purchase area use the same structure to reduce recognition cost." },
        { title: "Clarify supporting information", body: "Shipping and return details stay visible without competing with the primary action." },
      ],
    },
    {
      section: "03 / Solution",
      title: "02 · Turn long descriptions into scannable content",
      intro: "Detail imagery, thematic grouping, and concise lists help customers understand the product without reading a wall of text.",
      columns: [
        { title: "Explain with imagery", body: "Three detail views communicate the playful form, durable construction, and multiple angles at a glance." },
        { title: "Group by topic", body: "Product Details becomes a dedicated expandable section, keeping the page hierarchy calm and predictable." },
        { title: "Make specifics findable", body: "Angles, materials, dimensions, assembly, and care become individual list items that are easy to scan." },
      ],
    },
    {
      section: "03 / Solution",
      title: "Bring understanding, trust, and action together",
      intro: "The desktop product page combines a strong product image with the information and controls needed to decide.",
      columns: [
        { title: "Product presentation", body: "A large image creates immediate understanding while the name, price, and concise description stay together." },
        { title: "Trust signals", body: "Ratings, inventory, and service information sit close to the product details they support." },
        { title: "Purchase action", body: "Quantity and Add to Cart form a single, recognizable action group." },
      ],
    },
    {
      section: "03 / Solution",
      title: "Let the collection page support an initial comparison",
      intro: "Browsing moves from appearance to basic comparison, then into the detail page for a deeper decision.",
      columns: [
        { title: "Consistent cards", body: "Shared image ratios and card structures create a steady horizontal browsing rhythm across different products." },
        { title: "Fixed comparison points", body: "Name, price, color, and rating appear in the same place so like-for-like information is easy to locate." },
        { title: "A clear handoff", body: "The list supports initial screening; the product page carries the deeper evaluation." },
      ],
    },
    {
      section: "03 / Page analysis",
      title: "Use scenarios to turn product geometry into imagined use",
      intro: "Customer question: What do these shapes and angles actually let my cat do?",
      columns: [
        { title: "Lead with the benefit", body: "“Various Play” frames the section around what a cat can do rather than opening with specifications." },
        { title: "Let words and diagrams explain each other", body: "Copy describes the angles while illustrations show the relationship between the cat and the object." },
        { title: "One idea at a time", body: "A heading, a short explanation, and one image group stay focused on a single benefit—ideal for a long scrolling page." },
      ],
    },
    {
      section: "03 / Page analysis",
      title: "Use FAQs to help customers judge fit",
      intro: "Customer questions: Is it suitable for an adult cat? What if my cat does not scratch? How should it be cleaned?",
      columns: [
        { title: "Use the customer’s language", body: "Specific questions are easier to scan than answers buried inside general product copy." },
        { title: "Reveal detail on demand", body: "The accordion keeps the initial page light while preserving the question and surrounding context when an answer opens." },
        { title: "Return to a decision", body: "Answers connect fit, dimensions, and weight capacity to the customer’s own pet rather than stopping at a generic claim." },
      ],
    },
    {
      section: "03 / Page analysis",
      title: "Move from an average rating to evidence of real use",
      intro: "Customer question: Beyond the brand’s description, how have other buyers actually used the product?",
      columns: [
        { title: "Start with the overall signal", body: "Average rating, review count, and star distribution show both the headline result and how it is composed." },
        { title: "Show where feedback comes from", body: "Dates, star ratings, and Verified labels make timing and platform status visible." },
        { title: "Add real-world context", body: "Written experiences and customer photos show how pets relate to the product in everyday settings." },
      ],
    },
    {
      section: "03 / Page analysis",
      title: "Make care and return conditions clear before purchase",
      intro: "Customer questions: How do I maintain it? If it is not right, can I return it—and what do I need to do?",
      columns: [
        { title: "Keep service information in context", body: "Product details, care, and shipping and returns remain adjacent on the product page." },
        { title: "Use consistent controls", body: "Shared dividers, labels, and arrows communicate state; closed sections remain visible when another section opens." },
        { title: "Connect policy to process", body: "Return windows, contact channels, and conditions explain both the rule and how a customer can act on it." },
      ],
    },
    {
      section: "Project outcome",
      title: "Use information structure to support more confident decisions",
      intro: "The project connects PetJoJo’s brand expression with the practical usability of an e-commerce experience.",
      columns: [
        { title: "01 · Define the real problem", body: "Move beyond whether the page looks good to whether customers can understand a product, establish trust, and complete an action." },
        { title: "02 · Build a strategy", body: "Understanding, trust, and action create a shared rationale for content grouping and visual hierarchy." },
        { title: "03 · Carry it through", body: "Extend the system from browsing and purchase controls into scenarios, FAQs, reviews, care, and service conditions." },
        { title: "Validation next", body: "Ask target customers to judge fit, locate reviews and return terms, and add an item to the cart; measure findability, comprehension, and interaction friction." },
      ],
      note: "Scope note: research summaries, personas, comparisons, and high-fidelity screens come from the original project. The added page analysis explains design logic from interface observation and does not claim untested outcomes.",
    },
  ],
};
