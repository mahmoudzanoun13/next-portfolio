import { MetadataRoute } from "next";
import { PORTFOLIO_METADATA_BASE } from "@/constants/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: `${PORTFOLIO_METADATA_BASE}/sitemap.xml`,
  };
}
