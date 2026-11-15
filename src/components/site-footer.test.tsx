import { screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { expect, test } from "vitest";
import { renderWithIntl } from "@/test/render";
import messages from "../../messages/es.json";
import { SiteFooter } from "./site-footer";

test("shows the business name and location", () => {
  renderWithIntl(<SiteFooter />);

  expect(screen.getByRole("contentinfo")).toBeDefined();
  expect(screen.getByText(messages.SiteFooter.name)).toBeDefined();
  expect(screen.getByText(messages.SiteFooter.location)).toBeDefined();
});

test("has no accessibility violations", async () => {
  const { container } = renderWithIntl(<SiteFooter />);

  expect(await axe(container)).toHaveNoViolations();
});
