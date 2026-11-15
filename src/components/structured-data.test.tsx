import { axe } from "jest-axe";
import { expect, test } from "vitest";
import { renderWithIntl } from "@/test/render";
import messages from "../../messages/es.json";
import { StructuredData } from "./structured-data";

function renderData() {
  const { container } = renderWithIntl(<StructuredData />);
  const script = container.querySelector('script[type="application/ld+json"]');

  return { container, data: JSON.parse(script?.textContent ?? "{}") };
}

test("describes the store with the site's own text", () => {
  const { data } = renderData();
  const store = data["@graph"].find(
    (node: { "@type": string }) => node["@type"] === "AutoPartsStore",
  );

  expect(store.name).toBe(messages.Metadata.siteName);
  expect(store.description).toBe(messages.Metadata.description);
  expect(store.url).toBe("https://repuestosanglosar.com/");
  expect(store.telephone).toBe("+584267277922");
  expect(
    store.contactPoint.map(({ telephone }: { telephone: string }) => telephone),
  ).toEqual(["+584267277922", "+584245308809"]);
  expect(store.address.addressCountry).toBe("VE");
  expect(
    store.hasOfferCatalog.itemListElement.map(
      ({ name }: { name: string }) => name,
    ),
  ).toEqual(
    Object.values(messages.CategoryBands.categories).map(({ name }) => name),
  );
});

test("links the website to the store", () => {
  const { data } = renderData();
  const website = data["@graph"].find(
    (node: { "@type": string }) => node["@type"] === "WebSite",
  );

  expect(website.publisher["@id"]).toBe("https://repuestosanglosar.com/#store");
});

test("has no accessibility violations", async () => {
  const { container } = renderData();

  expect(await axe(container)).toHaveNoViolations();
});
