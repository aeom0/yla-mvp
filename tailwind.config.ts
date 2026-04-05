import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/pages/**/*.{ts,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        // Tokens semánticos
        bg: "var(--bg)",
        text: "var(--text)",
        card: "var(--card)",
        border: "var(--border)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",

        // Paleta Aurora Consciente
        lavender: "var(--lavender)", // #B497D6 — espiritual
        "lavender-deep": "var(--lavender-deep)", // #7B5EA7 — CTA dominante
        rose: "var(--rose)", // #E8C4C4 — cuarzo suave
        "rose-deep": "var(--rose-deep)", // #C8928F — hover/border
        sage: "var(--sage)", // #A8C5A0 — bienestar
        "sage-deep": "var(--sage-deep)", // #6B9E8A — badge/icon
        beige: "var(--beige)", // #F8F4F0 — fondo base
        ink: "var(--ink)", // #2D2D2D — texto
        "violet-anchor": "var(--violet-anchor)", // #3D2865 — display/footer
      },

      borderRadius: {
        "2xl": "1rem",
      },

      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,.06)",
        accent: "0 6px 28px rgba(123,94,167,.22)",
      },

      transitionTimingFunction: {
        "ease-soft": "cubic-bezier(.22,.61,.36,1)",
      },
    },
  },

  plugins: [],
};

export default config;
