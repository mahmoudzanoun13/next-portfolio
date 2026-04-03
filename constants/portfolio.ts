import { PortfolioData } from "@/types/portfolio";

export const EN_PORTFOLIO_DATA: PortfolioData = {
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Delivered", value: "8+" },
    { label: "Code Accuracy", value: "95%" },
    { label: "Tech Stack Tools", value: "15+" },
  ],
  projects: [
    {
      title: "Adepti",
      description:
        "An internal talent marketplace optimized for enterprise scale. Led the frontend architecture, implementing a comprehensive bilingual (EN/NL) system and sophisticated multi-layered filtering mechanisms.",
      tags: [
        "SaaS",
        "Talent Management",
        "Bilingual",
        "React",
        "MUI",
        "Redux",
        "React Query",
      ],
      features: [
        "Bilingual (EN/NL) Support",
        "Multi-layered Filtering",
        "Scalable Enterprise Structure",
      ],
      link: "https://www.adepti.co",
      image: "/assets/projects/adepti.png",
      accent: "primary",
    },
    {
      title: "Taheiya",
      description:
        "Comprehensive accountants SaaS platform. Engineered a robust real-time communication system and full RTL support. Pioneered a high-efficiency Figma-to-Code workflow.",
      tags: [
        "SaaS",
        "Accountants Freelancing",
        "Real-time Communication",
        "RTL",
        "Next.js",
        "Tailwind CSS",
        "Zustand",
        "React Query",
      ],
      features: [
        "Real-time Communication",
        "Full RTL Support",
        "Optimized SaaS UI",
      ],
      link: "https://mohaseb.sa",
      image: "/assets/projects/taheiya.png",
      accent: "secondary",
    },
    {
      title: "Science Toonz",
      description:
        "Educational powerhouse combining interactive video lessons with real-time AI assessments. Integrated OpenRouter AI for personalized feedback and dynamic quiz generation.",
      tags: [
        "AI",
        "Education",
        "Interactive",
        "React",
        "MUI",
        "Jotai",
        "RTQuery",
      ],
      features: [
        "Interactive Video Lessons",
        "AI-Powered Assessments",
        "OpenRouter Integration",
      ],
      link: "https://sciencetoonz.com",
      image: "/assets/projects/science-toonz.png",
      accent: "tertiary",
    },
  ],
  experience: [
    {
      type: "experience",
      icon: "work",
      period: "Present — 2023",
      title: "Frontend Developer",
      company: "GenTech",
      companyLink: "https://gen-tech.io",
      highlights: [
        {
          text: "Led development of 4 production apps from architectural blueprint to deployment.",
          focus: "4 production apps",
        },
        {
          text: "Architected multi-language support systems for global market reach.",
          focus: "multi-language support",
        },
        {
          text: "Engineered robust internal component libraries used across all corporate digital products.",
          focus: "internal component libraries",
        },
        {
          text: "Contributed to 2 ongoing projects, delivering key features and components",
          focus: "2 ongoing projects",
        },
        {
          text: "Implemented static code analysis using SonarQube to improve code quality across projects.",
          focus: "SonarQube"
        },
      ],
      tech: ["React", "Next.js", "System Design", "Tailwind CSS", "TypeScript"],
      image: "/assets/experience-visual.png",
    },
    {
      type: "education",
      icon: "school",
      period: "2021 — 2022",
      title: "Web Development",
      company: "ZTM Academy",
      description:
        "Advanced immersion into full-stack paradigms, focusing on the MERN stack and modern UI engineering. Mastered state management, backend integration, and responsive design patterns.",
      metrics: [
        { label: "Certification Completed", icon: "verified" },
        { label: "Top Tier Graduate", icon: "grade" },
      ],
      visual: [
        {
          type: "icon-box",
          icon: "workspace_premium",
          color: "from-secondary/20 to-secondary/5",
          iconColor: "text-secondary",
        },
      ],
    },
    {
      type: "education",
      icon: "history_edu",
      period: "2020 — 2021",
      title: "Computer Science",
      company: "Harvard University (CS50)",
      description:
        "Built the fundamental logic foundation. Deep dives into Memory Management, Algorithms, and Data Structures using C, Python, and SQL. Developed a rigorous approach to problem-solving.",
      stats: [
        { label: "Complexity", value: "O(log n)" },
        { label: "Logic Mastery", value: "100%" },
      ],
    },
  ],
};

export const AR_PORTFOLIO_DATA: PortfolioData = {
  stats: [
    { label: "سنوات الخبرة", value: "+3" },
    { label: "مشاريع منجزة", value: "+8" },
    { label: "دقة الكود", value: "95%" },
    { label: "أدوات تقنية", value: "+15" },
  ],
  projects: [
    {
      title: "Adepti",
      description:
        "منصة داخلية للمواهب محسنة للمقياس المؤسسي. قدت بنية الواجهة الأمامية، ونفذت نظامًا ثنائي اللغة (إنجليزي/هولندي) شاملاً وآليات تصفية متطورة متعددة الطبقات.",
      tags: [
        "SaaS",
        "إدارة المواهب",
        "ثنائي اللغة",
        "React",
        "MUI",
        "Redux",
        "React Query",
      ],
      features: [
        "دعم ثنائي اللغة (EN/NL)",
        "تصفية متعددة الطبقات",
        "بنية مؤسسية قابلة للتوسع",
      ],
      link: "https://www.adepti.co",
      image: "/assets/projects/adepti.png",
      accent: "primary",
    },
    {
      title: "Taheiya",
      description:
        "منصة SaaS شاملة للمحاسبين. هندست نظام اتصال قوي في الوقت الفعلي ودعم كامل للغة العربية (RTL). ابتكرت سير عمل عالي الكفاءة من Figma إلى كود.",
      tags: [
        "SaaS",
        "العمل الحر للمحاسبين",
        "اتصال في الوقت الفعلي",
        "RTL",
        "Next.js",
        "Tailwind CSS",
        "Zustand",
        "React Query",
      ],
      features: [
        "اتصال في الوقت الفعلي",
        "دعم كامل لـ RTL",
        "واجهة مستخدم SaaS محسنة",
      ],
      link: "https://mohaseb.sa",
      image: "/assets/projects/taheiya.png",
      accent: "secondary",
    },
    {
      title: "Science Toonz",
      description:
        "منصة تعليمية قوية تجمع بين دروس الفيديو التفاعلية والتقييمات اللحظية المدعومة بالذكاء الاصطناعي. تم دمج OpenRouter AI لتقديم مراجعات مخصصة وإنشاء اختبارات ديناميكية.",
      tags: [
        "الذكاء الاصطناعي",
        "التعليم",
        "تفاعلي",
        "React",
        "MUI",
        "Jotai",
        "RTQuery",
      ],
      features: [
        "دروس فيديو تفاعلية",
        "تقييمات مدعومة بالذكاء الاصطناعي",
        "دمج OpenRouter",
      ],
      link: "https://sciencetoonz.com",
      image: "/assets/projects/science-toonz.png",
      accent: "tertiary",
    },
  ],
  experience: [
    {
      type: "experience",
      icon: "work",
      period: "الحاضر — 2023",
      title: "مطور واجهات أمامية",
      company: "GenTech",
      companyLink: "https://gen-tech.io",
      highlights: [
        {
          text: "قيادة تطوير 4 تطبيقات إنتاجية من المخطط المعماري إلى النشر.",
          focus: "4 تطبيقات إنتاجية",
        },
        {
          text: "هندسة أنظمة دعم متعددة اللغات للوصول إلى السوق العالمية.",
          focus: "أنظمة دعم متعددة اللغات",
        },
        {
          text: "بناء مكتبات مكونات داخلية قوية تُستخدم عبر جميع المنتجات الرقمية للشركة.",
          focus: "مكتبات مكونات داخلية",
        },
        {
          text: "المساهمة في مشروعين مستمرين، بتقديم ميزات ومكونات رئيسية",
          focus: "مشروعين مستمرين",
        },
        {
          text: "تنفيذ تحليل ثابت للكود باستخدام SonarQube لتحسين جودة الكود عبر المشاريع.",
          focus: "SonarQube"
        },
      ],
      tech: ["React", "Next.js", "System Design", "Tailwind CSS", "TypeScript"],
      image: "/assets/experience-visual.png",
    },
    {
      type: "education",
      icon: "school",
      period: "2021 — 2022",
      title: "تطوير الويب",
      company: "أكاديمية ZTM",
      description:
        "انغماس متقدم في نماذج الـ Full-Stack، مع التركيز على MERN وهندسة واجهات المستخدم الحديثة. إتقان إدارة الحالة، تكامل الواجهة الخلفية، وأنماط التصميم المتجاوب.",
      metrics: [
        { label: "تم إكمال الشهادة", icon: "verified" },
        { label: "خريج من الدرجة الأولى", icon: "grade" },
      ],
      visual: [
        {
          type: "icon-box",
          icon: "workspace_premium",
          color: "from-secondary/20 to-secondary/5",
          iconColor: "text-secondary",
        },
      ],
    },
    {
      type: "education",
      icon: "history_edu",
      period: "2020 — 2021",
      title: "علوم الحاسب",
      company: "جامعة هارفارد (CS50)",
      description:
        "بناء أساس الفهم المنطقي. التعمق في إدارة الذاكرة، الخوارزميات، وهياكل البيانات باستخدام C و Python و SQL. تطوير نهج صارم لحل المشكلات.",
      stats: [
        { label: "التعقيد", value: "O(log n)" },
        { label: "إتقان المنطق", value: "100%" },
      ],
    },
  ],
};

export const getPortfolioData = (locale: string): Readonly<PortfolioData> => {
  return locale === "ar" ? AR_PORTFOLIO_DATA : EN_PORTFOLIO_DATA;
};

export const CONTACT_INFO = [
  {
    label: "Email",
    value: "mahmoudzanoun35@yahoo.com",
    icon: "mail",
    link: "mailto:mahmoudzanoun35@yahoo.com",
  },
  {
    label: "Phone & WhatsApp",
    value: "+201064349707",
    icon: "chat",
    link: "https://wa.me/201064349707",
  },
  {
    label: "Location",
    value: "Ashmoun, Egypt",
    icon: "location_on",
    link: "#",
  },
] as const;

export const CORE_TECHS = [
  { label: "React", priority: true },
  { label: "Next.js", priority: true },
  { label: "TypeScript", priority: false },
  { label: "Tailwind CSS", priority: false },
  { label: "AI Tools Integration", priority: true },
  { label: "Zustand", priority: false },
] as const;
