import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ContactInfoGrid } from "@/components/contact/contact-info-grid";
import { PwaInstallCard } from "@/components/contact/pwa-install-card";
import { ContactForm } from "@/components/contact/contact-form";
import { getTranslations } from "next-intl/server";
import { getMetadataConfig } from "@/constants/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Metadata");

  return {
    ...getMetadataConfig(t, locale, "/contact"),
    title: t("title_contact"),
  };
}

export default async function ContactPage() {
  const t = await getTranslations("Contact");
  return (
    <main className="pb-24 max-w-7xl mx-auto min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 hero-gradient pointer-events-none -z-10 opacity-30"></div>
      <Section>
        {/* Section Header */}
        <PageHeader
          tag={t("tag")}
          title={
            <>
              {t.rich("title", {
                italic: (chunks) => (
                  <span className="italic font-normal">{chunks}</span>
                ),
              })}
            </>
          }
          subtitle={t("subtitle")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-start relative z-10">
          <div className="flex flex-col gap-10">
            <ContactInfoGrid />
            <PwaInstallCard />
          </div>
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
