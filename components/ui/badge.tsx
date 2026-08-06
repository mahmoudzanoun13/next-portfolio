import React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "primary" | "secondary" | "tertiary" | "surface";
  size?: "sm" | "md";
};

const variants = {
  primary:
    "bg-primary-container text-on-primary-container font-extrabold border border-primary/20 shadow-[0_0_8px_rgba(186,158,255,0.2)]",
  secondary:
    "bg-secondary-container text-on-secondary-container font-extrabold border border-secondary/20 shadow-[0_0_8px_rgba(83,221,252,0.2)]",
  tertiary:
    "bg-tertiary-container text-on-tertiary-container font-extrabold border border-tertiary/20 shadow-[0_0_8px_rgba(255,183,181,0.2)]",
  surface: "bg-surface-variant text-on-surface-variant border border-white/10",
};

const sizes = {
  sm: "px-2.5 py-1 text-[9px] rounded-md tracking-widest uppercase font-black leading-none",
  md: "px-3.5 py-1.5 text-[11px] rounded-full tracking-wider font-bold leading-normal",
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
        "inline-flex items-center justify-start max-w-full min-w-0 font-headline transition-all select-none",
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
