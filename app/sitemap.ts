import { MetadataRoute } from "next";
import { PORTFOLIO_METADATA_BASE } from "@/constants/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "ar"];
  const paths = ["", "/projects", "/experience", "/contact"];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${PORTFOLIO_METADATA_BASE}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
  );
}
