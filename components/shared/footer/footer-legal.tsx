import { getTranslations } from "next-intl/server";

export async function FooterLegal() {
  const currentYear = new Date().getFullYear();
  const t = await getTranslations("Footer");

  return (
    <div className="flex flex-col items-center md:items-end gap-6 md:gap-3 text-center md:text-end">
      <p
        className="text-sm text-on-surface font-semibold tracking-wide"
        suppressHydrationWarning
        dir="ltr"
      >
        &copy; {currentYear} • Mahmoud Zanoun Portfolio
      </p>
      <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">
        <span>{t("crafted_with_precision")}</span>
        <span
          className="w-1 h-1 rounded-full bg-primary animate-pulse"
          aria-hidden="true"
        ></span>
        <span>{t("location")}</span>
      </div>
    </div>
  );
}
