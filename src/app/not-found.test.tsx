import { screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { createTranslator } from "next-intl";
import { expect, test, vi } from "vitest";
import { renderWithIntl } from "@/test/render";
import messages from "../../messages/es.json";
import NotFound, { generateMetadata } from "./not-found";

// getTranslations needs a Next request, so build the same translator directly.
vi.mock("next-intl/server", () => ({
  getTranslations: async (namespace: "NotFound") =>
    createTranslator({ locale: "es", messages, namespace }),
}));

test("renders the not found page with no accessibility violations", async () => {
  const { container } = renderWithIntl(<NotFound />);

  expect(
    screen.getByRole("heading", { level: 1, name: messages.NotFound.title }),
  ).toBeDefined();
  expect(
    screen
      .getByRole("link", { name: messages.NotFound.home })
      .getAttribute("href"),
  ).toBe("/");
  // A markup string makes axe check the landmark rules, unlike an element.
  expect(await axe(container.innerHTML)).toHaveNoViolations();
});

test("titles the not found page", async () => {
  expect((await generateMetadata()).title).toBe(messages.NotFound.title);
});
