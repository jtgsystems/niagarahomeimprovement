# AGENTS.md

## Repo Snapshot
- Repository: `jtgsystems/niagarahomeimprovement`
- Default branch: `main`
- Visibility: `public`
- Summary: Working guidance for jtgsystems/niagarahomeimprovement.
- Detected stack: Node.js

## Read First
- `README.md`
- `package.json`

## Key Paths
- `src/`
- `public/`

## Working Rules
- Keep changes focused on the task and match the existing file layout and naming patterns.
- Update tests and docs when behavior changes or public interfaces move.
- Do not commit secrets, credentials, ad-hoc exports, or large generated artifacts unless the repository already tracks them intentionally.
- Prefer the existing automation and CI workflow over one-off commands when both paths exist.

## Verified Commands
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Test: `npm test`
- Lint: `npm run lint`
- Preview: `npm run preview`

## Change Checklist
- Run the relevant tests or static checks for the files you changed before finishing.
- Keep human-facing docs aligned with behavior changes.
- If the repo has specialized areas later, add nested `AGENTS.md` files close to that code instead of overloading the root file.

This file should stay short, specific, and current. Update it whenever the repo's real setup or verification steps change.
