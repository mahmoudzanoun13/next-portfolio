import { cn } from "@/lib/utils";

interface ProjectCardActionProps {
  title: string;
  link: string;
  accent: "primary" | "secondary" | "tertiary";
  accentText: string;
}

export function ProjectCardAction({
  title,
  link,
  accent,
  accentText,
}: ProjectCardActionProps) {
  return (
    <div className="mt-auto pt-10">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] transition-all group-hover:gap-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background rounded-lg",
          accentText,
          accent === "primary"
            ? "focus:ring-primary"
            : accent === "secondary"
              ? "focus:ring-secondary"
              : "focus:ring-tertiary",
        )}
        aria-label={`Explore the ${title} case study (opens in new tab)`}
      >
        Explore Case Study
        <span className="material-symbols-outlined text-lg" aria-hidden="true">
          arrow_forward
        </span>
      </a>
    </div>
  );
}
