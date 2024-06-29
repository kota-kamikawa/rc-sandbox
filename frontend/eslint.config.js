// eslint.config.js
import eslint from '@eslint/js';
import simple_import_sort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import jest_dom from 'eslint-plugin-jest-dom';
import testing_library from 'eslint-plugin-testing-library';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    plugins: {
      'simple-import-sort': simple_import_sort,
      'jest-dom': jest_dom,
      'testing-library': testing_library,
    },
    rules: {
      //"simple-import-sort/imports": "error", // import文のソートを強制する
      //"simple-import-sort/exports": "error", // export文のソートを強制する
      'no-unused-vars': 'off', // 未使用の変数を許可しない
      'no-console': 'warn', // Console.logをWarningとして扱う
      camelcase: 'warn', // キャメルケースを強制する
      'no-var': 'error',
    },
  },
  {
    ignores: ['eslint.config.js' , 'vitest.setup.ts'],
  },
];
