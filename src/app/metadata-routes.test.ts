import { afterEach, expect, test, vi } from "vitest";
import messages from "../../messages/es.json";
import manifest from "./manifest";
import robots from "./robots";
import sitemap from "./sitemap";

afterEach(() => {
  vi.unstubAllEnvs();
});

test("robots.txt allows everything and points to the sitemap", () => {
  expect(robots()).toEqual({
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://repuestosanglosar.com/sitemap.xml",
  });
});

test("robots.txt blocks everything on the preview channel", () => {
  vi.stubEnv("DEPLOY_TARGET", "preview");

  expect(robots()).toEqual({ rules: { userAgent: "*", disallow: "/" } });
});

test("the sitemap lists the home page on the canonical domain", () => {
  expect(sitemap().map(({ url }) => url)).toEqual([
    "https://repuestosanglosar.com/",
  ]);
});

test("the manifest uses the site text", () => {
  const { name, short_name, description, lang } = manifest();

  expect({ name, short_name, description, lang }).toEqual({
    name: messages.Metadata.siteName,
    short_name: messages.Metadata.shortName,
    description: messages.Metadata.description,
    lang: "es",
  });
});
