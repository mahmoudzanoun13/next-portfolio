import { cn } from "@/lib/utils";
import { CORE_TECHS } from "@/constants/portfolio";
import { Badge } from "@/components/ui/badge";

export function HeroTechStack() {
  return (
    <div className="pt-12 space-y-4">
      <h2 className="text-xs uppercase tracking-[0.2em] text-outline font-bold">
        Core Technologies
      </h2>
      <div
        className="flex flex-wrap gap-3"
        role="list"
        aria-label="Core Technology Labels"
      >
        {CORE_TECHS.map((tech) => (
          <Badge
            key={tech.label}
            variant={tech.priority ? "secondary" : "surface"}
            size="md"
            className={cn(
              "px-4 py-2",
              tech.priority
                ? "bg-secondary-container/40 hover:bg-secondary-container/60"
                : "hover:bg-surface-container-high",
            )}
            role="listitem"
          >
            {tech.label}
          </Badge>
        ))}
      </div>
    </div>
  );
}
