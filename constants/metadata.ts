import { Metadata, Viewport } from "next";

const IS_PROD = process.env.NODE_ENV === "production";
export const PORTFOLIO_METADATA_BASE = IS_PROD
  ? "https://portfolio-mahmoud-zanoun.vercel.app"
  : "http://localhost:3000";

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
  | "locale"
  | "title_projects"
  | "title_experience"
  | "title_contact";

export const getMetadataConfig = (
  t: (key: MetadataTranslationKeys) => string,
  locale: string = "en",
  path: string = "",
): Metadata => {
  const config: Metadata = {
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
      canonical: `/${locale}${path}`,
      languages: {
        en: `/en${path}`,
        ar: `/ar${path}`,
        "x-default": `/en${path}`,
      },
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
      images: [
        {
          url: "/assets/og-image.png",
          width: 1200,
          height: 630,
          alt: t("title_default"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title_default"),
      description: t("og_description"),
      creator: "@mahmoudzanoun",
      images: ["/assets/og-image.png"],
    },
    category: "technology",
  };

  // Only add title object (with template) at the root level (layout)
  // Sub-pages should return a string for 'title' to use this template correctly
  if (path === "") {
    config.title = {
      default: t("title_default"),
      template: t("title_template"),
    };
  }

  return config;
};
