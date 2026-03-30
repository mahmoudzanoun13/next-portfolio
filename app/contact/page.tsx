import { CONTACT_INFO } from "@/constants/portfolio";
import { SOCIAL_LINKS } from "@/constants/navigation";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

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
          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            {CONTACT_INFO.map((info) => (
              <a
                key={info.label}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group p-6 md:p-8 rounded-3xl bg-surface-container-low border border-white/5 hover:border-primary/20 transition-all duration-500 flex items-center justify-between shadow-xl"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-primary border border-white/5 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
                    <span className="material-symbols-outlined text-3xl">
                      {info.icon}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-[0.4em] mb-1">
                      {info.label}
                    </span>
                    <span className="text-xl md:text-2xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors break-all md:break-normal">
                      {info.value}
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all duration-500 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                  arrow_forward
                </span>
              </a>
            ))}

            {/* Social Connect */}
            <ul className="grid grid-cols-2 gap-6 mt-4">
              {SOCIAL_LINKS.filter(
                (social) => social.label !== "Source Code",
              ).map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl bg-surface-container/40 border border-white/5 hover:border-secondary/30 transition-all flex flex-col gap-4 group h-full"
                  >
                    <span className="material-symbols-outlined text-2xl text-secondary group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-secondary">
                      {social.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Detail / PWA */}
          <div className="flex flex-col gap-10 h-full">
            <GlassCard
              variant="medium"
              className="p-6 md:p-10 flex flex-col gap-8 rounded-[32px] md:rounded-[40px] relative overflow-hidden group h-full justify-between"
            >
              <div className="absolute top-0 right-0 p-8 text-secondary/10 group-hover:text-secondary/20 transition-colors pointer-events-none">
                <span className="material-symbols-outlined text-9xl">
                  install_desktop
                </span>
              </div>

              <div className="flex flex-col gap-4 relative z-10">
                <h2 className="text-3xl font-headline font-bold text-on-surface">
                  Experience Offline
                </h2>
                <p className="text-on-surface-variant font-light leading-relaxed max-w-sm">
                  This portfolio is a fully functional{" "}
                  <span className="text-on-surface font-semibold">
                    Progressive Web App
                  </span>
                  . Install it for a native app-like experience and seamless
                  offline access.
                </p>
              </div>

              <div className="flex flex-col gap-6 mt-6 relative z-10">
                <div className="flex flex-col gap-3">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
                    Desktop Guide
                  </h3>
                  <p className="text-xs text-on-surface-variant font-medium">
                    Click the install icon in your address bar or use the
                    browser menu.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-secondary">
                    Mobile Guide
                  </h3>
                  <p className="text-xs text-on-surface-variant font-medium">
                    Tap &apos;Add to Home Screen&apos; from your browser&apos;s
                    sharing menu on iOS or Android.
                  </p>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                icon="download"
                className="mt-8 shadow-[0_0_30px_-10px_rgba(186,158,255,0.4)]"
              >
                Install Web App
              </Button>
            </GlassCard>
          </div>
        </div>
      </Section>
    </main>
  );
}
