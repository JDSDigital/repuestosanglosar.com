import { existsSync, globSync, readFileSync } from "node:fs";
import { expect, test } from "vitest";

const sources = globSync(["src/app/**/*.tsx", "src/components/**/*.tsx"])
  .filter((source) => !source.endsWith(".test.tsx"))
  .sort();

const missing = sources.filter((source) => {
  const testPath = source.replace(/\.tsx$/, ".test.tsx");

  return (
    !existsSync(testPath) ||
    !readFileSync(testPath, "utf8").includes("toHaveNoViolations")
  );
});

test("every page and component has an accessibility test", () => {
  expect(sources).toContain("src/app/page.tsx");
  expect(missing).toEqual([]);
});
