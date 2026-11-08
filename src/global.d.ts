import type messages from "../messages/es.json";
import type { locale } from "./i18n/config";

declare module "next-intl" {
  interface AppConfig {
    Locale: typeof locale;
    Messages: typeof messages;
  }
}
