# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` - Start development server with HMR (http://localhost:5173)
- `pnpm build` - Create production build
- `pnpm typecheck` - Generate route types and run TypeScript check
- `pnpm start` - Run production server

## Architecture

This is a personal portfolio site built with React Router 8 (SSR enabled), TypeScript, and Tailwind CSS v4.

### Node version

Node 24, pinned in two places that must stay in sync:

- `.nvmrc` — local shells (nvm). Vercel does not read this.
- `engines.node` in `package.json` — Vercel build and function runtime. This overrides the Node.js Version dropdown in Project Settings.

React Router 8 requires `>=22.22.0`, so this cannot drop back to Node 20.

### Routing

Routes are defined in `app/routes.ts` using React Router's declarative API. Each route file in `app/routes/` exports a default component and a `meta()` function for SEO.

### Styling System

- **Tailwind v4** with custom theme defined in `app.css` using `@theme` layer
- Custom colors: main (#ff97c2), accent (#f7cb45), interactive (#95e6c5)
- Custom fonts: Oswald (titles), Cabin (body)
- **CVA (class-variance-authority)** for type-safe component variants
- `cn()` utility in `app/components/ui/cn.ts` for class merging (clsx + tailwind-merge)

### Component Patterns

- **Radix UI Slot pattern**: Components use `asChild` prop for composition via `@radix-ui/react-slot`
- **Tag component** (`app/components/ui/tag.tsx`): Reusable CVA-based component with variant (main/accent/interactive) and size (sm/md/lg/inherit) props

### Path Aliases

`~/*` maps to `./app/*` (configured in tsconfig.json and vite.config.ts)
