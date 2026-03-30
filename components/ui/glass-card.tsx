import React from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "low" | "medium" | "high";
  withHover?: boolean;
  withBorder?: boolean;
};

const variants = {
  low: "bg-surface-container-low/40",
  medium: "bg-surface-container/60",
  high: "bg-surface-container-high/80",
};

export function GlassCard({
  className,
  variant = "medium",
  withHover = true,
  withBorder = true,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl backdrop-blur-3xl transition-all duration-300",
        variants[variant],
        withBorder && "border border-white/5",
        withHover &&
          "hover:bg-surface-container hover:shadow-2xl hover:shadow-black/20 hover:translate-y-[-4px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
