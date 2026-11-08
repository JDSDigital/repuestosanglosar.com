import { axe } from "jest-axe";
import { renderToStaticMarkup } from "react-dom/server";
import { expect, test, vi } from "vitest";
import RootLayout from "./layout";

// next/font/google only works through the next build transform.
vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "font" }),
  Geist_Mono: () => ({ variable: "font" }),
}));

test("renders the document in Spanish with no accessibility violations", async () => {
  const markup = renderToStaticMarkup(
    <RootLayout params={Promise.resolve({})}>
      <main />
    </RootLayout>,
  );
  const page = new DOMParser().parseFromString(markup, "text/html");

  expect(page.documentElement.lang).toBe("es");
  expect(await axe(markup)).toHaveNoViolations();
});
