import React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  innerClassName?: string;
  withPadding?: boolean;
};

const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1440px]",
  full: "max-w-none",
};

export function Section({
  className,
  innerClassName,
  containerSize = "lg",
  withPadding = true,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("relative z-10 w-full", className)} {...props}>
      <div
        className={cn(
          "mx-auto w-full",
          withPadding && "px-6",
          containerSizes[containerSize],
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
