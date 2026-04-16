# Lock Event — Publication Notes

## 2026-04-16 — Restored publication repo
- The previously documented folder `/home/worker/lockevent-publish` was missing.
- Restored a clean publishable repo from the current Lock Event source in `/home/worker/repo`.
- Included only the website/app files and deployment/config files:
  - `app/`
  - `public/`
  - `.gitignore`
  - `.env.example`
  - `AGENTS.md`
  - `README.md`
  - `package.json`
  - `package-lock.json`
  - `tsconfig.json`
  - `next.config.js`
  - `tailwind.config.js`
  - `postcss.config.mjs`
  - `eslint.config.mjs`
- Verified no `SpinDry` / `spindry` matches in the publication folder.
- Installed dependencies with `npm ci`.
- Read local Next.js bundled docs for App Router TypeScript behavior at:
  - `node_modules/next/dist/docs/01-app/03-api-reference/05-config/02-typescript.md`
  - `node_modules/next/dist/docs/01-app/02-guides/tailwind-v3-css.md`
- Verified the production build with `npm run build`.

## Pending
- None.

## 2026-04-16 — GitHub push result
- Initialized a fresh git repository on branch `main`.
- Configured git identity:
  - `user.name=Lock Event`
  - `user.email=contact.lockevent@gmail.com`
- Created root commit:
  - `75544848c0e36d425eac1cd343df9730de0d6357`
  - message: `feat: initial Lock Event codebase`
- Configured the HTTPS remote for `contactlockevent-cmd/LockEvent`.
- Push output:
  - `To https://github.com/contactlockevent-cmd/LockEvent.git`
  - ` * [new branch]      main -> main`
  - `branch 'main' set up to track 'origin/main'.`
- Remote verification:
  - `git ls-remote --heads origin main` returned `75544848c0e36d425eac1cd343df9730de0d6357 refs/heads/main`
  - `git status --short --branch` returned `## main...origin/main`
