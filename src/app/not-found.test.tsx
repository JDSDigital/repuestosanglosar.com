import { screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { expect, test } from "vitest";
import { renderWithIntl } from "@/test/render";
import messages from "../../messages/es.json";
import NotFound from "./not-found";

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
  expect(await axe(container)).toHaveNoViolations();
});
