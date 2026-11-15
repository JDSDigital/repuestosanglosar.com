import { createTranslator } from "next-intl";
import { locale } from "@/i18n/config";
import { siteUrl } from "@/site";
import messages from "../messages/es.json";

// A plain-text summary for AI answer engines, built from the site text so it
// can't drift from the page. See https://llmstxt.org.
export function buildLlmsTxt() {
  const t = createTranslator({ locale, messages });
  const categories = Object.values(messages.CategoryBands.categories);
  const phones = [t("PhoneList.phonePrimary"), t("PhoneList.phoneSecondary")];

  return [
    `# ${t("Metadata.siteName")}`,
    "",
    `> ${t("Metadata.description")}`,
    "",
    t("CategoryBands.brakesNote"),
    "",
    `## ${t("LlmsTxt.location")}`,
    "",
    t("SiteFooter.location"),
    "",
    `## ${t("LlmsTxt.vehicles")}`,
    "",
    `${t("VehiclesBand.title")}. ${t("VehiclesBand.text")}`,
    "",
    `## ${t("LlmsTxt.categories")}`,
    "",
    ...categories.map(({ name, description }) => `- ${name}: ${description}`),
    "",
    `## ${t("LlmsTxt.phones")}`,
    "",
    ...phones.map((phone) => `- ${phone}`),
    "",
    `## ${t("LlmsTxt.website")}`,
    "",
    `- ${siteUrl}/`,
    "",
  ].join("\n");
}
