import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  features?: string[];
  image?: string;
  accent?: "primary" | "secondary" | "tertiary";
  priority?: boolean;
}

import { ProjectCardTags } from "./card/project-card-tags";
import { ProjectCardFeatures } from "./card/project-card-features";
import { ProjectCardAction } from "./card/project-card-action";
import { ProjectCardImage } from "./card/project-card-image";

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  features,
  image,
  accent = "primary",
  priority = false,
}: ProjectCardProps) {
  const accentClasses = {
    primary:
      "border-primary/20 group-hover:border-primary group-hover:shadow-[0_0_50px_-10px_rgba(186,158,255,0.3)]",
    secondary:
      "border-secondary/20 group-hover:border-secondary group-hover:shadow-[0_0_50px_-10px_rgba(83,221,252,0.3)]",
    tertiary:
      "border-tertiary/20 group-hover:border-tertiary group-hover:shadow-[0_0_50px_-10px_rgba(255,134,195,0.3)]",
  };

  const accentText = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  };

  return (
    <article
      className="group relative"
      aria-labelledby={`project-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div
        className={cn(
          "relative glass-panel rounded-3xl border p-6 md:p-10 transition-all duration-700 overflow-hidden flex flex-col xl:flex-row gap-8 xl:gap-12 shadow-2xl shadow-black/40",
          accentClasses[accent],
        )}
      >
        <div
          className={cn(
            "absolute -top-24 -right-24 w-60 h-60 blur-[100px] opacity-20 pointer-events-none transition-opacity duration-700 group-hover:opacity-40",
            accent === "primary"
              ? "bg-primary"
              : accent === "secondary"
                ? "bg-secondary"
                : "bg-tertiary",
          )}
          aria-hidden="true"
        />

        <div className="flex-1 flex flex-col gap-8 relative z-10">
          <div className="flex flex-col gap-5">
            <ProjectCardTags tags={tags} accent={accent} />
            <h2
              id={`project-${title.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-3xl md:text-5xl font-headline text-on-surface leading-tight tracking-tight mt-2 italic font-normal"
            >
              {title}
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-lg font-light max-w-lg">
              {description}
            </p>
          </div>

          {features && (
            <ProjectCardFeatures
              features={features}
              accentText={accentText[accent]}
            />
          )}

          <ProjectCardAction
            title={title}
            link={link}
            accent={accent}
            accentText={accentText[accent]}
          />
        </div>

        {image && (
          <ProjectCardImage image={image} title={title} priority={priority} />
        )}
      </div>
    </article>
  );
}
