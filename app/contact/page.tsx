import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { ContactInfoGrid } from "@/components/contact/contact-info-grid";
import { PwaInstallCard } from "@/components/contact/pwa-install-card";

export default function ContactPage() {
  return (
    <main className="pb-24 max-w-7xl mx-auto min-h-screen relative overflow-hidden">
      {" "}
      {/* Background decoration */}
      <div className="fixed inset-0 hero-gradient pointer-events-none -z-10 opacity-30"></div>
      <Section>
        {/* Section Header */}
        <PageHeader
          tag="Get In Touch"
          title={
            <>
              Let&apos;s Build Something{" "}
              <span className="italic font-normal">Extraordinary</span>
            </>
          }
          subtitle="Whether you're looking to architect a new digital product or transform an existing ecosystem, I'm ready to collaborate."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
          <ContactInfoGrid />
          <div className="flex flex-col gap-10 h-full">
            <PwaInstallCard />
          </div>
        </div>
      </Section>
    </main>
  );
}
