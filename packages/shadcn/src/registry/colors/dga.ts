/**
 * DGA Base Color Definition
 * Used by the CLI to generate CSS variables for DGA theme
 */

import type { registryBaseColorSchema } from "@/src/schema"
import type { z } from "zod"

export const dgaBaseColor: z.infer<typeof registryBaseColorSchema> = {
  inlineColors: {
    light: {
      background: "0 0% 100%",
      foreground: "145 30% 15%",
      card: "0 0% 100%",
      "card-foreground": "145 30% 15%",
      popover: "0 0% 100%",
      "popover-foreground": "145 30% 15%",
      primary: "145 50% 35%",
      "primary-foreground": "145 50% 97%",
      secondary: "85 30% 95%",
      "secondary-foreground": "85 30% 25%",
      muted: "0 0% 96%",
      "muted-foreground": "0 0% 45%",
      accent: "290 30% 95%",
      "accent-foreground": "290 30% 25%",
      destructive: "0 84% 60%",
      border: "0 0% 90%",
      input: "0 0% 90%",
      ring: "145 50% 45%",
    },
    dark: {
      background: "145 20% 8%",
      foreground: "0 0% 98%",
      card: "145 20% 12%",
      "card-foreground": "0 0% 98%",
      popover: "145 20% 12%",
      "popover-foreground": "0 0% 98%",
      primary: "145 50% 45%",
      "primary-foreground": "145 50% 8%",
      secondary: "85 30% 15%",
      "secondary-foreground": "85 30% 95%",
      muted: "0 0% 18%",
      "muted-foreground": "0 0% 65%",
      accent: "290 30% 18%",
      "accent-foreground": "290 30% 95%",
      destructive: "0 62% 50%",
      border: "0 0% 20%",
      input: "0 0% 20%",
      ring: "145 50% 50%",
    },
  },
  cssVars: {
    theme: {},
    light: {
      background: "0 0% 100%",
      foreground: "145 30% 15%",
      card: "0 0% 100%",
      "card-foreground": "145 30% 15%",
      popover: "0 0% 100%",
      "popover-foreground": "145 30% 15%",
      primary: "145 50% 35%",
      "primary-foreground": "145 50% 97%",
      secondary: "85 30% 95%",
      "secondary-foreground": "85 30% 25%",
      muted: "0 0% 96%",
      "muted-foreground": "0 0% 45%",
      accent: "290 30% 95%",
      "accent-foreground": "290 30% 25%",
      destructive: "0 84% 60%",
      border: "0 0% 90%",
      input: "0 0% 90%",
      ring: "145 50% 45%",
      "chart-1": "145 50% 60%",
      "chart-2": "145 50% 50%",
      "chart-3": "145 50% 40%",
      "chart-4": "145 50% 30%",
      "chart-5": "145 50% 20%",
      sidebar: "0 0% 98%",
      "sidebar-foreground": "145 30% 15%",
      "sidebar-primary": "145 50% 35%",
      "sidebar-primary-foreground": "145 50% 97%",
      "sidebar-accent": "145 30% 95%",
      "sidebar-accent-foreground": "145 30% 20%",
      "sidebar-border": "0 0% 90%",
      "sidebar-ring": "145 50% 45%",
    },
    dark: {
      background: "145 20% 8%",
      foreground: "0 0% 98%",
      card: "145 20% 12%",
      "card-foreground": "0 0% 98%",
      popover: "145 20% 12%",
      "popover-foreground": "0 0% 98%",
      primary: "145 50% 45%",
      "primary-foreground": "145 50% 8%",
      secondary: "85 30% 15%",
      "secondary-foreground": "85 30% 95%",
      muted: "0 0% 18%",
      "muted-foreground": "0 0% 65%",
      accent: "290 30% 18%",
      "accent-foreground": "290 30% 95%",
      destructive: "0 62% 50%",
      border: "0 0% 20%",
      input: "0 0% 20%",
      ring: "145 50% 50%",
      "chart-1": "145 50% 55%",
      "chart-2": "145 50% 45%",
      "chart-3": "145 50% 35%",
      "chart-4": "145 50% 25%",
      "chart-5": "145 50% 15%",
      sidebar: "145 20% 12%",
      "sidebar-foreground": "0 0% 98%",
      "sidebar-primary": "145 50% 45%",
      "sidebar-primary-foreground": "145 50% 8%",
      "sidebar-accent": "0 0% 18%",
      "sidebar-accent-foreground": "0 0% 98%",
      "sidebar-border": "0 0% 20%",
      "sidebar-ring": "145 50% 50%",
    },
  },
  cssVarsV4: {
    theme: {},
    light: {
      radius: "0.75rem",
      background: "oklch(1 0 0)",
      foreground: "oklch(0.26 0.06 145)",
      card: "oklch(1 0 0)",
      "card-foreground": "oklch(0.26 0.06 145)",
      popover: "oklch(1 0 0)",
      "popover-foreground": "oklch(0.26 0.06 145)",
      primary: "oklch(0.45 0.12 145)",
      "primary-foreground": "oklch(0.97 0.02 145)",
      secondary: "oklch(0.95 0.04 85)",
      "secondary-foreground": "oklch(0.36 0.06 85)",
      muted: "oklch(0.97 0 0)",
      "muted-foreground": "oklch(0.55 0 0)",
      accent: "oklch(0.94 0.04 290)",
      "accent-foreground": "oklch(0.28 0.06 290)",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "oklch(0.92 0 0)",
      input: "oklch(0.92 0 0)",
      ring: "oklch(0.52 0.14 145)",
      "chart-1": "oklch(0.76 0.12 145)",
      "chart-2": "oklch(0.64 0.14 145)",
      "chart-3": "oklch(0.52 0.14 145)",
      "chart-4": "oklch(0.45 0.12 145)",
      "chart-5": "oklch(0.38 0.10 145)",
      sidebar: "oklch(0.985 0 0)",
      "sidebar-foreground": "oklch(0.26 0.06 145)",
      "sidebar-primary": "oklch(0.45 0.12 145)",
      "sidebar-primary-foreground": "oklch(0.97 0.02 145)",
      "sidebar-accent": "oklch(0.93 0.04 145)",
      "sidebar-accent-foreground": "oklch(0.26 0.06 145)",
      "sidebar-border": "oklch(0.92 0 0)",
      "sidebar-ring": "oklch(0.52 0.14 145)",
    },
    dark: {
      background: "oklch(0.13 0.02 145)",
      foreground: "oklch(0.985 0 0)",
      card: "oklch(0.20 0.03 145)",
      "card-foreground": "oklch(0.985 0 0)",
      popover: "oklch(0.20 0.03 145)",
      "popover-foreground": "oklch(0.985 0 0)",
      primary: "oklch(0.52 0.14 145)",
      "primary-foreground": "oklch(0.18 0.04 145)",
      secondary: "oklch(0.26 0.04 85)",
      "secondary-foreground": "oklch(0.93 0.04 85)",
      muted: "oklch(0.27 0 0)",
      "muted-foreground": "oklch(0.71 0 0)",
      accent: "oklch(0.28 0.04 290)",
      "accent-foreground": "oklch(0.94 0.04 290)",
      destructive: "oklch(0.704 0.191 22.216)",
      border: "oklch(1 0 0 / 10%)",
      input: "oklch(1 0 0 / 15%)",
      ring: "oklch(0.52 0.14 145)",
      "chart-1": "oklch(0.64 0.14 145)",
      "chart-2": "oklch(0.52 0.14 145)",
      "chart-3": "oklch(0.45 0.12 145)",
      "chart-4": "oklch(0.38 0.10 145)",
      "chart-5": "oklch(0.32 0.08 145)",
      sidebar: "oklch(0.20 0.03 145)",
      "sidebar-foreground": "oklch(0.985 0 0)",
      "sidebar-primary": "oklch(0.52 0.14 145)",
      "sidebar-primary-foreground": "oklch(0.18 0.04 145)",
      "sidebar-accent": "oklch(0.27 0 0)",
      "sidebar-accent-foreground": "oklch(0.985 0 0)",
      "sidebar-border": "oklch(1 0 0 / 10%)",
      "sidebar-ring": "oklch(0.52 0.14 145)",
    },
  },
  inlineColorsTemplate:
    "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n",
  cssVarsTemplate: `@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
}

/* DGA Design System - Saudi Green Theme */
:root {
  --font-sans: "IBM Plex Sans", "IBM Plex Sans Arabic", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --radius: 0.75rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.26 0.06 145);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.26 0.06 145);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.26 0.06 145);
  --primary: oklch(0.45 0.12 145);
  --primary-foreground: oklch(0.97 0.02 145);
  --secondary: oklch(0.95 0.04 85);
  --secondary-foreground: oklch(0.36 0.06 85);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.55 0 0);
  --accent: oklch(0.94 0.04 290);
  --accent-foreground: oklch(0.28 0.06 290);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.92 0 0);
  --input: oklch(0.92 0 0);
  --ring: oklch(0.52 0.14 145);
  --chart-1: oklch(0.76 0.12 145);
  --chart-2: oklch(0.64 0.14 145);
  --chart-3: oklch(0.52 0.14 145);
  --chart-4: oklch(0.45 0.12 145);
  --chart-5: oklch(0.38 0.10 145);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.26 0.06 145);
  --sidebar-primary: oklch(0.45 0.12 145);
  --sidebar-primary-foreground: oklch(0.97 0.02 145);
  --sidebar-accent: oklch(0.93 0.04 145);
  --sidebar-accent-foreground: oklch(0.26 0.06 145);
  --sidebar-border: oklch(0.92 0 0);
  --sidebar-ring: oklch(0.52 0.14 145);
}

.dark {
  --background: oklch(0.13 0.02 145);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.20 0.03 145);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.20 0.03 145);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.52 0.14 145);
  --primary-foreground: oklch(0.18 0.04 145);
  --secondary: oklch(0.26 0.04 85);
  --secondary-foreground: oklch(0.93 0.04 85);
  --muted: oklch(0.27 0 0);
  --muted-foreground: oklch(0.71 0 0);
  --accent: oklch(0.28 0.04 290);
  --accent-foreground: oklch(0.94 0.04 290);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.52 0.14 145);
  --chart-1: oklch(0.64 0.14 145);
  --chart-2: oklch(0.52 0.14 145);
  --chart-3: oklch(0.45 0.12 145);
  --chart-4: oklch(0.38 0.10 145);
  --chart-5: oklch(0.32 0.08 145);
  --sidebar: oklch(0.20 0.03 145);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.52 0.14 145);
  --sidebar-primary-foreground: oklch(0.18 0.04 145);
  --sidebar-accent: oklch(0.27 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.52 0.14 145);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
`,
}
