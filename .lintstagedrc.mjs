// Configuration for lint-staged
export default {
  // TypeScript and JavaScript files
  "*.{js,mjs,cjs,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],

  // JSON and YAML files
  "*.{json,yml,yaml}": ["prettier --write"],

  // Markdown files
  "*.md": ["prettier --write"],

  // CSS, SCSS files
  // "*.{css,scss}": [
  //     "prettier --write",
  //     "stylelint --fix"
  // ],

  // Catch all other files that prettier supports
  "*": "prettier --ignore-unknown --write",
};
