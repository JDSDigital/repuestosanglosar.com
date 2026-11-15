export const siteUrl = "https://repuestosanglosar.com";

// Set by `pnpm deploy:dev`, so the public preview channel stays out of search.
export function isPreview() {
  return process.env.DEPLOY_TARGET === "preview";
}

// Matches --navy in src/app/globals.css.
export const themeColor = "#07172e";

export const ogImage = { url: "/images/og.jpg", width: 1200, height: 630 };

export const socialLinks: string[] = [];

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
