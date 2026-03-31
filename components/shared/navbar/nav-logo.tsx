import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NavLogoProps {
  onClick?: () => void;
  className?: string;
}

export function NavLogo({ onClick, className }: NavLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 group focus:outline-none rounded-lg",
        className,
      )}
      aria-label="Mahmoud Zanoun - Home"
    >
      <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-xl border border-white/10 group-hover:border-primary/50 transition-all duration-500 shadow-lg">
        <Image
          src="/assets/logo.png"
          alt="M monogram logo"
          fill
          className="object-cover scale-150 group-hover:scale-125 transition-transform duration-700"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="text-sm md:text-base font-headline font-black text-[#ba9eff] tracking-tighter leading-none group-hover:text-primary transition-colors">
          MAHMOUD
        </span>
        <span className="text-[9px] md:text-[11px] font-headline font-bold text-on-surface-variant tracking-[0.25em] leading-none opacity-90 uppercase mt-0.5">
          ZANOUN
        </span>
      </div>
    </Link>
  );
}
