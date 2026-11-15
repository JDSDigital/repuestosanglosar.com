import type { MetadataRoute } from "next";
import { createTranslator } from "next-intl";
import { locale } from "@/i18n/config";
import { themeColor } from "@/site";
import messages from "../../messages/es.json";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const t = createTranslator({ locale, messages, namespace: "Metadata" });

  return {
    name: t("siteName"),
    short_name: t("shortName"),
    description: t("description"),
    lang: locale,
    start_url: "/",
    display: "browser",
    theme_color: themeColor,
    background_color: themeColor,
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
