import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { getTranslations } from "next-intl/server";

export async function HeroVisual() {
  const t = await getTranslations("Hero");

  return (
    <div className="lg:col-span-12 xl:col-span-5 relative" aria-hidden="true">
      <div className="relative w-full aspect-square max-w-[500px] mx-auto">
        {/* Abstract Tech Visual */}
        <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-secondary/20 rounded-3xl rotate-6 animate-pulse"></div>

        <GlassCard
          variant="medium"
          withHover={false}
          className="absolute inset-0 overflow-hidden p-8"
        >
          <div className="w-full h-full relative overflow-hidden rounded-xl bg-surface-container-lowest">
            <Image
              alt="High-tech interface representation showcase"
              className="w-full h-full object-cover opacity-60"
              src="/assets/hero-visual.png"
              fill
              sizes="(max-width: 1280px) 100vw, 500px"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest via-transparent to-transparent"></div>

            {/* Floating Code Snippet Card */}
            <CodeSnippetCard />
          </div>
        </GlassCard>
      </div>

      {/* PWA/Install Hint */}
      <InstallHint title={t("install_web_app")} desc={t("install_desc")} />
    </div>
  );
}

function CodeSnippetCard() {
  return (
    <GlassCard
      variant="medium"
      className="absolute bottom-6 left-6 right-6 p-4 rounded-xl border border-primary/20 hover:-translate-y-1 z-10 text-left"
      dir="ltr"
    >
      <div className="flex gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-error-dim"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#f9bc2d]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-secondary-dim"></div>
      </div>
      <div className="space-y-2 font-mono text-[10px] md:text-xs text-on-surface-variant">
        <div className="flex gap-2">
          <span className="text-primary">const</span>
          <span className="text-secondary">developer</span> = {"{"}
        </div>
        <div className="pl-4">
          name: <span className="text-tertiary">{'"Mahmoud Zanoun"'}</span>,
        </div>
        <div className="pl-4">
          role: <span className="text-tertiary">{'"Senior Frontend"'}</span>,
        </div>
        <div className="pl-4">
          experience: <span className="text-tertiary">{'"3+ Years"'}</span>
        </div>
        <div>{"};"}</div>
      </div>
    </GlassCard>
  );
}

function InstallHint({ title, desc }: { title: string; desc: string }) {
  return (
    <GlassCard
      variant="medium"
      className="mt-8 p-4 flex items-center justify-between group cursor-pointer hover:border-secondary/40"
      role="button"
      aria-label="Install as Web App for offline experience"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
          <span className="material-symbols-outlined">install_desktop</span>
        </div>
        <div>
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
