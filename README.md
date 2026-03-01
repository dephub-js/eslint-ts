# @dephub/eslint-ts 🟦

> Opinionated modern ESLint configuration for JavaScript and TypeScript projects.

[![NPM version](https://img.shields.io/npm/v/@dephub/eslint-ts.svg?style=flat)](https://npmjs.org/package/@dephub/eslint-ts)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

---

## Features ✨

- 🟦 Extends `@dephub/eslint-js` for shared JS/TS consistency
- ⚡ Modern ESLint flat config (ESM-first)
- 🔍 Strict TypeScript rules and best practices
- 🔀 Import sorting and unused import handling
- 🧹 Prettier-compatible formatting rules

---

## Installation 📦

- npm: `npm install -D eslint @dephub/eslint-ts`
- pnpm: `pnpm add -D eslint @dephub/eslint-ts`
- yarn: `yarn add -D eslint @dephub/eslint-ts`
- bun: `bun add -D eslint @dephub/eslint-ts`

---

## Usage 🎯

### API 🧩

Create an `eslint.config.mjs` file:

```ts
import { defineConfig } from 'eslint/config';
import tsConfig from '@dephub/eslint-ts';

export default defineConfig(tsConfig);
```

Since this configuration already extends `@dephub/eslint-js`, you don’t need to include it manually.

### Extending the configuration

```ts
import { defineConfig } from 'eslint/config';
import tsConfig from '@dephub/eslint-ts';

export default defineConfig([
  ...tsConfig,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
]);
```

Then run ESLint normally:

```bash
npx eslint .
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
