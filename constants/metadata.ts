import { Metadata, Viewport } from "next";

export const PORTFOLIO_METADATA_BASE = "https://mahmoud-zanoun.vercel.app";

export const VIEWPORT_CONFIG: Viewport = {
  themeColor: "#0f072e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const METADATA_CONFIG: Metadata = {
  title: {
    default: "Mahmoud Zanoun | Senior Frontend Specialist",
    template: "%s | Mahmoud Zanoun",
  },
  description:
    "Architecting digital excellence with precision. Senior Frontend Developer specializing in React, Next.js, and architectural system design. 3+ years of experience delivering high-performance scalable web applications.",
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
    title: "Mahmoud Zanoun | Senior Frontend Specialist",
    description:
      "Architecting digital excellence with precision. Specialized in React and Next.js.",
    url: PORTFOLIO_METADATA_BASE,
    siteName: "Mahmoud Zanoun Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud Zanoun | Senior Frontend Specialist",
    description:
      "Architecting digital excellence with precision. Specialized in React and Next.js.",
    creator: "@mahmoudzanoun",
  },
  category: "technology",
};
