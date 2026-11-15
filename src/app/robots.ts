import type { MetadataRoute } from "next";
import { absoluteUrl, isPreview } from "@/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (isPreview()) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
