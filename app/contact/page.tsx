import GlassCard from "@/components/shared/glass-card";

const CONTACT_INFO = [
  {
    label: "Email",
    value: "mahmoudzanoun35@yahoo.com",
    icon: "mail",
    link: "mailto:mahmoudzanoun35@yahoo.com",
  },
  {
    label: "Phone & WhatsApp",
    value: "+201064349707",
    icon: "chat",
    link: "https://wa.me/201064349707",
  },
  {
    label: "Location",
    value: "Ashmoun, Egypt",
    icon: "location_on",
    link: "#",
  },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/mahmoud-zanoun-517b14222",
    label: "LinkedIn",
    icon: "work",
  },
  { href: "https://github.com/mahmoudzanoun13", label: "GitHub", icon: "code" },
];

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 hero-gradient pointer-events-none -z-10 opacity-30"></div>

      {/* Section Header */}
      <header className="mb-24 text-center md:text-left relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container mb-6 border border-white/5 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(83,221,252,0.8)]"></span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant">
            Get In Touch
          </span>
        </div>
        <h1 className="text-6xl md:text-[80px] font-headline font-bold tracking-tighter text-on-surface mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary leading-[1.1]">
          Let&apos;s Build Something{" "}
          <span className="italic font-normal">Extraordinary</span>
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed font-light">
          Whether you&apos;re looking to architect a new digital product or
          transform an existing ecosystem, I&apos;m ready to collaborate.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
        {/* Contact Details */}
        <div className="flex flex-col gap-6">
          {CONTACT_INFO.map((info) => (
            <a
              key={info.label}
              href={info.link}
              target={info.link.startsWith("http") ? "_blank" : undefined}
              rel={
                info.link.startsWith("http") ? "noopener noreferrer" : undefined
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
          <div className="grid grid-cols-2 gap-6 mt-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-surface-container/40 border border-white/5 hover:border-secondary/30 transition-all flex flex-col gap-4 group"
              >
                <span className="material-symbols-outlined text-2xl text-secondary group-hover:scale-110 transition-transform">
                  {social.icon}
                </span>
                <span className="text-sm font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-secondary">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* PWA / Technical Detail */}
        <div className="flex flex-col gap-10 h-full">
          <GlassCard className="p-6 md:p-10 flex flex-col gap-8 bg-surface-container-high/40 border border-white/10 rounded-[32px] md:rounded-[40px] shadow-2xl relative overflow-hidden group h-full justify-between">
            <div className="absolute top-0 right-0 p-8 text-secondary/10 group-hover:text-secondary/20 transition-colors pointer-events-none">
              <span className="material-symbols-outlined text-9xl">
                install_desktop
              </span>
            </div>

            <div className="flex flex-col gap-4 relative z-10">
              <h3 className="text-3xl font-headline font-bold text-on-surface">
                Experience Offline
              </h3>
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
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary">
                  Desktop Guide
                </h4>
                <p className="text-xs text-on-surface-variant font-medium">
                  Click the install icon in your address bar or use the browser
                  menu.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-bold uppercase trackingest text-secondary">
                  Mobile Guide
                </h4>
                <p className="text-xs text-on-surface-variant font-medium">
                  Tap &apos;Add to Home Screen&apos; from your browser&apos;s
                  sharing menu on iOS or Android.
                </p>
              </div>
            </div>

            <button className="mt-8 px-10 py-5 rounded-2xl border border-secondary/20 bg-secondary/10 text-secondary font-bold text-[11px] uppercase tracking-widest hover:bg-secondary/20 transition-all flex items-center justify-center gap-3 active:scale-95 group-hover:shadow-[0_0_30px_-10px_rgba(83,221,252,0.4)]">
              <span className="material-symbols-outlined">download</span>
              Install Web App
            </button>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}
