import { useTranslations } from "next-intl";
import { absoluteUrl, ogImage, siteUrl, socialLinks } from "@/site";
import { toTelHref } from "./phone-list";

const categoryKeys = [
  "brakes",
  "sealsBearings",
  "drivetrain",
  "engine",
  "rubberSuspension",
  "body",
] as const;

function toE164(phone: string) {
  return toTelHref(phone).replace(/^tel:/, "");
}

export function StructuredData() {
  const t = useTranslations();
  const storeId = absoluteUrl("/#store");
  const phones = [t("PhoneList.phonePrimary"), t("PhoneList.phoneSecondary")];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: `${siteUrl}/`,
        name: t("Metadata.siteName"),
        inLanguage: "es-VE",
        publisher: { "@id": storeId },
      },
      {
        "@type": "AutoPartsStore",
        "@id": storeId,
        name: t("Metadata.siteName"),
        url: `${siteUrl}/`,
        description: t("Metadata.description"),
        logo: absoluteUrl("/images/logo.webp"),
        image: absoluteUrl(ogImage.url),
        telephone: toE164(phones[0]),
        contactPoint: phones.map((phone) => ({
          "@type": "ContactPoint",
          telephone: toE164(phone),
          contactType: t("StructuredData.contactType"),
          areaServed: "VE",
          availableLanguage: "es",
        })),
        address: {
          "@type": "PostalAddress",
          addressLocality: t("StructuredData.city"),
          addressRegion: t("StructuredData.region"),
          addressCountry: "VE",
        },
        areaServed: t("StructuredData.areaServed"),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t("StructuredData.catalog"),
          itemListElement: categoryKeys.map((key) => ({
            "@type": "OfferCatalog",
            name: t(`CategoryBands.categories.${key}.name`),
            description: t(`CategoryBands.categories.${key}.description`),
          })),
        },
        ...(socialLinks.length > 0 && { sameAs: socialLinks }),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Escapes "<" so the JSON can't close the script tag.
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD needs raw JSON.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
