"use client";

import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants/navigation";
import { useTranslations, useLocale } from "next-intl";
import { LanguageSwitcher } from "../language-switcher";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <div
      className={cn(
        "fixed inset-0 bg-[#0f072e] lg:hidden transition-all duration-500 ease-in-out z-99 overflow-y-auto px-6 pt-32 pb-12",
        isOpen
          ? "translate-x-0 opacity-100 pointer-events-auto"
          : cn(
              isRtl ? "-translate-x-full" : "translate-x-full",
              "opacity-0 pointer-events-none",
            ),
      )}
    >
      <div className="flex flex-col gap-10">
        <ul className="flex flex-col gap-6">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                style={{ transitionDelay: `${i * 75}ms` }}
                className={cn(
                  "text-5xl font-headline font-bold transition-all transform block",
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0",
                  pathname === link.href
                    ? "text-primary italic"
                    : "text-white/70 hover:text-white",
                )}
              >
                {t(link.label.toLowerCase())}
              </Link>
            </li>
          ))}
        </ul>

        {/* Localized Options */}
        <div className="mt-4 border-t border-white/10 pt-10 flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-black">
              {t("context_language")}
            </span>
            <div className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 shadow-xl glass-panel">
              <span className="text-xs uppercase tracking-[0.2em] opacity-40 font-bold whitespace-nowrap">
                {t("global_region")}
              </span>
              <LanguageSwitcher />
            </div>
          </div>

          <Button
            size="xl"
            className="w-full py-7 text-lg group-hover:shadow-[0_0_40px_-5px_rgba(186,158,255,0.4)]"
            icon="download"
            variant="primary"
          >
            {t("download_app")}
          </Button>
        </div>
      </div>
    </div>
  );
}
