import Link from "next/link";
import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { cn } from "@/lib/utils";

export async function FooterBrand() {
  const t = await getTranslations("Footer");
  const locale = await getLocale();
  const isRtl = locale === "ar";

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-8 md:gap-4 text-center",
        isRtl ? "md:items-start md:text-right" : "md:items-start md:text-left",
      )}
    >
      <Link
        href="/"
        className="flex items-center gap-3 group focus:outline-none rounded-lg"
        aria-label="Mahmoud Zanoun - Home"
        dir="ltr"
      >
        <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-white/10 shadow-lg bg-surface-container">
          <Image
            src="/assets/logo.png"
            alt="M monogram logo"
            fill
            sizes="(max-width: 768px) 40px, 48px"
            className="object-cover scale-150 group-hover:scale-125 transition-transform duration-700"
          />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-base font-headline font-black text-[#ba9eff] tracking-tighter leading-none">
            MAHMOUD
          </span>
          <span className="text-[11px] font-headline font-bold text-on-surface-variant tracking-[0.25em] leading-none opacity-90 uppercase mt-0.5">
            ZANOUN
          </span>
        </div>
      </Link>
      <p
        className={cn(
          "max-w-xs text-on-surface-variant text-sm font-light leading-relaxed",
          isRtl ? "text-right" : "text-left",
        )}
        dir={isRtl ? "rtl" : "ltr"}
      >
        {t("brand_desc")}
      </p>
    </div>
  );
}
