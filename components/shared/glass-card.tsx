import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className,
  hoverEffect = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass border border-primary/10 rounded-2xl overflow-hidden transition-all duration-300",
        hoverEffect &&
          "hover:border-primary/30 hover:shadow-[0_0_40px_-15px_rgba(186,158,255,0.1)] hover:bg-surface-variant/50",
        className,
      )}
    >
      {children}
    </div>
  );
}
