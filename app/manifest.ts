import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mahmoud Zanoun | Portfolio",
    short_name: "Mahmoud Z",
    description: "Architecting digital excellence as a Senior Frontend Specialist.",
    start_url: "/en",
    display: "standalone",
    background_color: "#0f072e",
    theme_color: "#0f072e",
    icons: [
      {
        src: "/assets/logo.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
