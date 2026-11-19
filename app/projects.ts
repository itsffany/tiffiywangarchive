export type ProjectMedia = {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;
  fit?: "contain" | "cover";
};

export type ProjectSection = {
  id: string;
  title: string;
  paragraphs: string[];
  note?: string;
  media?: ProjectMedia[];
  mediaLayout?: "stack" | "grid";
  mediaPlacement?: "before" | "after";
  mediaWidth?: number;
  mediaOffset?: number;
  mediaColumns?: string;
  link?: { href: string; label: string };
};

export type Project = {
  id: string;
  index: string;
  title: string;
  field: string;
  year: string;
  summary: string;
  nature: string;
  team: string;
  role: string;
  projectType: string;
  duration: string;
  abstract: string[];
  heroImage?: string;
  heroAlt?: string;
  heroAspectRatio?: string;
  heroWidth?: number;
  heroOffset?: number;
  pdfPortfolio?: {
    folder: string;
    pageCount: number;
    pdf: string;
  };
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    id: "clinical-copilot",
    index: "01",
    title: "AR Physics Experience",
    field: "Education · AR",
    year: "2026",
    summary: "An Embodied AR Experience in Electrodynamics Education",
    nature: "UX Research / AR Design",
    team: "Tiffany Wang",
    role: "Interaction designer",
    projectType: "Personal Project",
    duration: "1 year · 2025.09.05–2026.06.05",
    abstract: [
      "Wire Field AR is an augmented reality learning application designed to help undergraduate physics students better comprehend electric fields as spatial, three-dimensional phenomena.",
      "The project uses guided prediction, exploration, AI feedback, and reflection to link mathematical formulas to physical intuition while reducing the visual complexity of traditional simulations.",
    ],
    heroImage: "/projects/ar-physics/hero.png",
    heroAlt: "Wire Field AR presentation cover",
    heroAspectRatio: "1180 / 670",
    pdfPortfolio: {
      folder: "/projects/pdf-portfolios/wire-field",
      pageCount: 11,
      pdf: "/pdfs/wire-field-ar-zh.pdf",
    },
    sections: [
      {
        id: "context",
        title: "Context",
        paragraphs: [
          "Electric fields are often introduced through equations and flat diagrams, making it difficult for students to form a spatial understanding of direction, strength, and distance.",
          "The project explores how embodied AR interaction can make these invisible relationships easier to see, test, and remember.",
        ],
        media: [{ src: "/projects/ar-physics/figma/context.png", alt: "Wire Field AR learning context and concept visualization" }],
        mediaPlacement: "before",
        mediaWidth: 1139,
        mediaOffset: 20,
      },
      {
        id: "research",
        title: "Research",
        paragraphs: [
          "The research focused on how students experience difficulty with electric fields, especially the gap between mathematical formulas and spatial intuition. It also identified that many existing simulations overwhelm learners with too much visual information instead of helping them build clear mental models.",
        ],
        media: [{ src: "/projects/ar-physics/figma/research.png", alt: "Wire Field AR electric field research visualization" }],
        mediaWidth: 1160,
        mediaOffset: 2,
      },
      {
        id: "insights",
        title: "Insights",
        paragraphs: [
          "Students struggle not only with mathematical difficulty, but also with the disconnect from spatial understanding.",
          "Misalignment between visuals and mathematics creates confusion rather than effective learning. Existing simulations can also become visually complex and overwhelming.",
        ],
        media: [{ src: "/projects/ar-physics/figma/insights.png", alt: "Wire Field AR key research insights" }],
        mediaWidth: 865,
        mediaOffset: 100,
      },
      {
        id: "design",
        title: "Design Process",
        paragraphs: [
          "I designed Wire Field AR, an augmented reality learning experience centered on a charged wire. The experience follows a guided learning flow of Predict / Challenge → Feedback → Explore → Reflection, helping students build understanding step by step rather than simply memorizing equations.",
        ],
      },
      {
        id: "final-design",
        title: "Final Experience",
        paragraphs: [
          "The final prototype combines 3D field visualization, guided challenges, AI tutor feedback, exploration tools, and reflection notes. It helps students compare field strength and direction, experiment with the model, and connect symbolic formulas with spatial patterns.",
        ],
        media: [
          { src: "/projects/ar-physics/figma/final-01.png", alt: "Wire Field AR goals and guided learning flow" },
          { src: "/projects/ar-physics/figma/final-02.png", alt: "Wire Field AR three-screen prototype sequence" },
          { src: "/projects/ar-physics/figma/final-03.png", alt: "Wire Field AR complete final interface sequence" },
        ],
        mediaWidth: 1180,
      },
      {
        id: "reflection",
        title: "Reflection",
        paragraphs: [
          "This project reinforced the importance of translating abstract scientific concepts into interactions that are spatial, visual, and understandable. The most effective moments came from balancing guidance with exploration, while keeping the interface calm enough that the underlying concept never became overwhelming.",
        ],
      },
    ],
  },
  {
    id: "atlas-operations",
    index: "02",
    title: "AR Memory Garden",
    field: "AR · 3D Experience",
    year: "2026",
    summary: "A personalized augmented reality experience where users plant flowers that stand for feelings and memories.",
    nature: "AR Design / 3D",
    team: "Tiffany Wang",
    role: "AR designer",
    projectType: "Personal Project",
    duration: "3 months · 2026",
    abstract: [
      "AR Memory Garden is a personalized augmented reality experience that transforms ideas and memories into a growing digital environment.",
      "Users can write a memory, choose a meaningful flower, place it in augmented reality, and care for it over time—creating a private visual archive that grows with them.",
    ],
    heroImage: "/projects/ar-memory-garden/hero.png",
    heroAlt: "AR Memory Garden visual identity",
    heroAspectRatio: "1146 / 639",
    heroWidth: 1146,
    heroOffset: 17,
    pdfPortfolio: {
      folder: "/projects/pdf-portfolios/ar-memory-garden",
      pageCount: 13,
      pdf: "/pdfs/ar-memory-garden-zh.pdf",
    },
    sections: [
      {
        id: "context",
        title: "Context",
        paragraphs: [
          "The project explores how augmented reality can support personal reflection in a more visual and expressive way. Instead of keeping memories only as written diary entries, AR Memory Garden gives users a way to see their thoughts take physical form in the environment around them.",
        ],
        media: [{ src: "/projects/ar-memory-garden/image-1.png", alt: "AR Memory Garden audience and context of use" }],
        mediaPlacement: "before",
        mediaWidth: 1134,
        mediaOffset: 28,
      },
      {
        id: "storyboard",
        title: "Storyboard",
        paragraphs: [
          "The concept was designed for people who enjoy journaling, self-expression, and artistic ways of recording personal experiences. The project focused on creating an experience where memories could feel tangible and personal rather than remaining as text on a screen.",
        ],
        media: [
          { src: "/projects/ar-memory-garden/figma/storyboard-01.png", alt: "AR Memory Garden storyboard, part one" },
          { src: "/projects/ar-memory-garden/figma/storyboard-02.png", alt: "AR Memory Garden storyboard, part two" },
        ],
        mediaWidth: 1035,
        mediaOffset: 87,
      },
      {
        id: "insights",
        title: "Insights",
        paragraphs: [
          "A memory can feel more meaningful when it is connected to something visual and interactive. This led to the idea of using flowers as representations of different feelings and memories, allowing users to gradually build a garden that reflects their personal experiences.",
        ],
      },
      {
        id: "design",
        title: "Design Process",
        paragraphs: [
          "I created the 3D flower assets in Blender and built the AR experience in Unity. The interaction includes writing a memory, planting a flower in AR space, watering it, adding emotional expressions, and continuing to care for the growing garden over time.",
        ],
        media: [
          { src: "/projects/ar-memory-garden/figma/design-01.png", alt: "Flower asset material development in Blender" },
          { src: "/projects/ar-memory-garden/figma/design-02.png", alt: "AR Memory Garden interaction scripting" },
          { src: "/projects/ar-memory-garden/figma/design-03.png", alt: "AR Memory Garden scene development in Unity" },
          { src: "/projects/ar-memory-garden/figma/design-04.png", alt: "AR Memory Garden Unity event configuration" },
        ],
        mediaLayout: "grid",
        mediaWidth: 791,
        mediaOffset: 87,
        mediaColumns: "442fr 339fr",
      },
      {
        id: "final-design",
        title: "Final Design",
        paragraphs: [
          "The final prototype allows users to place a flower in their physical environment and connect it with a personal memory. Through simple interactions such as planting and watering, the experience transforms journaling into a more spatial, visual, and personal form of reflection.",
        ],
        media: [
          { src: "/projects/ar-memory-garden/figma/final-01.png", alt: "AR Memory Garden final mobile interface", aspectRatio: "535 / 697", fit: "cover" },
          { src: "/projects/ar-memory-garden/figma/final-02.png", alt: "AR Memory Garden final flower visualization", aspectRatio: "535 / 697", fit: "cover" },
        ],
        mediaLayout: "grid",
        mediaWidth: 1103,
        mediaOffset: 57,
        mediaColumns: "1fr 1fr",
      },
      {
        id: "reflection",
        title: "Reflection",
        paragraphs: [
          "Building the prototype helped me better understand the complexities of combining 3D content, UI, animation, and interaction logic in an AR environment. Future iterations may include long-term memory storage and flowers that visually transform over time as people interact with them.",
        ],
      },
    ],
  },
  {
    id: "memory-field",
    index: "03",
    title: "PetJoJo",
    field: "UI/UX · Internship",
    year: "2026",
    summary: "Refined the website experience for a pet brand, improving its structure, usability, and visual presentation to create a clearer and more cohesive experience for customers.",
    nature: "UI/UX Design",
    team: "Tiffany Wang, Shiyu Zeng",
    role: "UI/UX Designer",
    projectType: "Redesign for PetJoJo",
    duration: "3 months · 2026",
    abstract: [
      "PetJoJo is a website redesign project focused on improving the shopping experience for a premium pet brand.",
      "The redesign makes product information easier to understand, strengthens visual hierarchy, and helps customers feel more confident when choosing products for their pets.",
    ],
    heroImage: "/projects/petjojo/hero.png",
    heroAlt: "PetJoJo website shown on a laptop",
    heroAspectRatio: "1180 / 790",
    pdfPortfolio: {
      folder: "/projects/pdf-portfolios/petjojo",
      pageCount: 14,
      pdf: "/pdfs/petjojo-zh.pdf",
    },
    sections: [
      {
        id: "context",
        title: "Context",
        paragraphs: [
          "Pet owners often need more than attractive product images—they also need clear, trustworthy information to understand whether a product is right for their pets. The project focused on improving the product page so important information, reviews, and purchase actions feel easier to find and understand.",
        ],
        media: [{ src: "/projects/petjojo/figma/context.png", alt: "PetJoJo original website and project context" }],
        mediaPlacement: "before",
        mediaWidth: 935,
        mediaOffset: 81,
      },
      {
        id: "research",
        title: "Research",
        paragraphs: [
          "We reviewed the existing PetJoJo experience, created a target persona, and studied competitor websites such as Chewy and The Kind Pet. The research highlighted useful patterns including clearer product options, stronger content hierarchy, product information tabs, and more visible purchase actions.",
        ],
        media: [{ src: "/projects/petjojo/figma/research.png", alt: "PetJoJo target persona and competitor research" }],
        mediaWidth: 934,
        mediaOffset: 107,
      },
      {
        id: "insights",
        title: "Insights",
        paragraphs: [
          "The main insight was that customers need to quickly understand what makes a product useful, trustworthy, and appropriate for their pets. Important information was competing for attention, so the redesign needed a clearer hierarchy between product details, reviews, delivery information, and purchasing actions.",
        ],
      },
      {
        id: "design",
        title: "Design Process",
        paragraphs: [
          "The redesign improved the product page with a clearer content hierarchy and stronger visual focus. Key changes included highlighting the product description, making Add to Cart the primary action, restructuring shipping and return information, improving spacing, streamlining long content, and establishing more consistent components.",
        ],
        media: [{ src: "/projects/petjojo/figma/design.png", alt: "PetJoJo design solution comparison" }],
        mediaWidth: 1128,
        mediaOffset: 17,
      },
      {
        id: "final-design",
        title: "Final Experience",
        paragraphs: [
          "The final experience presents product information in a more structured and readable way while making important actions easier to find. Reviews were moved closer to product information, long sections were simplified, and users can reveal additional details only when they need them.",
        ],
        media: [
          { src: "/projects/petjojo/figma/final-01.png", alt: "PetJoJo final product page" },
          { src: "/projects/petjojo/figma/final-02.png", alt: "PetJoJo final collection and supporting content" },
        ],
        mediaWidth: 1144,
        mediaOffset: 25,
        link: { href: "https://petjojo.com/", label: "Visit PetJoJo website" },
      },
      {
        id: "reflection",
        title: "Reflection",
        paragraphs: [
          "This project reinforced how small changes in hierarchy, spacing, content structure, and interaction can significantly affect trust and purchase confidence in e-commerce. It also showed the importance of balancing PetJoJo’s visual identity with practical usability while continuing to refine the experience through client feedback and high-fidelity prototyping.",
        ],
      },
    ],
  },
  {
    id: "studio-index",
    index: "04",
    title: "Brooklyn Seltzer Museum",
    field: "App Design · Product Design",
    year: "2025",
    summary: "A self-guided digital walking tour that helps visitors experience the Brooklyn Seltzer Museum through Walter’s stories.",
    nature: "App Design / Product Design",
    team: "Tiffany Wang, Sixin Liang, Katherine Gorton",
    role: "Lead UI/UX designer",
    projectType: "UI/UX design / Video editing & recording",
    duration: "3 months · 2025",
    abstract: [
      "Walk With Walter is a self-guided storytelling experience created for the Brooklyn Seltzer Museum and published through Bloomberg Connects.",
      "Using Walter’s authentic voice, personal stories, archival images, and museum locations, the tour brings visitors closer to the living history of New York’s seltzer culture while extending the museum experience beyond its physical space.",
    ],
    heroImage: "/projects/brooklyn-seltzer/hero.png",
    heroAlt: "Walk with Walter digital museum tour",
    heroAspectRatio: "1180 / 679",
    pdfPortfolio: {
      folder: "/projects/pdf-portfolios/walter",
      pageCount: 12,
      pdf: "/pdfs/walk-with-walter-zh.pdf",
    },
    sections: [
      {
        id: "context",
        title: "Context",
        paragraphs: [
          "The Brooklyn Seltzer Museum wanted to create a more personal and accessible way for visitors to experience its history. Rather than presenting information only through traditional exhibit text, the project focused on Walter, a real seltzer delivery person, using his memories and experiences to connect the museum’s objects with the people, neighborhoods, and traditions behind them.",
        ],
      },
      {
        id: "research",
        title: "Research",
        paragraphs: [
          "Our research included surveys, interviews, and landscape analysis to better understand visitor needs and explore how other museums use digital storytelling. We synthesized the findings to identify opportunities around content clarity, audience accessibility, multimedia storytelling, and the emotional value of Walter’s personal perspective.",
        ],
        media: [
          { src: "/projects/brooklyn-seltzer/figma/research-01.png", alt: "Brooklyn Seltzer Museum visitor research" },
          { src: "/projects/brooklyn-seltzer/figma/research-02.png", alt: "Brooklyn Seltzer Museum interview research" },
        ],
        mediaLayout: "grid",
        mediaWidth: 1104,
        mediaOffset: 30,
        mediaColumns: "545fr 554fr",
      },
      {
        id: "insights",
        title: "Insights",
        paragraphs: [
          "The key insight was that Walter himself was the strongest part of the experience. Instead of treating his stories as supporting content, the tour needed to center his personality and voice while giving visitors enough context to understand each story and connecting it clearly to a physical object or location in the museum.",
        ],
        media: [{ src: "/projects/brooklyn-seltzer/figma/insights.png", alt: "Emerging insights for the Walk with Walter tour" }],
        mediaWidth: 1036,
        mediaOffset: 72,
      },
      {
        id: "design",
        title: "Design Process",
        paragraphs: [
          "We created a stop-by-stop tour structure that connected Walter’s short, conversational stories to specific locations and items across the museum. The experience integrated audio, video, photos, and textual context, with numerous rounds of editing and stakeholder feedback helping turn Walter’s unstructured storytelling into a clear narrative while keeping his personality.",
        ],
        media: [{ src: "/projects/brooklyn-seltzer/figma/design.png", alt: "Walk with Walter production milestones" }],
        mediaWidth: 1030,
        mediaOffset: 81,
      },
      {
        id: "final-design",
        title: "Final Design",
        paragraphs: [
          "The final tour was produced and published on Bloomberg Connects, allowing visitors to follow Walter through the museum while also making the experience available remotely. The finished experience brings together his voice, personal history, visual material, and physical museum objects into one structured digital journey.",
        ],
        media: [{ src: "/projects/brooklyn-seltzer/figma/final.png", alt: "Final Walk with Walter tour interface" }],
        mediaWidth: 1104,
        mediaOffset: 56,
      },
      {
        id: "reflection",
        title: "Reflection",
        paragraphs: [
          "This project showed me how important it is to balance authentic storytelling with clear experience design. One of the biggest challenges was transforming spontaneous, nonlinear stories into an experience that visitors could easily follow while preserving Walter’s voice.",
          "In future iterations, I would build stronger rapport before recording and establish a looser story outline and clearer production timeline earlier in the process.",
        ],
      },
    ],
  },
  {
    id: "learning-orbit",
    index: "05",
    title: "Learning Orbit",
    field: "Education · AI",
    year: "2025",
    summary: "An adaptive learning companion that helps students build durable understanding instead of optimizing for the next correct answer.",
    nature: "Learning Research / Interaction Design",
    team: "Solo designer · Faculty advisor",
    role: "Researcher and interaction designer",
    projectType: "Adaptive learning experience",
    duration: "10 weeks · 2025",
    abstract: ["Learning Orbit helps students understand their own reasoning, not simply reach a correct answer faster.", "Reflective dialogue, a visible knowledge map, and adjustable hints make progress concrete while preserving productive struggle."],
    sections: [
      { id: "context", title: "Context", paragraphs: ["Generic AI tutors often provide fluent solutions before a learner has identified the gap in their own reasoning. This can create the feeling of progress without durable understanding."] },
      { id: "research", title: "Research", paragraphs: ["Student interviews and think-aloud sessions showed that learners needed help locating the point where their reasoning changed direction and wanted control over how much assistance appeared."] },
      { id: "insights", title: "Insights", paragraphs: ["Reflection worked best when it was specific and lightweight. A visual record of concepts and misconceptions helped students return to unfinished understanding over time."] },
      { id: "design", title: "Design Process", paragraphs: ["I designed a dialogue model that asks learners to explain, compare, and predict before offering help. A layered hint control lets them choose between a prompt, an example, and a full explanation."] },
      { id: "final-design", title: "Final Design", paragraphs: ["The final prototype connects each conversation to a persistent concept map so students can revisit difficult relationships and see how their explanations evolve."] },
      { id: "reflection", title: "Reflection", paragraphs: ["The project shifted my view of personalization: the most valuable adaptation was helping learners decide what kind of support they needed."] },
    ],
  },
  {
    id: "storyworld",
    index: "06",
    title: "Storyworld Studio",
    field: "Entertainment · Creative tools",
    year: "2025",
    summary: "A generative workspace where narrative teams can explore branching worlds while preserving creative intent and continuity.",
    nature: "Creative Research / Product Design",
    team: "1 designer · 2 writers · 2 engineers",
    role: "Lead interaction designer",
    projectType: "Generative creative tool",
    duration: "14 weeks · 2025",
    abstract: ["Storyworld Studio is a generative workspace for narrative teams exploring branching stories.", "It treats AI as a collaborator inside a shared canon rather than an unlimited text generator."],
    sections: [
      { id: "context", title: "Context", paragraphs: ["Narrative teams manage characters, locations, timelines, and unresolved threads across many documents. Generative tools accelerated ideation but introduced new continuity and authorship problems."] },
      { id: "research", title: "Research", paragraphs: ["Co-creation sessions with writers surfaced a need to understand not only what changed, but why an alternative was generated and which constraints shaped it."] },
      { id: "insights", title: "Insights", paragraphs: ["Creative trust depended on boundaries. Teams wanted canon to remain stable, suggestions to remain identifiable, and discarded directions to remain recoverable."] },
      { id: "design", title: "Design Process", paragraphs: ["I created a spatial story graph where authored nodes, generated branches, constraints, and dependencies remain visually distinct. Version memory supports comparison without forcing premature commitment."] },
      { id: "final-design", title: "Final Design", paragraphs: ["Teams can generate within selected boundaries, compare branches, and promote only chosen material into canon."] },
      { id: "reflection", title: "Reflection", paragraphs: ["Creative AI interfaces benefit from friction when that friction protects intention."] },
    ],
  },
  {
    id: "civic-signal",
    index: "07",
    title: "Civic Signal",
    field: "Public interest · Data",
    year: "2024",
    summary: "A public data experience that makes neighborhood change legible through evidence, context, and lived perspectives.",
    nature: "Participatory Research / Information Design",
    team: "2 designers · Community partners",
    role: "UX researcher and information designer",
    projectType: "Civic data platform",
    duration: "12 weeks · 2024",
    abstract: ["Civic Signal connects neighborhood-scale patterns with local knowledge and lived experience.", "Layered maps and plain-language interpretation help communities move from evidence to collective discussion."],
    sections: [
      { id: "context", title: "Context", paragraphs: ["Public datasets were technically accessible but difficult to interpret in relation to daily life."] },
      { id: "research", title: "Research", paragraphs: ["Participatory workshops revealed that residents read data through places, memories, and observed change."] },
      { id: "insights", title: "Insights", paragraphs: ["People trusted the experience more when it exposed data limitations and let local knowledge sit beside institutional evidence."] },
      { id: "design", title: "Design Process", paragraphs: ["I designed a layered map that moves between neighborhood pattern, source explanation, and resident observation."] },
      { id: "final-design", title: "Final Design", paragraphs: ["The final experience supports facilitated sessions and independent exploration."] },
      { id: "reflection", title: "Reflection", paragraphs: ["Information design for public life must make room for disagreement and show how knowledge was constructed."] },
    ],
  },
  {
    id: "care-circle",
    index: "08",
    title: "Care Circle",
    field: "Health · Service design",
    year: "2024",
    summary: "A shared coordination layer for families navigating long-term care across appointments, medication, and daily life.",
    nature: "Service Design / Mobile Interaction",
    team: "2 designers · Caregiver advisors",
    role: "Service and interaction designer",
    projectType: "Family care coordination",
    duration: "11 weeks · 2024",
    abstract: ["Care Circle is a shared coordination layer for families navigating long-term care.", "It makes responsibility visible while respecting privacy, emotional context, and changing capacity."],
    sections: [
      { id: "context", title: "Context", paragraphs: ["Family care work was distributed but rarely explicit. Information lived in texts, calendars, memory, and informal routines."] },
      { id: "research", title: "Research", paragraphs: ["Caregiver interviews surfaced needs that ordinary task tools missed: emotional context, changing capacity, privacy, and reassurance without constant checking."] },
      { id: "insights", title: "Insights", paragraphs: ["Families did not need more notifications. They needed confidence that ordinary care was progressing and a clear signal only when attention was required."] },
      { id: "design", title: "Design Process", paragraphs: ["I designed a shared timeline with permission-aware visibility, flexible ownership, and low-friction handoffs."] },
      { id: "final-design", title: "Final Design", paragraphs: ["The final mobile concept gives each family member an appropriate view of care without exposing unnecessary personal detail."] },
      { id: "reflection", title: "Reflection", paragraphs: ["Designing for care required treating emotional labor as part of the workflow."] },
    ],
  },
];

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}
