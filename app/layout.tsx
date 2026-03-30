import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";
import { METADATA_CONFIG, VIEWPORT_CONFIG } from "@/constants/metadata";

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

export const viewport = VIEWPORT_CONFIG;

export const metadata = METADATA_CONFIG;

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
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#0f072e] text-on-surface selection:bg-primary/30 selection:text-white overflow-x-hidden min-h-screen flex flex-col`}
      >
        <Navbar />
        <div className="flex-1 flex flex-col pt-24 lg:pt-32">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
