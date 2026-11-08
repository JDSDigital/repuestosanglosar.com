import { cleanup } from "@testing-library/react";
import { toHaveNoViolations } from "jest-axe";
import { afterEach, expect } from "vitest";

expect.extend(toHaveNoViolations);

afterEach(() => {
  cleanup();
  // axe(string) restores the body from a copy of its HTML, which cleanup can't
  // find, so the copy would leak into the next test.
  document.body.innerHTML = "";
});
