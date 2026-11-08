<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project conventions

This is the website for Repuestos Anglosar, a spare parts company in Barinas, Venezuela. See `README.md` for setup and the roadmap.

### Language

- Write code, comments, docs, commit messages and message keys in English.
- Write visitor-facing text in Latin American Spanish.
- Never hardcode visitor-facing text in components. Every string goes in `messages/es.json`, including metadata, `alt` text and `aria-label`s.
- `es` is the only locale. Don't add other locales or locale routing unless the owner asks.
- Client components that need translations require `NextIntlClientProvider` in the root layout. It isn't included yet because nothing needs it.

### Tooling

- Use pnpm, not npm or yarn.
- Use Biome for linting and formatting.
- Run `pnpm lint` and `pnpm build` before calling work done.

### Git

- Never commit to `main`. Put every change on a branch and open a PR.
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org), such as `feat: add contact page`.
- PR titles start with a capitalized type, such as `Feat: Add contact page`.

### Business facts

Don't invent business details such as the address, phone number, hours, brands or products. Ask the owner.
