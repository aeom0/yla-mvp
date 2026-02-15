import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const config = [
  // Base de Next (flat compat)
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Resolver paths de tsconfig para los alias "@/..."
  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: { project: "./tsconfig.json" },
      },
    },
    rules: {
      // Si quieres mantener el aviso de exports anónimos, deja esta línea fuera.
      // "import/no-anonymous-default-export": "error",

      // Evitar falsos positivos de alias mientras compila bien con Next/TS
      "import/no-unresolved": "off",
    },
  },
];

export default config;
