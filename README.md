# Repuestos Anglosar

Website for Repuestos Anglosar, a spare parts company in Barinas, Venezuela.

Visitors see the site in Spanish. The code, comments and documentation are in English.

## Stack

- [Next.js](https://nextjs.org) 16 with the App Router, built as a static export
- [Firebase Hosting](https://firebase.google.com/docs/hosting) to serve the site
- [React](https://react.dev) 19 and TypeScript
- [next-intl](https://next-intl.dev) for site text
- [Biome](https://biomejs.dev) for linting and formatting
- [Vitest](https://vitest.dev) and [jest-axe](https://github.com/NickColley/jest-axe) for tests
- [pnpm](https://pnpm.io) as the package manager

## Getting started

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Starts the development server |
| `pnpm build` | Builds the static site into `out/`, including the type check |
| `pnpm preview` | Serves the last build from `out/` locally, using the globally installed Firebase CLI |
| `pnpm deploy:dev` | Builds and deploys to the `development` preview channel |
| `pnpm deploy:prod` | Builds and deploys to the live site |
| `pnpm lint` | Checks the code with Biome |
| `pnpm format` | Formats the code with Biome |
| `pnpm test` | Runs the tests once |
| `pnpm test:watch` | Runs the tests and reruns them on changes |

## Project structure

```text
messages/
  es.json          All text that visitors see
public/            Static files
src/
  app/             Pages and layouts
  i18n/
    config.ts      The site's locale
    request.ts     Gives next-intl the locale and messages
  test/            Test setup and shared test helpers
  global.d.ts      Types for locale and message keys
```

## Site text

All visitor-facing text lives in `messages/es.json`, grouped by page or component. Keys are in English and values are in Spanish.

1. Add the text to `messages/es.json`:

   ```json
   {
     "HomePage": {
       "status": "Nuestro sitio web está en construcción."
     }
   }
   ```

2. Use it in a page or Server Component:

   ```tsx
   import { useTranslations } from "next-intl";

   export default function Home() {
     const t = useTranslations("HomePage");

     return <p>{t("status")}</p>;
   }
   ```

Use `getTranslations` from `next-intl/server` in async functions such as `generateMetadata`. A key that doesn't exist in `messages/es.json` fails the type check, and therefore `pnpm build`.

`es` is the only locale, so URLs have no language prefix: the home page is `/`, not `/es`.

## Testing

Every page and component has an accessibility test next to it, such as `src/app/page.test.tsx` for `src/app/page.tsx`. `pnpm test` fails if one is missing. See the Testing section of `AGENTS.md` for the rules.

jest-axe runs in jsdom, so it can't check color contrast or the document title.

## Deployment

The site is hosted on Firebase Hosting, in the `repuestos-anglosar` project. To deploy, install the [Firebase CLI](https://firebase.google.com/docs/cli), log in and run one of these:

```bash
pnpm deploy:dev   # Development: a preview channel, for checking changes first
pnpm deploy:prod  # Production: the live site at https://repuestos-anglosar.web.app
```

Both commands run `pnpm build` first, then upload `out/`.

`pnpm deploy:dev` prints the preview URL, which stays the same between deploys and is public to anyone who has the link. The channel expires 30 days after the last deploy, and Firebase deletes it then. The next `pnpm deploy:dev` recreates it, possibly at a new URL.

Because the site is a static export, there's no server at runtime:

- Server Actions, cookies and proxy aren't available.
- Next's `headers`, `redirects` and `rewrites` config doesn't apply. Set those in `firebase.json` instead.
- Dynamic routes need `generateStaticParams`.
- Images aren't optimized, so add them to `public/` already sized and compressed.

The store planned in the roadmap will probably need a server, which means moving to [Firebase App Hosting](https://firebase.google.com/docs/app-hosting).

## Roadmap

1. Company information site (current phase)
2. Product catalog or online store (later phase)
