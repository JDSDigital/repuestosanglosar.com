import { getRequestConfig } from "next-intl/server";
import messages from "../../messages/es.json";
import { locale } from "./config";

export default getRequestConfig(async () => ({ locale, messages }));
