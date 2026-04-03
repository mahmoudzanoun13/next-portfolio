import { CONTACT_INFO } from "@/constants/portfolio";
import { SOCIAL_LINKS } from "@/constants/navigation";
import { getTranslations } from "next-intl/server";

export async function ContactInfoGrid() {
  const t = await getTranslations("Contact.info");
  return (
    <div className="flex flex-col gap-6">
      {CONTACT_INFO.map((info) => (
        <a
          key={info.label}
          href={info.link}
          target={info.link.startsWith("http") ? "_blank" : undefined}
          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
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
                {t(
                  info.label === "Email"
                    ? "email"
                    : info.label === "Location"
                      ? "location"
                      : "phone",
                )}
              </span>
              <span className="text-xl md:text-2xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors break-all md:break-normal">
                {info.label === "Location" ? t("location_val") : info.value}
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all duration-500 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
            arrow_forward
          </span>
        </a>
      ))}

      {/* Social Connect */}
      <ul className="grid grid-cols-2 gap-6 mt-4">
        {SOCIAL_LINKS.filter((social) => social.label !== "Source Code").map(
          (social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-surface-container/40 border border-white/5 hover:border-secondary/30 transition-all flex flex-col gap-4 group h-full"
              >
                <span className="material-symbols-outlined text-2xl text-secondary group-hover:scale-110 transition-transform">
                  {social.icon}
                </span>
                <span className="text-sm font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-secondary">
                  {social.label}
                </span>
              </a>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
