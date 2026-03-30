"use client";

import Image from "next/image";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/mahmoud-zanoun-517b14222",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/mahmoudzanoun13",
    label: "GitHub",
  },
  {
    href: "https://github.com/mahmoudzanoun13/next-portfolio",
    label: "Source Code",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-[#0f072e] border-t border-white/5 py-16 px-6"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left: Brand Monogram */}
        <div className="flex items-center gap-6 group">
          <div className="relative w-16 h-16 overflow-hidden rounded-2xl border border-white/10 group-hover:border-primary/50 transition-colors shadow-2xl">
            <Image
              src="/assets/logo.png"
              alt="Mahmoud Zanoun Monogram Logo"
              fill
              className="object-cover scale-150 group-hover:scale-125 transition-transform duration-700"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-headline font-black text-[#ba9eff] tracking-tighter leading-none group-hover:text-primary transition-colors">
              MAHMOUD ZANOUN
            </h2>
            <p className="text-[10px] font-headline font-bold text-on-surface-variant tracking-[0.4em] leading-none opacity-80 uppercase">
              Senior Developer • Architect
            </p>
          </div>
        </div>

        {/* Center: Social Connect (Text Links) */}
        <div
          className="flex items-center gap-4"
          role="list"
          aria-label="Social Media Links"
        >
          {SOCIAL_LINKS.map((social, index) => (
            <div key={social.label} className="flex items-center">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all focus:outline-none focus:ring-1 focus:ring-primary rounded px-1"
                aria-label={`Visit my ${social.label} profile (opens in new tab)`}
                role="listitem"
              >
                {social.label}
              </a>
              {index < SOCIAL_LINKS.length - 1 && (
                <span
                  className="ml-4 w-1 h-1 rounded-full bg-white/20"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        {/* Right: Legal/Copy */}
        <div className="flex flex-col items-center md:items-end gap-3 text-right">
          <p className="text-sm text-on-surface font-semibold tracking-wide">
            &copy; {currentYear} • Mahmoud Zanoun Portfolio
          </p>
          <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-on-surface-variant tracking-widest opacity-80">
            <span>Crafted with Precision</span>
            <span
              className="w-1 h-1 rounded-full bg-primary animate-pulse"
              aria-hidden="true"
            ></span>
            <span>Ashmoun, Egypt</span>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="max-w-7xl mx-auto mt-16 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"
        aria-hidden="true"
      ></div>
    </footer>
  );
}
