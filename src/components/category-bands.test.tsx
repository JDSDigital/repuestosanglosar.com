import { screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { expect, test } from "vitest";
import { renderWithIntl } from "@/test/render";
import messages from "../../messages/es.json";
import { CategoryBands } from "./category-bands";

const { categories } = messages.CategoryBands;
const expectedOrder = [
  categories.brakes,
  categories.sealsBearings,
  categories.drivetrain,
  categories.engine,
  categories.rubberSuspension,
  categories.body,
];

test("shows one section per category in order, brakes first", () => {
  renderWithIntl(<CategoryBands />);

  expect(
    screen
      .getAllByRole("heading", { level: 2 })
      .map((heading) => heading.textContent),
  ).toEqual(expectedOrder.map((category) => category.name));
  for (const category of expectedOrder) {
    expect(screen.getByRole("region", { name: category.name })).toBeDefined();
    expect(screen.getByText(category.description)).toBeDefined();
  }
  expect(screen.getByText(messages.CategoryBands.brakesNote)).toBeDefined();
});

test("has no accessibility violations", async () => {
  const { container } = renderWithIntl(<CategoryBands />);

  expect(await axe(container)).toHaveNoViolations();
});
