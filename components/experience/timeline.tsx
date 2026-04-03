import { getPortfolioData } from "@/constants/portfolio";
import { GlassCard } from "@/components/ui/glass-card";
import { getLocale } from "next-intl/server";
import { TimelineItem } from "@/types/portfolio";
import { TimelineCardHeader } from "./card/timeline-card-header";
import { TimelineCardAchievements } from "./card/timeline-card-achievements";
import { TimelineCardAssets } from "./card/timeline-card-assets";

export default async function ExperienceTimeline() {
  const locale = await getLocale();
  const portfolioData = getPortfolioData(locale);
  return (
    <ul
      className="relative before:absolute before:inset-s-5 md:before:inset-s-5 before:top-0 before:bottom-0 before:w-0.5 before:bg-linear-to-b before:from-primary/10 before:via-primary before:to-secondary before:opacity-20 ltr:-translate-x-px rtl:translate-x-px"
      aria-label="Career and Education Timeline"
    >
      {portfolioData.experience.map((item, index) => (
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
      className="relative ps-12 md:ps-16 mb-20 md:mb-24 last:mb-0 group/item"
      aria-labelledby={`item-${index}`}
    >
      {/* Dot Icon */}
      <div
        className="absolute inset-s-0 top-0 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center z-10 border-4 border-background group-hover/item:bg-primary transition-all duration-300"
        aria-hidden="true"
      >
        <span className="material-symbols-outlined text-primary group-hover/item:text-on-primary transition-colors text-xl">
          {item.icon}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <TimelineCardHeader item={item} index={index} />

        <GlassCard
          variant="low"
          className="lg:col-span-9 p-6 md:p-8 border-s-4 md:border-s-[6px] border-primary"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <TimelineCardAchievements item={item} />
            <TimelineCardAssets item={item} />
          </div>
        </GlassCard>
      </div>
    </li>
  );
}
