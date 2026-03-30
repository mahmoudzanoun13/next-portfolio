import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  features?: string[];
  image?: string;
  accent?: "primary" | "secondary" | "tertiary";
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  features,
  image,
  accent = "primary",
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
        {/* Abstract Background Decoration */}
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

        {/* Content Side */}
        <div className="flex-1 flex flex-col gap-8 relative z-10">
          <div className="flex flex-col gap-5">
            <ul
              className="flex flex-wrap gap-2"
              aria-label="Project Technologies"
            >
              {tags.map((tag) => (
                <li
                  key={tag}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase border",
                    accent === "secondary"
                      ? "border-secondary/10 bg-secondary/10 text-secondary"
                      : "border-white/5 bg-white/5 text-on-surface-variant",
                  )}
                >
                  {tag}
                </li>
              ))}
            </ul>
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

          {/* Features List */}
          {features && (
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
                      accentText[accent],
                    )}
                    aria-hidden="true"
                  >
                    verified
                  </span>
                  {feature}
                </div>
              ))}
            </div>
          )}

          {/* Action Button */}
          <div className="mt-auto pt-10">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] transition-all group-hover:gap-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background rounded-lg",
                accentText[accent],
                accent === "primary"
                  ? "focus:ring-primary"
                  : accent === "secondary"
                    ? "focus:ring-secondary"
                    : "focus:ring-tertiary",
              )}
              aria-label={`Explore the ${title} case study (opens in new tab)`}
            >
              Explore Case Study
              <span
                className="material-symbols-outlined text-lg"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        {/* Image Side */}
        {image && (
          <div className="xl:w-[450px] relative aspect-video rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-700 self-center">
            <Image
              src={image}
              alt={`Live preview screenshot of ${title} project interface`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
            />
            {/* Image Overlay Gradient */}
            <div
              className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </article>
  );
}
