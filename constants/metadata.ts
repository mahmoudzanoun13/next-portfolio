import { Metadata, Viewport } from "next";

export const PORTFOLIO_METADATA_BASE = "https://mahmoud-zanoun.vercel.app";

export const VIEWPORT_CONFIG: Viewport = {
  themeColor: "#0f072e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export type MetadataTranslationKeys =
  | "title_default"
  | "title_template"
  | "description"
  | "og_description"
  | "site_name"
  | "locale";

export const getMetadataConfig = (
  t: (key: MetadataTranslationKeys) => string,
): Metadata => ({
  title: {
    default: t("title_default"),
    template: t("title_template"),
  },
  description: t("description"),
  keywords: [
    "Frontend Developer",
    "React Specialist",
    "Next.js Architecture",
    "Senior Developer",
    "UI/UX Engineer",
    "Web Performance",
    "Mahmoud Zanoun",
    "Egypt Developer",
  ],
  authors: [{ name: "Mahmoud Zanoun", url: PORTFOLIO_METADATA_BASE }],
  creator: "Mahmoud Zanoun",
  publisher: "Mahmoud Zanoun",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(PORTFOLIO_METADATA_BASE),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
    shortcut: "/assets/logo.png",
  },
  openGraph: {
    title: t("title_default"),
    description: t("og_description"),
    url: PORTFOLIO_METADATA_BASE,
    siteName: t("site_name"),
    locale: t("locale"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: t("title_default"),
    description: t("og_description"),
    creator: "@mahmoudzanoun",
  },
  category: "technology",
});
