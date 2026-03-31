import Link from "next/link";
import Image from "next/image";

export function FooterBrand() {
  return (
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
            sizes="(max-width: 768px) 40px, 48px"
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
        Architecting digital excellence with precision and purpose. Focused on
        building the future of the web.
      </p>
    </div>
  );
}
