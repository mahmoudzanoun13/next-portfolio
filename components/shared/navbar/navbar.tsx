"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/constants/navigation";
import { useScroll } from "@/hooks/use-scroll";
import { useLockScroll } from "@/hooks/use-lock-scroll";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScroll();
  useLockScroll(isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-[#0f072e] lg:hidden transition-all duration-500 ease-in-out z-99 overflow-y-auto px-6 pt-32 pb-12",
          isMenuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none",
        )}
      >
        <div className="flex flex-col gap-10">
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  style={{ transitionDelay: `${i * 75}ms` }}
                  className={cn(
                    "text-5xl font-headline font-bold transition-all transform block",
                    isMenuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0",
                    pathname === link.href
                      ? "text-primary"
                      : "text-white/70 hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t border-white/10 pt-10 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-black">
                Context & Language
              </span>
              <button className="flex items-center justify-between text-white font-bold p-5 rounded-2xl bg-white/5 border border-white/5 active:scale-95 transition-all">
                <span className="text-sm uppercase tracking-widest opacity-60">
                  Global Region
                </span>
                <span className="text-secondary flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(83,221,252,0.6)]" />
                  AR / EN
                </span>
              </button>
            </div>

            <Button
              size="lg"
              className="w-full py-5 text-lg"
              icon="download"
              variant="primary"
            >
              Download APP
            </Button>
          </div>
        </div>
      </div>

      <nav
        className={cn(
          "fixed top-0 w-full z-100 transition-all duration-500 ease-out",
          isScrolled || isMenuOpen
            ? "bg-[#0f072e]/90 backdrop-blur-2xl shadow-2xl border-b border-white/5 py-3 md:py-4"
            : "bg-transparent py-6 md:py-8",
        )}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto">
          {/* Left: Logo */}
          <div className="flex-1 lg:w-1/4">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-3 group focus:outline-none rounded-lg"
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
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center gap-10 font-headline font-bold tracking-tight">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "transition-all duration-300 text-sm focus:outline-none relative group/link px-1",
                    pathname === link.href
                      ? "text-[#ba9eff]"
                      : "text-slate-400 hover:text-white",
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300",
                      pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover/link:w-full",
                    )}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex-1 lg:w-1/4 flex items-center justify-end gap-3 md:gap-5">
            <div className="hidden lg:flex items-center gap-6">
              <button
                className="text-slate-400 transition-colors text-xs font-black uppercase tracking-[0.2em] focus:outline-none hover:text-white"
                aria-label="Toggle language"
              >
                EN
              </button>
              <Button size="md" variant="primary" icon="download">
                Download APP
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 focus:outline-none group relative z-50 rounded-full hover:bg-white/5 transition-colors"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <div
                className={cn(
                  "w-6 h-[2px] bg-white transition-all duration-300 rounded-full",
                  isMenuOpen ? "rotate-45 translate-y-[4px]" : "",
                )}
              />
              <div
                className={cn(
                  "w-6 h-[2px] bg-white transition-all duration-300 rounded-full",
                  isMenuOpen ? "opacity-0 scale-x-0" : "",
                )}
              />
              <div
                className={cn(
                  "w-6 h-[2px] bg-white transition-all duration-300 rounded-full",
                  isMenuOpen ? "-rotate-45 -translate-y-[12px]" : "",
                )}
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
