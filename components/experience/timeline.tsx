"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

const TIMELINE_DATA = [
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
    visual: {
      type: "icon-box",
      icon: "workspace_premium",
      color: "from-secondary/20 to-secondary/5",
      iconColor: "text-secondary",
    },
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
];

export default function ExperienceTimeline() {
  return (
    <div
      className="relative before:absolute before:left-5 md:before:left-5 before:top-0 before:bottom-0 before:w-0.5 before:bg-linear-to-b before:from-primary/10 before:via-primary before:to-secondary before:opacity-20 -translate-x-px"
      role="list"
      aria-label="Career and Education Timeline"
    >
      {TIMELINE_DATA.map((item, index) => (
        <section
          key={`${item.company}-${index}`}
          className="relative pl-12 md:pl-16 mb-20 md:mb-24 last:mb-0 group/item"
          aria-labelledby={`item-${index}`}
        >
          {/* Dot Icon */}
          <div
            className="absolute left-0 top-0 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center z-10 border-4 border-background group-hover/item:bg-primary transition-all duration-300"
            aria-hidden="true"
          >
            <span className="material-symbols-outlined text-primary group-hover/item:text-on-primary transition-colors text-xl">
              {item.icon}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar info */}
            <div className="lg:col-span-3">
              <span className="text-sm uppercase tracking-widest text-secondary mb-2 block font-bold">
                {item.period}
              </span>
              <h2
                id={`item-${index}`}
                className="text-2xl font-headline font-bold text-on-surface leading-tight mb-1"
              >
                {item.title}
              </h2>
              {item.companyLink ? (
                <a
                  href={item.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-fixed-dim font-medium uppercase tracking-wide text-xs hover:text-primary transition-colors flex items-center gap-1 group/link focus:outline-none focus:text-primary"
                  aria-label={`${item.title} at ${item.company} (visit site in new tab)`}
                >
                  {item.company}
                  <span
                    className="material-symbols-outlined text-[10px] opacity-0 group-hover:link:opacity-100 transition-opacity"
                    aria-hidden="true"
                  >
                    open_in_new
                  </span>
                </a>
              ) : (
                <p className="text-primary-fixed-dim font-medium uppercase tracking-wide text-xs">
                  {item.company}
                </p>
              )}
            </div>

            {/* Main Content Card */}
            <div className="lg:col-span-9 bg-surface-container-low p-6 md:p-8 rounded-2xl border-l-[4px] md:border-l-[6px] border-primary transition-all hover:bg-surface-container hover:translate-x-1 duration-300 shadow-xl shadow-black/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="flex flex-col gap-6">
                  {item.description && (
                    <p className="text-on-surface-variant leading-relaxed font-light">
                      {item.description}
                    </p>
                  )}

                  {item.highlights && (
                    <div className="space-y-4">
                      <h3 className="text-on-surface font-bold flex items-center gap-2 text-sm uppercase tracking-wider opacity-80 font-headline">
                        <span
                          className="material-symbols-outlined text-primary text-base"
                          aria-hidden="true"
                        >
                          terminal
                        </span>
                        Key Achievements
                      </h3>
                      <ul className="space-y-4">
                        {item.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-4 text-on-surface-variant group/ach"
                          >
                            <span
                              className="material-symbols-outlined text-secondary text-lg mt-0.5"
                              aria-hidden="true"
                            >
                              check_circle
                            </span>
                            <span className="text-[15px] leading-relaxed font-light">
                              {h.text.split(h.focus)[0]}
                              <strong className="text-on-surface font-semibold">
                                {h.focus}
                              </strong>
                              {h.text.split(h.focus)[1]}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.metrics && (
                    <div
                      className="flex flex-col gap-4 mt-2"
                      role="list"
                      aria-label="Education Milestones"
                    >
                      {item.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="flex items-center gap-3 text-secondary font-bold text-[11px] uppercase tracking-widest group/metric"
                          role="listitem"
                        >
                          <span
                            className="material-symbols-outlined text-lg transition-transform group-hover/metric:scale-125"
                            aria-hidden="true"
                          >
                            {m.icon}
                          </span>
                          {m.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-8 h-full">
                  {item.tech && (
                    <div className="space-y-4">
                      <h3 className="text-on-surface font-bold flex items-center gap-2 text-sm uppercase tracking-wider opacity-80 font-headline">
                        <span
                          className="material-symbols-outlined text-primary text-base"
                          aria-hidden="true"
                        >
                          psychology
                        </span>
                        Core Competencies
                      </h3>
                      <div
                        className="flex flex-wrap gap-2"
                        role="list"
                        aria-label="Skills applied"
                      >
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className={cn(
                              "px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider",
                              t === "System Design"
                                ? "bg-secondary-container text-secondary"
                                : "bg-surface-variant text-on-surface-variant",
                            )}
                            role="listitem"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.image && (
                    <div className="rounded-xl overflow-hidden aspect-video relative group/img mt-auto shadow-2xl border border-white/5">
                      <Image
                        src={item.image}
                        fill
                        className="object-cover grayscale opacity-40 group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-700 scale-105 group-hover/img:scale-100"
                        alt={`Contextual laboratory or development space for ${item.company}`}
                      />
                      <div
                        className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-60"
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  {item.visual && (
                    <div
                      className="mt-auto flex items-center justify-center p-12 rounded-2xl bg-linear-to-br border border-white/5 relative overflow-hidden group/viz h-full min-h-[160px]"
                      aria-hidden="true"
                    >
                      <div
                        className={cn(
                          "absolute inset-0 bg-linear-to-br opacity-50",
                          item.visual.color,
                        )}
                      />
                      <span
                        className={cn(
                          "material-symbols-outlined text-8xl relative z-10 transition-all duration-700 group-hover/viz:scale-110 group-hover/viz:rotate-6",
                          item.visual.iconColor,
                        )}
                      >
                        {item.visual.icon}
                      </span>
                      <div className="absolute top-2 right-2 w-12 h-12 bg-white/5 rounded-full blur-xl" />
                      <div className="absolute bottom-2 left-2 w-20 h-20 bg-white/5 rounded-full blur-2xl" />
                    </div>
                  )}

                  {item.stats && (
                    <div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto"
                      role="list"
                      aria-label="Academic Stats"
                    >
                      {item.stats.map((s) => (
                        <div
                          key={s.label}
                          className="p-6 rounded-2xl bg-surface-container flex flex-col gap-2 border border-white/5 group/stat hover:border-primary/20 transition-all shadow-lg"
                          role="listitem"
                        >
                          <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-[0.2em] group-hover/stat:text-primary transition-colors">
                            {s.label}
                          </span>
                          <span className="text-2xl font-headline font-bold text-on-surface">
                            {s.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
