import { TimelineItem } from "@/types/portfolio";

interface TimelineCardHeaderProps {
  item: TimelineItem;
  index: number;
}

export function TimelineCardHeader({ item, index }: TimelineCardHeaderProps) {
  return (
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
  );
}
