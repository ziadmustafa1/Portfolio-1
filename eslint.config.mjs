import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    ignores: ['.next/*', 'node_modules/*'],
  },
  ...compat.extends('next/core-web-vitals'),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': [
        'error',
        {
          ignoreRestArgs: true,
          fixToUnknown: true,
        },
      ],
    },
    files: ['lib/utils.ts'],
  },
];
