import { axe } from "jest-axe";
import { expect, test } from "vitest";

test("reports a violation for an image without alt text", async () => {
  expect(await axe('<img src="/x.png">')).not.toHaveNoViolations();
});
