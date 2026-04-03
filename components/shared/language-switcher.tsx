"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useTransition } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className={cn(
        "cursor-pointer flex items-center p-0.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all group",
        isPending && "opacity-50 pointer-events-none",
      )}
      aria-label={locale === "en" ? "تبديل إلى العربية" : "Switch to English"}
      title={locale === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <div
        className={cn(
          "px-2.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300",
          locale === "en"
            ? "bg-primary/20 text-primary shadow-sm shadow-primary/20"
            : "text-slate-400 group-hover:text-white",
        )}
      >
        EN
      </div>
      <div
        className={cn(
          "px-2.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300",
          locale === "ar"
            ? "bg-primary/20 text-primary shadow-sm shadow-primary/20"
            : "text-slate-400 group-hover:text-white",
        )}
      >
        AR
      </div>
    </button>
  );
}
