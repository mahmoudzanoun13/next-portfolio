"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { useTranslations } from "next-intl";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const t = useTranslations("Error");

  return (
    <main className="relative min-h-screen tech-grid overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 hero-gradient pointer-events-none -z-10 opacity-40" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-error/5 rounded-full blur-[150px] -z-10"
        aria-hidden="true"
      />

      <Section
        className="min-h-screen flex flex-col justify-center"
        innerClassName="flex flex-col items-center justify-center text-center gap-12"
      >
        <div className="relative group">
          <div className="absolute -inset-20 bg-error/10 blur-[100px] rounded-full group-hover:bg-error/20 transition-all pointer-events-none" />
          <span className="material-symbols-outlined text-[100px] md:text-[120px] text-error animate-pulse relative z-10 transition-transform duration-700 group-hover:scale-110">
            report
          </span>
        </div>

        <div className="space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-on-surface tracking-tighter">
            {t.rich("title", {
              highlight: (chunks) => (
                <span className="text-error italic">{chunks}</span>
              ),
            })}
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto">
            {t("description")}
            {error.digest && (
              <span className="block mt-4 text-xs font-mono opacity-50 mx-auto">
                {t("hash")} {error.digest}
              </span>
            )}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 relative z-10 mt-12">
          <Button
            variant="primary"
            size="xl"
            onClick={() => reset()}
            icon="refresh"
          >
            {t("btn_recovery")}
          </Button>
          <Button as="a" href="/" variant="outline" size="xl" icon="home">
            {t("btn_exit")}
          </Button>
        </div>
      </Section>
    </main>
  );
}
