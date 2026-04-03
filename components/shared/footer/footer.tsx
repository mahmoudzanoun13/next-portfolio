import { Section } from "@/components/ui/section";
import { FooterBrand } from "./footer-brand";
import { FooterSocials } from "./footer-socials";
import { FooterLegal } from "./footer-legal";

export default async function Footer() {
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
        <FooterBrand />
        <FooterSocials />
        <FooterLegal />
      </Section>
      {/* Bottom accent line */}
      <div
        className="max-w-7xl mx-auto mt-16 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"
        aria-hidden="true"
      ></div>
    </footer>
  );
}
