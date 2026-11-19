# AGENTS.md

A web app on Vite, React and TypeScript, started from KAEIDOS's reviewed template.

## Commands

Run them from the repository's root, in the dev container:

- `npm ci`: install the exact versions of `package-lock.json`.
- `npm run dev`: start the app on port 5173; it reloads by itself on each edit.
- `npm test`: run the tests (Vitest, jsdom, Testing Library).
- `npm run lint`: run oxlint; a warning fails it.
- `npm run build`: check the types, then build into `dist/`.

## Rules

- Each change comes with its tests, beside the code: `src/App.tsx` is tested by
  `src/App.test.tsx`. Test what a person sees and does, by role and text.
- Keep `npm test`, `npm run lint` and `npm run build` passing.
- The text the app shows is in French.
- Add a dependency only when the platform or React cannot do it; pin its exact version.
- `.github/workflows/` and `.kaeidos/project.yaml` belong to KAEIDOS: never change them.
- Never commit a secret; read one from the environment.
