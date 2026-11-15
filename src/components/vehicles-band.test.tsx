import { screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { expect, test } from "vitest";
import { renderWithIntl } from "@/test/render";
import messages from "../../messages/es.json";
import { VehiclesBand } from "./vehicles-band";

test("says which vehicles the parts are for", () => {
  renderWithIntl(<VehiclesBand />);

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: messages.VehiclesBand.title,
    }),
  ).toBeDefined();
  expect(screen.getByText(messages.VehiclesBand.text)).toBeDefined();
});

test("has no accessibility violations", async () => {
  const { container } = renderWithIntl(<VehiclesBand />);

  expect(await axe(container)).toHaveNoViolations();
});
