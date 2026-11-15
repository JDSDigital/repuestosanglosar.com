import { screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { expect, test } from "vitest";
import { renderWithIntl } from "@/test/render";
import messages from "../../messages/es.json";
import { SiteHeader } from "./site-header";

test("shows the business name and a call link to the primary phone", () => {
  renderWithIntl(<SiteHeader />);

  expect(screen.getByText(messages.SiteHeader.name)).toBeDefined();
  expect(
    screen
      .getByRole("link", { name: messages.SiteHeader.call })
      .getAttribute("href"),
  ).toBe("tel:+584267277922");
});

test("has no accessibility violations", async () => {
  const { container } = renderWithIntl(<SiteHeader />);

  expect(await axe(container)).toHaveNoViolations();
});
