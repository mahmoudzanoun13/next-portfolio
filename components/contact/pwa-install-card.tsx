import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

export function PwaInstallCard() {
  return (
    <GlassCard
      variant="medium"
      className="p-6 md:p-10 flex flex-col gap-8 rounded-[32px] md:rounded-[40px] relative overflow-hidden group h-full justify-between"
    >
      <div className="absolute top-0 right-0 p-8 text-secondary/10 group-hover:text-secondary/20 transition-colors pointer-events-none">
        <span className="material-symbols-outlined text-9xl">
          install_desktop
        </span>
      </div>

      <div className="flex flex-col gap-4 relative z-10">
        <h2 className="text-3xl font-headline font-bold text-on-surface">
          Experience Offline
        </h2>
        <p className="text-on-surface-variant font-light leading-relaxed max-w-sm">
          This portfolio is a fully functional{" "}
          <span className="text-on-surface font-semibold">
            Progressive Web App
          </span>
          . Install it for a native app-like experience and seamless offline
          access.
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-6 relative z-10">
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
            Desktop Guide
          </h3>
          <p className="text-xs text-on-surface-variant font-medium">
            Click the install icon in your address bar or use the browser menu.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-secondary">
            Mobile Guide
          </h3>
          <p className="text-xs text-on-surface-variant font-medium">
            Tap &apos;Add to Home Screen&apos; from your browser&apos;s sharing
            menu on iOS or Android.
          </p>
        </div>
      </div>

      <Button
        variant="primary"
        size="lg"
        icon="download"
        className="mt-8 shadow-[0_0_30px_-10px_rgba(186,158,255,0.4)]"
      >
        Install Web App
      </Button>
    </GlassCard>
  );
}
