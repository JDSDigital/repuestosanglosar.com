import { screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { expect, test } from "vitest";
import { renderWithIntl } from "@/test/render";
import messages from "../../messages/es.json";
import Home, { metadata } from "./page";

const { categories } = messages.CategoryBands;

test("renders the home page with no accessibility violations", async () => {
  const { container } = renderWithIntl(<Home />);

  expect(screen.getByRole("banner")).toBeDefined();
  expect(screen.getByRole("main")).toBeDefined();
  expect(screen.getByRole("contentinfo")).toBeDefined();
  expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  expect(
    screen.getByRole("heading", { level: 1, name: messages.Hero.title }),
  ).toBeDefined();
  // A markup string makes axe check the landmark rules, unlike an element.
  expect(await axe(container.innerHTML)).toHaveNoViolations();
});

test("shows the categories, then the vehicles, then the call to action", () => {
  renderWithIntl(<Home />);

  expect(
    screen
      .getAllByRole("heading", { level: 2 })
      .map((heading) => heading.textContent),
  ).toEqual([
    categories.brakes.name,
    categories.sealsBearings.name,
    categories.drivetrain.name,
    categories.engine.name,
    categories.rubberSuspension.name,
    categories.body.name,
    messages.VehiclesBand.title,
    messages.CallToAction.title,
  ]);
});

test("shows the phone numbers in the hero and in the call to action", () => {
  renderWithIntl(<Home />);

  const links = screen.getAllByRole("link", {
    name: messages.PhoneList.phonePrimary,
  });

  expect(links).toHaveLength(2);
  for (const link of links) {
    expect(link.getAttribute("href")).toBe("tel:+584267277922");
  }
});

test("declares itself as the canonical home page", () => {
  expect(metadata.alternates?.canonical).toBe("/");
});

test("includes the structured data", () => {
  const { container } = renderWithIntl(<Home />);

  expect(
    container.querySelector('script[type="application/ld+json"]'),
  ).not.toBeNull();
});
