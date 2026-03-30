import ProjectCard from "@/components/projects/project-card";

const PROJECTS = [
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
    accent: "primary" as const,
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
    accent: "secondary" as const,
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
    accent: "tertiary" as const,
  },
];

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 hero-gradient pointer-events-none -z-10 opacity-30"></div>

      {/* Section Header */}
      <header className="mb-24 text-center md:text-left relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container mb-6 border border-white/5 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(186,158,255,0.8)]"></span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant">
            My Portfolio
          </span>
        </div>
        <h1 className="text-6xl md:text-[80px] font-headline font-bold tracking-tighter text-on-surface mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary leading-[1.1]">
          My Recent Work
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed font-light">
          A selection of high-impact digital products built with a focus on
          performance, scalability, and exceptional user experience.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="relative z-10 flex flex-col gap-10">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {/* Call to action */}
      <section className="mt-40 p-16 rounded-[40px] bg-gradient-to-br from-surface-container-high/60 to-surface-container-low/40 border border-white/5 flex flex-col items-center justify-center text-center gap-10 backdrop-blur-3xl relative z-10 group overflow-hidden">
        <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <div className="max-w-xl relative z-10 flex flex-col gap-5">
          <h2 className="text-5xl font-headline font-bold text-on-surface tracking-tighter font-normal">
            Have a <span className="text-secondary">vision</span> in mind?
          </h2>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed max-w-md mx-auto">
            Let&apos;s collaborate to build something that pushes the boundaries
            of the modern web.
          </p>
        </div>
        <button className="px-12 py-6 bg-primary text-on-primary rounded-2xl font-headline font-bold tracking-tight hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20 relative z-10 uppercase text-xs tracking-[0.2em]">
          Let&apos;s Collaborate
        </button>
      </section>
    </main>
  );
}
