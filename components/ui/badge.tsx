import React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "primary" | "secondary" | "tertiary" | "surface";
  size?: "sm" | "md";
};

const variants = {
  primary:
    "bg-primary-container text-primary border border-primary/10 shadow-[0_0_8px_rgba(186,158,255,0.2)]",
  secondary:
    "bg-secondary-container text-secondary border border-secondary/10 shadow-[0_0_8px_rgba(83,221,252,0.2)]",
  tertiary:
    "bg-tertiary-container text-tertiary border border-tertiary/10 shadow-[0_0_8px_rgba(255,183,181,0.2)]",
  surface: "bg-surface-variant text-on-surface-variant border border-white/5",
};

const sizes = {
  sm: "px-2 py-0.5 text-[9px] rounded-md tracking-widest uppercase font-black",
  md: "px-4 py-1.5 text-[11px] rounded-full tracking-wider font-bold",
};

export function Badge({
  className,
  variant = "surface",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center font-headline transition-all",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
