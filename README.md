# arthurreira-ui

Personal component registry built with Next.js and shadcn/ui — hosted at [ui.arthurreira.dev](https://ui.arthurreira.dev).

[Install a Component](#install-a-component) · [Available Components](#available-components) · [Running Locally](#running-locally) · [Registry Audit](#registry-audit) · [Changelog](#changelog)

## Install a Component

Any shadcn/ui project can install components directly from this registry:

```bash
# Install a single component
pnpm dlx shadcn@latest add https://ui.arthurreira.dev/r/card-grid.json

# Install the full theme (CSS vars, utils, fonts)
pnpm dlx shadcn@latest add https://ui.arthurreira.dev/r/theme.json
```

Dependencies (npm packages and other registry items) are installed automatically.

## Available Components

| Name | Type | Description |
| --- | --- | --- |
| `theme` | theme | Amber + blue/neutral color palette, Tailwind config, utils |
| `card-grid` | ui | Responsive bento grid with motion entrance animation |
| `brand-header` | component | Top navigation bar with search, avatar, and sidebar trigger |
| `brand-sidebar` | component | Collapsible sidebar with navigation and user section |
| `logo` | component | Brand logo with light/dark variant |
| `hero` | component | Hero section with headline and CTA |
| `promo` | component | Promotional banner component |
| `login` | component | Login form with react-hook-form + zod validation |
| `product-grid` | component | Product listing grid with API integration |
| `page-header` | ui | Page-level header with title and actions slot |
| `theme-toggle` | ui | Light/dark mode toggle via next-themes |
| `use-mounted-after` | hook | Returns true after mount delay — for client-only animations |
| `cards` | lib | `CardItem` type and `cardSizes` map used by `card-grid` |
| `data-table` | ui | Data table with sorting, filtering, and pagination |
| `date-picker` | ui | Date picker with calendar popover |
| `blank` | block | Full app scaffold with all brand components |
| `dashboard` | block | Dashboard layout with sidebar, header, and data table |
| `store` | block | Store layout with product grid and filters |

## Running Locally

```bash
pnpm install
pnpm dev
```

App runs on [localhost:3000](http://localhost:3000). Registry JSON is rebuilt on every `dev` and `build` run via `pnpm registry:build`.

## Registry Audit

A local audit script validates all registry items for correctness. It is gitignored and only runs locally.

```bash
pnpm audit:registry
```

Checks:

- npm packages imported but missing from `dependencies`
- Custom registry items imported but missing from `registryDependencies`
- Source files referenced in `files[].path` that don't exist on disk
- Non-standard install paths missing a `target` field
- Stale `lucide-react` references

## File Structure

```text
registry.json              # Source of truth for all registry items
registry/common/           # Shared base files (globals.css, utils.ts, etc.)
registry/layouts/          # Layout files used by blocks
src/components/            # Custom components
src/components/ui/         # shadcn/ui primitives
src/hooks/                 # React hooks
src/lib/                   # Business logic and utilities
public/r/                  # Built registry JSON (gitignored, generated on build)
```

## Changelog

### v0.1.0

- Add `card-grid`, `brand-header`, `brand-sidebar`, `hero`, `promo`, `login`, `product-grid`, `page-header`, `theme-toggle`, `use-mounted-after`, `cards`
- Migrate all icons to `@phosphor-icons/react`
- Fix registry deps: add missing npm packages to `login` and `product-grid`
- Fix registry dep resolution: use full URLs for custom `registryDependencies` to prevent naming collisions with consuming project registries
- Add local registry audit script (`pnpm audit:registry`)
