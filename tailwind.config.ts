import type { Config } from "tailwindcss";

const config: Config = {
  // Controlamos el tema con next-themes (clase .dark en <html>)
  darkMode: "class",

  // Globs para Next.js (app router + pages + componentes)
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/pages/**/*.{ts,tsx,mdx}",
  ],

  theme: {
    extend: {
      // Colores conectados a variables CSS (definidas en globals.css)
      colors: {
        // Tokens semánticos (usa estas clases en tu UI)
        bg: "var(--bg)",
        text: "var(--text)",
        card: "var(--card)",
        border: "var(--border)",
        muted: "var(--muted)",
        accent: "var(--accent)",

        // Paleta de marca (por si quieres usarlos directamente)
        lavender: "var(--lavender)", // #B497D6
        beige: "var(--beige)",       // #F6EBD9
        gold: "var(--gold)",         // #E8D3A3
        smoke: "var(--smoke)",       // #DADADA
        ink: "var(--ink)",           // #333333
      },

      borderRadius: {
        "2xl": "1rem",
      },

      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,.06)",
      },

      transitionTimingFunction: {
        "ease-soft": "cubic-bezier(.22,.61,.36,1)",
      },
    },
  },

  plugins: [],
};

export default config;
