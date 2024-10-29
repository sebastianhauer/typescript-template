# TypeScript Template

A modern, opinionated TypeScript project template with integrated code quality
tools and Git workflow automation.

## Features

- ⚡ TypeScript configuration optimized for Node.js
- 🎨 Automated code formatting with Prettier
- 🔍 Code quality enforcement with ESLint
- 🪝 Git hooks for automated quality checks
- 📝 Standardized commit message templates

## Quick Start

1. Install dependencies:

```shell
npm clean-install
```

2. Configure commit template:

```shell
git config commit.template .gitmessage
```

That's it! The installation automatically sets up Git hooks through the
`prepare` script.

## Commit Guidelines

- We follow conventional commits with emoji support
- Reference our [commit template](.gitmessage)
- See [Gitmoji Guide](https://gitmoji.dev/) for emoji usage
- Read [How to Write Better Commits](https://cbea.ms/git-commit/)

## License

Update the `LICENSE` file before use. Choose a license:

- [Popular Open Source Licenses](https://choosealicense.com/licenses/)
- [OSI Approved Licenses](https://opensource.org/licenses)

## Project Setup Details

> 🔍 **Understanding the Template Build Process**
>
> ### Base Setup
>
> ```shell
> npm init
> npm install --save-dev typescript @types/node
> npx tsc --init
> ```
>
> ### Code Quality Tools
>
> ```shell
> npm install --save-dev \
>     eslint \
>     @eslint/js \
>     @types/eslint__js \
>     typescript-eslint \
>     prettier \
>     eslint-config-prettier \
>     @types/eslint-config-prettier
> ```
>
> ### Git Hooks Setup
>
> ```shell
> npm install --save-dev husky lint-staged
> npx husky-init && npm install
> ```
>
> ### Key Configuration Files
>
> - `tsconfig.json`:
>   [TypeScript configuration](https://www.typescriptlang.org/tsconfig)
> - `eslint.config.mjs`: [ESLint rules](https://typescript-eslint.io/)
> - `.prettierrc.mjs`: [Prettier settings](https://prettier.io/)
> - `.lintstagedrc.mjs`: Pre-commit check configuration
> - `.husky/pre-commit`: Git hook scripts

## Additional Resources

- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [lint-staged Documentation](https://github.com/lint-staged/lint-staged)
- [Git Hooks Guide](https://git-scm.com/docs/githooks#_hooks)
