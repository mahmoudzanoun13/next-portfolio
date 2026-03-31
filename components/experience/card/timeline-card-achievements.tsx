import { TimelineItem } from "@/types/portfolio";

interface TimelineCardAchievementsProps {
  item: TimelineItem;
}

export function TimelineCardAchievements({
  item,
}: TimelineCardAchievementsProps) {
  return (
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
  );
}
