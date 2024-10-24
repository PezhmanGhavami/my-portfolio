import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import pluginNext from "@next/eslint-plugin-next";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

/** @type {import("eslint").Linter.Config} */
const config = [
  // Core ESLint recommendations
  js.configs.recommended,

  // Prettier config to prevent conflict
  prettier,

  // TypeScript support
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx", "**/*.mdx"],
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    rules: typescriptPlugin.configs.recommended.rules,
  },

  // Next.js plugin
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx", "**/*.mdx"],
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
    },
  },

  // Custom rules
  {
    rules: {
      "func-style": ["error", "expression", { allowArrowFunctions: true }],
      "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
    },
  },

  // Language options with browser and Node.js globals
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Ignored files
  {
    ignores: [
      "node_modules",
      ".pnp",
      ".pnp.js",
      ".yarn/install-state.gz",
      "coverage",
      ".next",
      "out",
      "build",
      ".DS_Store",
      "*.pem",
      "npm-debug.log*",
      "yarn-debug.log*",
      "yarn-error.log*",
      ".env*.local",
      ".vercel",
      "*.tsbuildinfo",
      "next-env.d.ts",
    ],
  },
];

export default config;
