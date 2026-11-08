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
  // A markup string makes axe check the landmark rules, unlike an element.
  expect(await axe(container.innerHTML)).toHaveNoViolations();
});
