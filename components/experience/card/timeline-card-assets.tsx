import { cn } from "@/lib/utils";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { TimelineItem } from "@/types/portfolio";

interface TimelineCardAssetsProps {
  item: TimelineItem;
}

export function TimelineCardAssets({ item }: TimelineCardAssetsProps) {
  return (
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
                  variant={t === "System Design" ? "secondary" : "surface"}
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
            sizes="(max-width: 1024px) 100vw, 400px"
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
  );
}
