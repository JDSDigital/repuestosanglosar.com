import type { Metadata } from "next";
import { Saira } from "next/font/google";
import { getTranslations } from "next-intl/server";
import { locale } from "@/i18n/config";
import "./globals.css";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={locale} className={saira.variable}>
      <body>{children}</body>
    </html>
  );
}
