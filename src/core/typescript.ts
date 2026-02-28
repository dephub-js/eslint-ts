import type { Linter } from 'eslint';

import jsConfig from '@dephub/eslint-js';
import tsParser from '@typescript-eslint/parser';
import { importX } from 'eslint-plugin-import-x';
import { defineConfig } from 'eslint/config';
import * as ts from 'typescript-eslint';

const files = ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'];

const tseslintRecommended = ts.configs.recommended.flatMap((cfg) => ({
  files,
  ...cfg,
}));

const tseslintStrict = ts.configs.strict.flatMap((cfg) => ({
  files,
  ...cfg,
}));

const tsConfig: Linter.Config[] = defineConfig([
  ...jsConfig,
  ...tseslintRecommended,
  ...tseslintStrict,
  importX.flatConfigs.typescript,
  {
    files,
    languageOptions: {
      ecmaVersion: 'latest',
      parser: tsParser,
      parserOptions: {
        project: true,
        tsconfigRootDir: process.cwd(),
      },
      sourceType: 'module',
    },
    name: 'eslint/typescript',
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-base-to-string': 'warn',
      '@typescript-eslint/no-duplicate-type-constituents': 'warn',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-meaningless-void-operator': 'warn',
      '@typescript-eslint/no-redundant-type-constituents': 'warn',
      '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
      '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/prefer-find': 'warn',
      '@typescript-eslint/prefer-includes': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/prefer-readonly': 'warn',
      '@typescript-eslint/require-array-sort-compare': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'warn',
      '@typescript-eslint/switch-exhaustiveness-check': 'warn',
      'import-x/no-dynamic-require': 'warn',
      'import-x/no-nodejs-modules': 'warn',
    },
  },
] as Linter.Config[]);

export default tsConfig;
