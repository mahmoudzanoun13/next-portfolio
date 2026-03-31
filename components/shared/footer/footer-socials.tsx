import { SOCIAL_LINKS } from "@/constants/navigation";

export function FooterSocials() {
  return (
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
  );
}
