import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants/navigation";
import { Section } from "@/components/ui/section";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto py-16 md:py-24 border-t border-white/5 overflow-hidden">
      {" "}
      {/* Background decoration */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] -z-10"
        aria-hidden="true"
      />
      <Section className="flex flex-col md:flex-row justify-between items-center gap-24 md:gap-12">
        {/* Left: Brand Identity */}
        <div className="flex flex-col items-center md:items-start gap-8 md:gap-4 text-center md:text-left">
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none rounded-lg"
            aria-label="Mahmoud Zanoun - Home"
          >
            <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-white/10 shadow-lg bg-surface-container">
              <Image
                src="/assets/logo.png"
                alt="M monogram logo"
                fill
                className="object-cover scale-150 group-hover:scale-125 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-headline font-black text-[#ba9eff] tracking-tighter leading-none">
                MAHMOUD
              </span>
              <span className="text-[11px] font-headline font-bold text-on-surface-variant tracking-[0.25em] leading-none opacity-90 uppercase mt-0.5">
                ZANOUN
              </span>
            </div>
          </Link>
          <p className="max-w-xs text-on-surface-variant text-sm font-light leading-relaxed">
            Architecting digital excellence with precision and purpose. Focused
            on building the future of the web.
          </p>
        </div>

        {/* Center: Social Ecosystem */}
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 my-8 lg:my-0">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-headline font-bold uppercase tracking-[0.2em] text-on-surface-variant hover:text-secondary transition-all duration-300 focus:outline-none"
                aria-label={`Visit my ${link.label} (opens in new tab)`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Legal/Copy */}
        <div className="flex flex-col items-center md:items-end gap-6 md:gap-3 text-center md:text-right">
          <p className="text-sm text-on-surface font-semibold tracking-wide">
            &copy; {currentYear} • Mahmoud Zanoun Portfolio
          </p>
          <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">
            <span>Crafted with Precision</span>
            <span
              className="w-1 h-1 rounded-full bg-primary animate-pulse"
              aria-hidden="true"
            ></span>
            <span>Ashmoun, Egypt</span>
          </div>
        </div>
      </Section>
      {/* Bottom accent line */}
      <div
        className="max-w-7xl mx-auto mt-16 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"
        aria-hidden="true"
      ></div>
    </footer>
  );
}
