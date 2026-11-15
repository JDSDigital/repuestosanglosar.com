import { axe } from "jest-axe";
import { createTranslator } from "next-intl";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, expect, test, vi } from "vitest";
import messages from "../../messages/es.json";
import RootLayout, { generateMetadata } from "./layout";

// next/font/google only works through the next build transform.
vi.mock("next/font/google", () => ({
  Saira: () => ({ variable: "font" }),
}));

// getTranslations needs a Next request, so build the same translator directly.
vi.mock("next-intl/server", () => ({
  getTranslations: async (namespace: "Metadata") =>
    createTranslator({ locale: "es", messages, namespace }),
}));

afterEach(() => {
  vi.unstubAllEnvs();
});

test("renders the document in Spanish with no accessibility violations", async () => {
  const markup = renderToStaticMarkup(
    <RootLayout params={Promise.resolve({})}>
      <main />
    </RootLayout>,
  );
  const page = new DOMParser().parseFromString(markup, "text/html");

  expect(page.documentElement.lang).toBe("es");
  expect(await axe(markup)).toHaveNoViolations();
});

test("gives shared links a title, description and image on the canonical domain", async () => {
  const metadata = await generateMetadata();

  expect(metadata.metadataBase?.toString()).toBe(
    "https://repuestosanglosar.com/",
  );
  expect(metadata.title).toEqual({
    default: messages.Metadata.title,
    template: messages.Metadata.titleTemplate,
  });
  expect(metadata.description).toBe(messages.Metadata.description);
  expect(metadata.openGraph).toMatchObject({
    locale: "es_VE",
    url: "/",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: messages.Metadata.ogImageAlt,
      },
    ],
  });
  expect(metadata.twitter).toMatchObject({ card: "summary_large_image" });
  expect(metadata.robots).toBeUndefined();
});

test("keeps the preview channel out of search", async () => {
  vi.stubEnv("DEPLOY_TARGET", "preview");

  expect((await generateMetadata()).robots).toEqual({
    index: false,
    follow: false,
  });
});

test("keeps the title and description short enough for search results", () => {
  expect(messages.Metadata.title.length).toBeLessThanOrEqual(60);
  expect(messages.Metadata.description.length).toBeLessThanOrEqual(160);
});
