import { expect, test } from "vitest";
import messages from "../messages/es.json";
import { buildLlmsTxt } from "./llms-txt";

test("summarizes the business from the site text", () => {
  const text = buildLlmsTxt();

  expect(text.startsWith(`# ${messages.Metadata.siteName}\n`)).toBe(true);
  expect(text).toContain(`> ${messages.Metadata.description}`);
  expect(text).toContain(messages.SiteFooter.location);
  for (const { name } of Object.values(messages.CategoryBands.categories)) {
    expect(text).toContain(`- ${name}: `);
  }
  expect(text).toContain(`- ${messages.PhoneList.phonePrimary}`);
  expect(text).toContain("- https://repuestosanglosar.com/");
});
