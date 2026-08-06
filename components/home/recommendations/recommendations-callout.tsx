"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function RecommendationsCallout() {
  const t = useTranslations("Hero.recommendations");

  return (
    <div className="mb-16 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 bg-surface-container/60 shadow-xl max-w-full">
      <h3 className="font-headline font-bold text-base sm:text-lg text-on-surface mb-1">
        {t("profile_box_title")}
      </h3>
      <p className="text-xs sm:text-sm text-on-surface-variant mb-6">
        {t("profile_box_desc")}
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="https://www.linkedin.com/in/mahmoud-zanoun-517b14222"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-surface-variant/80 hover:bg-surface-variant border border-white/10 text-on-surface font-semibold text-xs sm:text-sm transition-all shadow-xs group"
        >
          <svg
            className="w-4 h-4 fill-current text-secondary group-hover:scale-110 transition-transform"
            viewBox="0 0 24 24"
          >
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
          <span>{t("view_profile_btn")}</span>
          <span aria-hidden="true">↗</span>
        </a>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-bold text-xs sm:text-sm hover:bg-primary/90 transition-all shadow-md"
        >
          <span>{t("contact_me_btn")}</span>
        </Link>
      </div>
    </div>
  );
}
