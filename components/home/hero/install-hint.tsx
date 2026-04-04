"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { usePwa } from "@/hooks/use-pwa";

interface InstallHintProps {
  title: string;
  desc: string;
}

export function InstallHint({ title, desc }: InstallHintProps) {
  const { install, isInstallable } = usePwa();

  if (!isInstallable) return null;

  return (
    <GlassCard
      variant="medium"
      className="mt-8 p-4 flex items-center justify-between group cursor-pointer hover:border-secondary/40 transition-all duration-300"
      role="button"
      onClick={install}
      aria-label="Install as Web App for offline experience"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
          <span className="material-symbols-outlined">install_desktop</span>
        </div>
        <div className="text-left">
          <h4 className="text-sm font-bold text-on-surface">{title}</h4>
          <p className="text-xs text-on-surface-variant">{desc}</p>
        </div>
      </div>
      <span
        className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors"
        aria-hidden="true"
      >
        download
      </span>
    </GlassCard>
  );
}
