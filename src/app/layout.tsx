import type { Metadata, Viewport } from "next";
import { Saira } from "next/font/google";
import { getTranslations } from "next-intl/server";
import { locale } from "@/i18n/config";
import { isPreview, ogImage, siteUrl, themeColor } from "@/site";
import "./globals.css";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  axes: ["wdth"],
  style: ["normal", "italic"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: t("titleTemplate") },
    description,
    applicationName: t("siteName"),
    openGraph: {
      type: "website",
      locale: "es_VE",
      siteName: t("siteName"),
      url: "/",
      title,
      description,
      images: [{ ...ogImage, alt: t("ogImageAlt") }],
    },
    twitter: { card: "summary_large_image" },
    ...(isPreview() && { robots: { index: false, follow: false } }),
  };
}

export const viewport: Viewport = { themeColor };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={locale} className={saira.variable}>
      <body>{children}</body>
    </html>
  );
}
