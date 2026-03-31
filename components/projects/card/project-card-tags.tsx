import { cn } from "@/lib/utils";

interface ProjectCardTagsProps {
  tags: string[];
  accent: "primary" | "secondary" | "tertiary";
}

export function ProjectCardTags({ tags, accent }: ProjectCardTagsProps) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Project Technologies">
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
  );
}
