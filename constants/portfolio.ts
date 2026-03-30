import { PortfolioData } from "@/types/portfolio";

export const PORTFOLIO_DATA: PortfolioData = {
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
