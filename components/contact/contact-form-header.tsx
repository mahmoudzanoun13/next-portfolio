import { useTranslations } from "next-intl";

export function ContactFormHeader() {
  const t = useTranslations("Contact.form");
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-headline font-bold text-on-surface flex items-center gap-3">
        <span className="w-8 h-px bg-primary/30" />
        {t("header_title")}
      </h2>
      <p className="text-sm text-on-surface-variant max-w-md">
        {t("header_subtitle")}
      </p>
    </div>
  );
}
