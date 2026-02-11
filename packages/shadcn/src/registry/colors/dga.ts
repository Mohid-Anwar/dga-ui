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
  /* ============================================
   * Tailwind Theme Overrides with DGA Tokens
   * ============================================ */

  /* Colors - Map semantic vars to Tailwind */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  /* Typography */
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);

  /* Border Radius */
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);

  /* Shadows - Override Tailwind defaults */
  --shadow-sm: var(--dga-shadow-sm);
  --shadow-md: var(--dga-shadow-md);
  --shadow-lg: var(--dga-shadow-lg);
  --shadow-xl: var(--dga-shadow-xl);
  --shadow-2xl: var(--dga-shadow-2xl);

  /* Transitions */
  --ease-default: var(--dga-easing-default);
  --ease-in: var(--dga-easing-in);
  --ease-out: var(--dga-easing-out);
}

/* ============================================
 * DGA Design System Tokens
 * Raw design tokens - Single source of truth
 * ============================================ */
:root {
  /* Primary - Saudi Green */
  --dga-primary-50: oklch(0.97 0.02 145);
  --dga-primary-100: oklch(0.93 0.04 145);
  --dga-primary-200: oklch(0.86 0.08 145);
  --dga-primary-300: oklch(0.76 0.12 145);
  --dga-primary-400: oklch(0.64 0.14 145);
  --dga-primary-500: oklch(0.52 0.14 145);
  --dga-primary-600: oklch(0.45 0.12 145);
  --dga-primary-700: oklch(0.38 0.10 145);
  --dga-primary-800: oklch(0.32 0.08 145);
  --dga-primary-900: oklch(0.26 0.06 145);
  --dga-primary-950: oklch(0.18 0.04 145);

  /* Secondary - Gold */
  --dga-gold-50: oklch(0.98 0.02 85);
  --dga-gold-100: oklch(0.95 0.04 85);
  --dga-gold-200: oklch(0.90 0.08 85);
  --dga-gold-300: oklch(0.84 0.12 85);
  --dga-gold-400: oklch(0.78 0.14 85);
  --dga-gold-500: oklch(0.72 0.14 85);
  --dga-gold-600: oklch(0.64 0.12 85);
  --dga-gold-700: oklch(0.54 0.10 85);
  --dga-gold-800: oklch(0.44 0.08 85);
  --dga-gold-900: oklch(0.36 0.06 85);
  --dga-gold-950: oklch(0.24 0.04 85);

  /* Accent - Lavender */
  --dga-lavender-50: oklch(0.97 0.02 290);
  --dga-lavender-100: oklch(0.94 0.04 290);
  --dga-lavender-200: oklch(0.88 0.08 290);
  --dga-lavender-300: oklch(0.80 0.12 290);
  --dga-lavender-400: oklch(0.70 0.14 290);
  --dga-lavender-500: oklch(0.60 0.14 290);
  --dga-lavender-600: oklch(0.52 0.12 290);
  --dga-lavender-700: oklch(0.44 0.10 290);
  --dga-lavender-800: oklch(0.36 0.08 290);
  --dga-lavender-900: oklch(0.28 0.06 290);
  --dga-lavender-950: oklch(0.20 0.04 290);

  /* Neutral - Gray */
  --dga-gray-50: oklch(0.985 0 0);
  --dga-gray-100: oklch(0.97 0 0);
  --dga-gray-200: oklch(0.92 0 0);
  --dga-gray-300: oklch(0.87 0 0);
  --dga-gray-400: oklch(0.71 0 0);
  --dga-gray-500: oklch(0.55 0 0);
  --dga-gray-600: oklch(0.45 0 0);
  --dga-gray-700: oklch(0.37 0 0);
  --dga-gray-800: oklch(0.27 0 0);
  --dga-gray-900: oklch(0.20 0 0);
  --dga-gray-950: oklch(0.13 0 0);

  /* Semantic Colors */
  --dga-success: oklch(0.52 0.14 145);
  --dga-success-light: oklch(0.93 0.04 145);
  --dga-warning: oklch(0.78 0.14 85);
  --dga-warning-light: oklch(0.95 0.04 85);
  --dga-error: oklch(0.577 0.245 27.325);
  --dga-error-light: oklch(0.97 0.01 17);
  --dga-info: oklch(0.60 0.14 250);
  --dga-info-light: oklch(0.94 0.04 250);

  /* Typography */
  --dga-font-sans: "IBM Plex Sans", "IBM Plex Sans Arabic", system-ui, -apple-system, sans-serif;
  --dga-font-mono: "IBM Plex Mono", ui-monospace, monospace;

  /* Shadows */
  --dga-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --dga-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --dga-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --dga-shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --dga-shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  /* Transitions */
  --dga-duration-fast: 150ms;
  --dga-duration-normal: 200ms;
  --dga-duration-slow: 300ms;
  --dga-easing-default: cubic-bezier(0.4, 0, 0.2, 1);
  --dga-easing-in: cubic-bezier(0.4, 0, 1, 1);
  --dga-easing-out: cubic-bezier(0, 0, 0.2, 1);

  /* Border Radius */
  --dga-radius-sm: 0.25rem;
  --dga-radius-md: 0.5rem;
  --dga-radius-lg: 0.75rem;
  --dga-radius-xl: 1rem;
  --dga-radius-2xl: 1.5rem;
  --dga-radius-full: 9999px;
}

/* ============================================
 * Light Mode - Semantic Variable Mapping
 * References DGA tokens above
 * ============================================ */
:root {
  --font-sans: var(--dga-font-sans);
  --font-mono: var(--dga-font-mono);
  --radius: var(--dga-radius-lg);

  /* Backgrounds */
  --background: var(--dga-gray-50);
  --foreground: var(--dga-gray-900);

  /* Card */
  --card: oklch(1 0 0);
  --card-foreground: var(--dga-gray-900);

  /* Popover */
  --popover: oklch(1 0 0);
  --popover-foreground: var(--dga-gray-900);

  /* Primary - Saudi Green */
  --primary: var(--dga-primary-600);
  --primary-foreground: var(--dga-primary-50);

  /* Secondary - Gold */
  --secondary: var(--dga-gold-100);
  --secondary-foreground: var(--dga-gold-900);

  /* Muted */
  --muted: var(--dga-gray-100);
  --muted-foreground: var(--dga-gray-600);

  /* Accent - Lavender */
  --accent: var(--dga-lavender-100);
  --accent-foreground: var(--dga-lavender-900);

  /* Destructive */
  --destructive: var(--dga-error);
  --destructive-foreground: var(--dga-error-light);

  /* Borders & Inputs */
  --border: var(--dga-gray-200);
  --input: var(--dga-gray-200);
  --ring: var(--dga-primary-400);

  /* Charts */
  --chart-1: var(--dga-primary-300);
  --chart-2: var(--dga-primary-400);
  --chart-3: var(--dga-primary-500);
  --chart-4: var(--dga-primary-600);
  --chart-5: var(--dga-primary-700);

  /* Sidebar */
  --sidebar: var(--dga-gray-50);
  --sidebar-foreground: var(--dga-gray-900);
  --sidebar-primary: var(--dga-primary-600);
  --sidebar-primary-foreground: var(--dga-primary-50);
  --sidebar-accent: var(--dga-primary-100);
  --sidebar-accent-foreground: var(--dga-primary-900);
  --sidebar-border: var(--dga-gray-200);
  --sidebar-ring: var(--dga-primary-400);
}

/* ============================================
 * Dark Mode - Semantic Variable Mapping
 * ============================================ */
.dark {
  /* Backgrounds */
  --background: var(--dga-gray-950);
  --foreground: var(--dga-gray-50);

  /* Card */
  --card: var(--dga-gray-900);
  --card-foreground: var(--dga-gray-50);

  /* Popover */
  --popover: var(--dga-gray-900);
  --popover-foreground: var(--dga-gray-50);

  /* Primary - Saudi Green (lighter for dark mode) */
  --primary: var(--dga-primary-500);
  --primary-foreground: var(--dga-primary-950);

  /* Secondary - Gold */
  --secondary: var(--dga-gold-900);
  --secondary-foreground: var(--dga-gold-100);

  /* Muted */
  --muted: var(--dga-gray-800);
  --muted-foreground: var(--dga-gray-400);

  /* Accent - Lavender */
  --accent: var(--dga-lavender-900);
  --accent-foreground: var(--dga-lavender-100);

  /* Destructive */
  --destructive: oklch(0.704 0.191 22.216);
  --destructive-foreground: oklch(0.97 0.01 17);

  /* Borders & Inputs */
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: var(--dga-primary-500);

  /* Charts */
  --chart-1: var(--dga-primary-400);
  --chart-2: var(--dga-primary-500);
  --chart-3: var(--dga-primary-600);
  --chart-4: var(--dga-primary-700);
  --chart-5: var(--dga-primary-800);

  /* Sidebar */
  --sidebar: var(--dga-gray-900);
  --sidebar-foreground: var(--dga-gray-50);
  --sidebar-primary: var(--dga-primary-500);
  --sidebar-primary-foreground: var(--dga-primary-950);
  --sidebar-accent: var(--dga-gray-800);
  --sidebar-accent-foreground: var(--dga-gray-50);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: var(--dga-primary-600);
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
