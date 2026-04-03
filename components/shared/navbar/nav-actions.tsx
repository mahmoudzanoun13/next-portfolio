"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "../language-switcher";
import { useTranslations } from "next-intl";

interface NavActionsProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  className?: string;
}

export function NavActions({
  isMenuOpen,
  toggleMenu,
  className,
}: NavActionsProps) {
  const t = useTranslations("Navigation");

  return (
    <div
      className={cn("flex items-center justify-end gap-3 md:gap-5", className)}
    >
      <div className="hidden lg:flex items-center gap-10">
        <LanguageSwitcher />
        <Button size="md" variant="primary" icon="download">
          {t("download_app")}
        </Button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 focus:outline-none group relative z-50 rounded-full hover:bg-white/5 transition-colors"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <div
          className={cn(
            "w-6 h-[2px] bg-white transition-all duration-300 rounded-full",
            isMenuOpen ? "rotate-45 translate-y-[4px]" : "",
          )}
        />
        <div
          className={cn(
            "w-6 h-[2px] bg-white transition-all duration-300 rounded-full",
            isMenuOpen ? "opacity-0 scale-x-0" : "",
          )}
        />
        <div
          className={cn(
            "w-6 h-[2px] bg-white transition-all duration-300 rounded-full",
            isMenuOpen ? "-rotate-45 -translate-y-[12px]" : "",
          )}
        />
      </button>
    </div>
  );
}
