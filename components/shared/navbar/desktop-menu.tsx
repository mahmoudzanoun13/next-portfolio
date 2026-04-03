"use client";

import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants/navigation";
import { useTranslations } from "next-intl";

interface DesktopMenuProps {
  pathname: string;
  className?: string;
}

export function DesktopMenu({ pathname, className }: DesktopMenuProps) {
  const t = useTranslations("Navigation");

  return (
    <div className={cn("hidden lg:flex flex-1 justify-center", className)}>
      <div className="flex items-center gap-10 font-headline font-bold tracking-tight">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "transition-all duration-300 text-sm focus:outline-none relative group/link px-1",
              pathname === link.href
                ? "text-[#ba9eff]"
                : "text-slate-400 hover:text-white",
            )}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {/* Using the label as a key for translation - we need to match current keys in JSON */}
            {t(link.label.toLowerCase())}
            <span
              className={cn(
                "absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300",
                pathname === link.href
                  ? "w-full"
                  : "w-0 group-hover/link:w-full",
              )}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
