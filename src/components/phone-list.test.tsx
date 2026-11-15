import { screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { expect, test } from "vitest";
import { renderWithIntl } from "@/test/render";
import messages from "../../messages/es.json";
import { PhoneList } from "./phone-list";

test("links each phone number so visitors can call it", () => {
  renderWithIntl(<PhoneList />);

  expect(
    screen
      .getByRole("link", { name: messages.PhoneList.phonePrimary })
      .getAttribute("href"),
  ).toBe("tel:+584267277922");
  expect(
    screen
      .getByRole("link", { name: messages.PhoneList.phoneSecondary })
      .getAttribute("href"),
  ).toBe("tel:+584245308809");
});

test("has no accessibility violations", async () => {
  const { container } = renderWithIntl(<PhoneList />);

  expect(await axe(container)).toHaveNoViolations();
});
