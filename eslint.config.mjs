import eslint from "@eslint/js"; // Base ESLint configurations
import prettier from "eslint-config-prettier"; // Disables ESLint's formatting rules to avoid conflicts with Prettier
import tseslint from "typescript-eslint"; // TypeScript ESLint plugin and configurations

export default tseslint.config(
  {
    extends: [
      eslint.configs.recommended,
      // Use strict type-checking rules (includes recommended rules + additional strict rules)
      ...tseslint.configs.strictTypeChecked,
    ],
    // Specify which files to lint
    files: ["**/*.ts", "**/*.tsx"],
    // Files to ignore during linting
    ignores: ["node_modules/**", "dist/**"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        // Enable project service for better performance with TypeScript files
        projectService: true,
        // Path to your TypeScript configuration
        project: "./tsconfig.json",
        // Use latest ECMAScript features
        ecmaVersion: "latest",
        // Treat files as ES modules
        sourceType: "module",
      },
    },
    // Custom rule configurations
    rules: {
      "no-var": "error", // Prevent usage of var
      "prefer-const": "error", // Require const for variables that aren't reassigned
      "no-unused-vars": "error", // Flag unused variables
      "no-duplicate-imports": "error", // Prevent multiple imports from same module
      "no-console": "off", // Allow console.log statements
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...tseslint.configs.disableTypeChecked,
  },

  // Apply prettier config last to disable any conflicting formatting rules
  prettier
);
