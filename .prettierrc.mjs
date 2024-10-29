/** @type {import("prettier").Config} */
export default {
  semi: true,
  trailingComma: "es5",
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  endOfLine: "lf", // "lf" is "\n" (Unix), "crlf" is "\r\n" (Windows)
  proseWrap: "always", // Forces markdown text to wrap at printWidth
};
