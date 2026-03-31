import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 bg-[#0f072e] lg:hidden transition-all duration-500 ease-in-out z-99 overflow-y-auto px-6 pt-32 pb-12",
        isOpen
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
                onClick={onClose}
                style={{ transitionDelay: `${i * 75}ms` }}
                className={cn(
                  "text-5xl font-headline font-bold transition-all transform block",
                  isOpen
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
  );
}
