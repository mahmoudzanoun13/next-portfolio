"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { usePwa } from "@/hooks/use-pwa";

interface PwaInstallClientProps {
  isRtl: boolean;
}

export function PwaInstallClient({ isRtl }: PwaInstallClientProps) {
  const t = useTranslations("Contact.pwa");
  const { install, isInstallable } = usePwa();

  if (!isInstallable) return null;

  return (
    <GlassCard
      variant="medium"
      className="p-6 md:p-10 flex flex-col gap-8 rounded-[32px] md:rounded-[40px] relative overflow-hidden group h-full justify-between"
    >
      <div
        className={cn(
          "absolute top-0 p-8 text-secondary/10 group-hover:text-secondary/20 transition-colors pointer-events-none",
          isRtl ? "left-0" : "right-0",
        )}
      >
        <span className="material-symbols-outlined text-9xl">
          install_desktop
        </span>
      </div>

      <div className="flex flex-col gap-4 relative z-10">
        <h2 className="text-3xl font-headline font-bold text-on-surface">
          {t("title")}
        </h2>
        <p className="text-on-surface-variant font-light leading-relaxed max-w-sm">
          {t.rich("desc", {
            bold: (chunks) => (
              <span className="text-on-surface font-semibold">{chunks}</span>
            ),
          })}
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-6 relative z-10">
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
            {t("desktop_guide")}
          </h3>
          <p className="text-xs text-on-surface-variant font-medium">
            {t("desktop_desc")}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-secondary">
            {t("mobile_guide")}
          </h3>
          <p className="text-xs text-on-surface-variant font-medium">
            {t("mobile_desc")}
          </p>
        </div>
      </div>

      <Button
        variant="primary"
        size="lg"
        icon="download"
        className="mt-8 shadow-[0_0_30px_-10px_rgba(186,158,255,0.4)]"
        onClick={install}
      >
        {t("btn_install")}
      </Button>
    </GlassCard>
  );
}
