import { cn } from "@/lib/utils";

interface ProjectCardFeaturesProps {
  features: string[];
  accentText: string;
}

export function ProjectCardFeatures({
  features,
  accentText,
}: ProjectCardFeaturesProps) {
  return (
    <div
      className="flex flex-col gap-4 mt-4"
      role="list"
      aria-label="Key Features"
    >
      {features.map((feature, i) => (
        <div
          key={i}
          className="flex items-center gap-3 text-[13px] font-medium text-on-surface-variant group/feat"
          role="listitem"
        >
          <span
            className={cn(
              "material-symbols-outlined text-base transition-transform group-hover/feat:scale-125",
              accentText,
            )}
            aria-hidden="true"
          >
            verified
          </span>
          {feature}
        </div>
      ))}
    </div>
  );
}
