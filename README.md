# Fullstack Turborepo Template (Nest.JS + Next.JS + ShadCN + Prisma)

This is a template for creating a full-stack application within a Turborepo. It contains a Nest.JS API and a Next.JS frontend, with Shadcn + Tailwind V4 for styling, Prisma for database interaction, and Better-Auth for authentication.

Credit to shadcn for the initial Shadcn + Next.JS monorepo template, which this extends from.

## Usage

```bash
pnpm dlx shadcn@latest init
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button";
```
