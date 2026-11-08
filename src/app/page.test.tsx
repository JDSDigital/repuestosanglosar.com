import { screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { expect, test } from "vitest";
import { renderWithIntl } from "@/test/render";
import messages from "../../messages/es.json";
import Home from "./page";

test("renders the home page with no accessibility violations", async () => {
  const { container } = renderWithIntl(<Home />);

  expect(
    screen.getByRole("heading", { level: 1, name: messages.HomePage.title }),
  ).toBeDefined();
  expect(screen.getByText(messages.HomePage.status)).toBeDefined();
  expect(screen.getByText(messages.HomePage.tagline)).toBeDefined();
  // A markup string makes axe check the landmark rules, unlike an element.
  expect(await axe(container.innerHTML)).toHaveNoViolations();
});

test("links each phone number so visitors can call it", () => {
  renderWithIntl(<Home />);

  expect(
    screen
      .getByRole("link", { name: messages.HomePage.phonePrimary })
      .getAttribute("href"),
  ).toBe("tel:+584267277922");
  expect(
    screen
      .getByRole("link", { name: messages.HomePage.phoneSecondary })
      .getAttribute("href"),
  ).toBe("tel:+584245308809");
});
