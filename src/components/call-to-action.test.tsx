import { screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { expect, test } from "vitest";
import { renderWithIntl } from "@/test/render";
import messages from "../../messages/es.json";
import { CallToAction } from "./call-to-action";

test("invites visitors to call with both phone numbers", () => {
  renderWithIntl(<CallToAction />);

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: messages.CallToAction.title,
    }),
  ).toBeDefined();
  expect(screen.getByText(messages.CallToAction.text)).toBeDefined();
  expect(screen.getAllByRole("link")).toHaveLength(2);
});

test("has no accessibility violations", async () => {
  const { container } = renderWithIntl(<CallToAction />);

  expect(await axe(container)).toHaveNoViolations();
});
