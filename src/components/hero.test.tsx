import { screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { expect, test } from "vitest";
import { renderWithIntl } from "@/test/render";
import messages from "../../messages/es.json";
import { Hero } from "./hero";

test("shows the headline, the intro and both phone numbers", () => {
  renderWithIntl(<Hero />);

  expect(
    screen.getByRole("heading", { level: 1, name: messages.Hero.title }),
  ).toBeDefined();
  expect(screen.getByText(messages.Hero.text)).toBeDefined();
  expect(
    screen.getByRole("link", { name: messages.PhoneList.phonePrimary }),
  ).toBeDefined();
  expect(
    screen.getByRole("link", { name: messages.PhoneList.phoneSecondary }),
  ).toBeDefined();
});

test("has no accessibility violations", async () => {
  const { container } = renderWithIntl(<Hero />);

  expect(await axe(container)).toHaveNoViolations();
});
