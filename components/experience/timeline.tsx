"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { TimelineItem } from "@/types/portfolio";

export default function ExperienceTimeline() {
  return (
    <ul
      className="relative before:absolute before:left-5 md:before:left-5 before:top-0 before:bottom-0 before:w-0.5 before:bg-linear-to-b before:from-primary/10 before:via-primary before:to-secondary before:opacity-20 -translate-x-px"
      aria-label="Career and Education Timeline"
    >
      {PORTFOLIO_DATA.experience.map((item, index) => (
        <TimelineCard
          key={`${item.company}-${index}`}
          item={item}
          index={index}
        />
      ))}
    </ul>
  );
}

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  return (
    <li
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

        <GlassCard
          variant="low"
          className="lg:col-span-9 p-6 md:p-8 border-l-4 md:border-l-[6px] border-primary"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="flex flex-col gap-6">
              {item.description && (
                <p className="text-on-surface-variant leading-relaxed font-light">
                  {item.description}
                </p>
              )}

              {item.highlights && (
                <div className="space-y-4">
                  <h3 className="text-on-surface font-bold flex items-center gap-2 text-sm uppercase tracking-wider font-headline">
                    <span className="material-symbols-outlined text-primary text-base">
                      terminal
                    </span>
                    Key Achievements
                  </h3>
                  <ul className="space-y-4">
                    {item.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-on-surface-variant"
                      >
                        <span className="material-symbols-outlined text-secondary text-lg mt-0.5">
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
                <ul
                  className="flex flex-col gap-4 mt-2"
                  aria-label="Key performance metrics"
                >
                  {item.metrics.map((m) => (
                    <li
                      key={m.label}
                      className="flex items-center gap-3 text-secondary font-bold text-[11px] uppercase tracking-widest group/metric"
                    >
                      <span className="material-symbols-outlined text-lg transition-transform group-hover/metric:scale-125">
                        {m.icon}
                      </span>
                      {m.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex flex-col gap-8 h-full">
              {item.tech && (
                <div className="space-y-4">
                  <h3 className="text-on-surface font-bold flex items-center gap-2 text-sm uppercase tracking-wider font-headline">
                    <span className="material-symbols-outlined text-primary text-base">
                      psychology
                    </span>
                    Core Competencies
                  </h3>
                  <ul
                    className="flex flex-wrap gap-2"
                    aria-label="Core Competencies List"
                  >
                    {item.tech.map((t) => (
                      <li key={t}>
                        <Badge
                          variant={
                            t === "System Design" ? "secondary" : "surface"
                          }
                        >
                          {t}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.image && (
                <div className="rounded-xl overflow-hidden aspect-video relative group/img mt-auto shadow-2xl border border-white/5 bg-surface-container">
                  <Image
                    src={item.image}
                    fill
                    className="object-cover grayscale opacity-40 group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-700 scale-105 group-hover/img:scale-100"
                    alt={`Contextual laboratory or development space for ${item.company}`}
                  />
                </div>
              )}

              {item.visual &&
                item.visual.map((v, i) => (
                  <div
                    key={i}
                    className="mt-auto flex items-center justify-center p-12 rounded-2xl bg-linear-to-br border border-white/5 relative overflow-hidden group/viz h-full min-h-[160px]"
                    aria-hidden="true"
                  >
                    <div
                      className={cn(
                        "absolute inset-0 bg-linear-to-br opacity-50",
                        v.color,
                      )}
                    />
                    <span
                      className={cn(
                        "material-symbols-outlined text-8xl relative z-10 transition-all duration-700 group-hover/viz:scale-110 group-hover/viz:rotate-6",
                        v.iconColor,
                      )}
                    >
                      {v.icon}
                    </span>
                  </div>
                ))}

              {item.stats && (
                <ul
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto"
                  aria-label="Professional Statistics"
                >
                  {item.stats.map((s) => (
                    <li key={s.label}>
                      <GlassCard
                        variant="medium"
                        className="p-6 flex flex-col gap-2 group/stat h-full"
                      >
                        <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-[0.2em] group-hover/stat:text-primary transition-colors">
                          {s.label}
                        </span>
                        <span className="text-2xl font-headline font-bold text-on-surface">
                          {s.value}
                        </span>
                      </GlassCard>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </GlassCard>
      </div>
    </li>
  );
}
