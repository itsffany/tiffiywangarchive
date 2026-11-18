import type { Project } from "./projects";
import type { Language } from "./language";

export const homeCopy = {
  en: {
    nav: ["About", "Archive", "Focus", "Contact"],
    heroSubtitle: "Interaction designer shaping AI-powered experiences for complex, real-world workflows across technology, healthcare, education, entertainment, and beyond.",
    enter: "ENTER ARCHIVE",
    sound: "Sound",
    on: "on",
    off: "off",
    about: "ABOUT",
    role: "Human Computer Interaction Designer",
    aboutTitle: "I design for what’s next, turning complex systems into clear, human experiences.",
    aboutBody: "I’m interested in how people make sense of new technology, especially AI. As an interaction designer, I work with complex systems and emerging ideas, turning them into experiences that feel clear, intuitive, and human. I care about designing products that not only work well, but also help people understand what they’re using and why it matters.",
    education: "EDUCATION",
    focus: "FOCUS",
    focusItems: [
      ["Human–AI Interaction", "Designing legible, controllable relationships between people and adaptive systems."],
      ["Complex Workflows", "Finding calm structure inside high-stakes tools, layered decisions, and fragmented information."],
      ["Emerging Experiences", "Prototyping new modes of interaction across spatial, ambient, and multimodal environments."],
    ],
    archiveLabel: "SELECTED ARCHIVE / 04",
    work: "Work",
    workBody: "Four explorations across systems, intelligence, care, and culture. Select a project to enter its field notes.",
    available: "AVAILABLE FOR SELECT COLLABORATIONS",
    contactTitle: "Let’s make complex things feel clear.",
    contact: "Contact",
  },
  zh: {
    nav: ["关于", "作品", "方向", "联系"],
    heroSubtitle: "交互设计师，专注于将科技、医疗、教育与文化领域中的复杂系统和 AI 工作流，转化为清晰、直观且有人情味的体验。",
    enter: "进入作品集",
    sound: "声音",
    on: "开",
    off: "关",
    about: "关于",
    role: "人机交互设计师",
    aboutTitle: "我面向未来进行设计，把复杂系统转化为清晰、自然的人本体验。",
    aboutBody: "我关注人们如何理解新技术，尤其是 AI。作为交互设计师，我处理复杂系统与新兴概念，并把它们转化为清晰、直观、以人为本的体验。我希望产品不仅运作良好，也能帮助人们理解自己正在使用什么，以及它为什么重要。",
    education: "教育经历",
    focus: "设计方向",
    focusItems: [
      ["人机与 AI 交互", "在人与自适应系统之间建立清楚、可理解、可控制的关系。"],
      ["复杂工作流", "在高风险工具、多层决策与碎片化信息中建立平静而清晰的结构。"],
      ["新兴交互体验", "探索空间、环境与多模态场景中的新型交互方式。"],
    ],
    archiveLabel: "精选作品 / 04",
    work: "作品",
    workBody: "四个围绕系统、智能、关怀与文化展开的设计项目。选择项目，查看完整过程。",
    available: "开放精选合作机会",
    contactTitle: "让复杂的事物变得清晰。",
    contact: "联系",
  },
} as const;

export const projectUi = {
  en: {
    nav: ["About", "Archive", "Focus", "Contact"],
    back: "← Back to Archive",
    project: "PROJECT",
    labels: ["Project Name", "Project Nature", "Team Members", "My Role", "Project Type", "Duration"],
    skip: "Skip to Final Design",
    overview: "PROJECT OVERVIEW",
    abstract: "Abstract",
    menu: "MENU",
    end: "END OF PROJECT",
    next: "Next project",
    pdfLabel: "Chinese portfolio",
    download: "Download PDF",
  },
  zh: {
    nav: ["关于", "作品", "方向", "联系"],
    back: "← 返回作品列表",
    project: "项目",
    labels: ["项目名称", "项目性质", "团队成员", "我的角色", "项目类型", "项目周期"],
    skip: "跳至最终方案",
    overview: "项目概览",
    abstract: "摘要",
    menu: "目录",
    end: "项目结束",
    next: "下一个项目",
    pdfLabel: "中文作品集",
    download: "下载 PDF",
  },
} as const;

type SectionTranslation = { title: string; paragraphs: string[] };
type ProjectTranslation = {
  title: string;
  field: string;
  summary: string;
  nature: string;
  team: string;
  role: string;
  projectType: string;
  duration: string;
  abstract?: string[];
  sections?: Record<string, SectionTranslation>;
};

export const projectZh: Record<string, ProjectTranslation> = {
  "clinical-copilot": {
    title: "Wire Field AR",
    field: "教育 · 增强现实",
    summary: "带电直导线电场的增强现实交互学习设计",
    nature: "UX 研究 / AR 设计",
    team: "Tiffany Wang",
    role: "交互设计师",
    projectType: "个人项目",
    duration: "1 年 · 2025.09–2026.06",
  },
  "atlas-operations": {
    title: "AR Memory Garden",
    field: "增强现实 · 3D 体验",
    summary: "一个将感受与记忆种成花朵的个性化增强现实体验。",
    nature: "AR 设计 / 3D",
    team: "Tiffany Wang",
    role: "AR 设计师",
    projectType: "个人项目",
    duration: "3 个月 · 2026",
    abstract: [
      "AR Memory Garden 是一个个性化增强现实体验，把想法与记忆转化为不断生长的数字环境。",
      "用户可以写下一段记忆，选择一朵有意义的花，在增强现实中种下并持续照料，建立一个与自己共同成长的私人视觉档案。",
    ],
    sections: {
      context: { title: "项目背景", paragraphs: ["项目探索增强现实如何以更具视觉性和表达性的方式支持个人反思。记忆不再只停留在日记文字中，而能在周围环境里形成可见、可互动的形态。"] },
      storyboard: { title: "故事板", paragraphs: ["体验面向喜欢记录、表达自我并希望以艺术方式保存经历的人群。设计重点是让记忆变得可感知且私人化，而不只是屏幕上的一段文字。"] },
      insights: { title: "设计洞察", paragraphs: ["当记忆与可见、可互动的事物建立联系时，会更有意义。因此我选择花朵代表不同感受与记忆，让用户逐渐建立反映个人经历的花园。"] },
      design: { title: "设计过程", paragraphs: ["我在 Blender 中制作 3D 花朵资产，并在 Unity 中搭建 AR 体验。交互包含写下记忆、在空间中种花、浇水、添加情绪表达，以及持续照料花园。"] },
      "final-design": { title: "最终设计", paragraphs: ["最终原型允许用户在真实环境中放置一朵花，并将其与个人记忆连接。通过种植与浇水等简单交互，体验把日记转化为空间化、视觉化且更私人的反思方式。"] },
      reflection: { title: "设计反思", paragraphs: ["原型开发让我更深入理解在 AR 环境中整合 3D 内容、界面、动画与交互逻辑的复杂性。未来可以加入长期记忆存储，并让花朵随着互动而持续变化。"] },
    },
  },
  "memory-field": {
    title: "PetJoJo",
    field: "UI/UX · 实习项目",
    summary: "围绕商品理解、信任建立与购买行动，重构宠物品牌电商体验。",
    nature: "UI/UX 设计",
    team: "Tiffany Wang、Shiyu Zeng",
    role: "UI/UX 设计师",
    projectType: "PetJoJo 网站改版",
    duration: "3 个月 · 2026",
  },
  "studio-index": {
    title: "Walk with Walter",
    field: "应用设计 · 产品设计",
    summary: "通过 Walter 的声音与故事，带领访客体验布鲁克林苏打水博物馆的自主数字导览。",
    nature: "应用设计 / 产品设计",
    team: "Tiffany Wang、Sixin Liang、Katherine Gorton",
    role: "首席 UI/UX 设计师",
    projectType: "UI/UX 设计 / 影像录制与剪辑",
    duration: "3 个月 · 2025",
  },
  "learning-orbit": {
    title: "Learning Orbit",
    field: "教育 · 人工智能",
    summary: "帮助学生建立长期理解，而不只是追求下一道正确答案的自适应学习伙伴。",
    nature: "产品策略 / 交互设计",
    team: "Tiffany Wang",
    role: "产品与交互设计师",
    projectType: "概念项目",
    duration: "12 周 · 2025",
  },
  storyworld: {
    title: "Storyworld Studio",
    field: "生成式 AI · 创意工具",
    summary: "帮助叙事团队探索分支世界，同时保持创作意图与连续性的生成式工作空间。",
    nature: "AI 产品设计",
    team: "Tiffany Wang",
    role: "交互设计师",
    projectType: "概念项目",
    duration: "10 周 · 2025",
  },
  "civic-signal": {
    title: "Civic Signal",
    field: "公共数据 · 信息设计",
    summary: "通过证据、语境与生活经验，让社区变化更容易被理解的公共数据体验。",
    nature: "信息与服务设计",
    team: "Tiffany Wang",
    role: "体验设计师",
    projectType: "概念项目",
    duration: "9 周 · 2024",
  },
  "care-circle": {
    title: "Care Circle",
    field: "医疗健康 · 服务设计",
    summary: "帮助家庭在预约、用药与日常生活中协调长期照护的共享协作层。",
    nature: "服务设计 / 移动交互",
    team: "2 名设计师 · 照护顾问",
    role: "服务与交互设计师",
    projectType: "家庭照护协调",
    duration: "11 周 · 2024",
  },
};

export function localizeProject(project: Project, language: Language) {
  if (language === "en") return project;
  const translation = projectZh[project.id];
  if (!translation) return project;
  return {
    ...project,
    ...translation,
    abstract: translation.abstract ?? project.abstract,
    sections: project.sections.map((section) => {
      const translated = translation.sections?.[section.id];
      return translated ? { ...section, ...translated } : section;
    }),
  };
}
