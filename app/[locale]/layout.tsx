import { Inter, Space_Grotesk, Cairo } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";
import { getMetadataConfig, VIEWPORT_CONFIG } from "@/constants/metadata";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

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

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const viewport = VIEWPORT_CONFIG;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Metadata");

  return getMetadataConfig(t, locale);
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const isRtl = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className="dark scroll-smooth overflow-x-hidden"
      data-scroll-behavior="smooth"
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${cairo.variable} antialiased bg-[#0f072e] text-on-surface selection:bg-primary/30 selection:text-white overflow-x-hidden min-h-screen flex flex-col ${isRtl ? "font-cairo" : ""}`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="flex-1 flex flex-col pt-24 lg:pt-32">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
