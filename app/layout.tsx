import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0f072e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
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
  authors: [
    { name: "Mahmoud Zanoun", url: "https://mahmoud-zanoun.vercel.app" },
  ],
  creator: "Mahmoud Zanoun",
  publisher: "Mahmoud Zanoun",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mahmoud-zanoun.vercel.app"),
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
    url: "https://mahmoud-zanoun.vercel.app",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth overflow-x-hidden">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#0f072e] text-on-surface selection:bg-primary/30 selection:text-white overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
