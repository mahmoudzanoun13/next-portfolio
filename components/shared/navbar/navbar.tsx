"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useScroll } from "@/hooks/use-scroll";
import { useLockScroll } from "@/hooks/use-lock-scroll";

import { NavLogo } from "./nav-logo";
import { DesktopMenu } from "./desktop-menu";
import { MobileMenu } from "./mobile-menu";
import { NavActions } from "./nav-actions";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScroll();
  useLockScroll(isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} pathname={pathname} />

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
          {/* Logo Wrapper - keeps logo space but centers hover on content */}
          <div className="flex-1 lg:w-1/4 flex justify-start">
            <NavLogo onClick={closeMenu} />
          </div>

          <DesktopMenu pathname={pathname} />

          {/* Actions Wrapper - keeps space balanced */}
          <div className="flex-1 lg:w-1/4 flex justify-end">
            <NavActions isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </nav>
    </>
  );
}
