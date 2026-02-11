# DGA-UI Test Init App

Minimal test app for testing `dga-ui init` and component additions.

## Usage

```bash
# From monorepo root
pnpm install

# Test init command (generates globals.css with DGA theme)
cd apps/test-init
pnpm test:init

# Test adding components
pnpm test:add

# Run dev server to see results
pnpm dev
```

## Quick Iteration Loop

1. Make changes to `packages/shadcn/src/registry/colors/dga.ts`
2. Run `pnpm test:init` in this folder
3. Check `src/globals.css` for generated output
4. Run `pnpm dev` to visually verify

## Notes

- This app is in the workspace, so `packages/shadcn` changes are immediately available
- No need to rebuild shadcn package for TypeScript changes
- For template changes in `cssVarsTemplate`, run the init command again
