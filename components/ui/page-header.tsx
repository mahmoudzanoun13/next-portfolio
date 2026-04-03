import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";

type PageHeaderProps = Omit<React.HTMLAttributes<HTMLElement>, "title"> & {
  tag?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  alignment?: "start" | "center";
};

export function PageHeader({
  className,
  tag,
  title,
  subtitle,
  alignment = "start",
  ...props
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "mb-24 relative z-10 w-full flex flex-col",
        alignment === "center"
          ? "text-center items-center"
          : "text-start items-start",
        className,
      )}
      {...props}
    >
      {tag && (
        <Badge
          variant="surface"
          size="sm"
          className="mb-6 px-3 py-1 bg-surface-container shadow-inner border border-white/5"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(186,158,255,0.8)]"></span>
            <span className="opacity-80">{tag}</span>
          </span>
        </Badge>
      )}
      <h1 className="text-6xl md:text-[80px] font-headline font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary leading-[1.1]">
        {title}
      </h1>
      {subtitle && (
        <p
          className={cn(
            "text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed font-light mx-auto",
            alignment === "start" ? "md:mx-0" : "",
          )}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
