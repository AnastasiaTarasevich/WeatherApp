import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        ...globals.jest
      }
    },
    plugins: {
      'react': reactPlugin,
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': simpleImportSort
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
       "@typescript-eslint/no-require-imports": "off",
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'simple-import-sort/imports': [
  'error',
  {
    groups: [
      ['^react', '^react-dom'],
      ['^@?\\w'],
      ['^(@components|@utils|@context|@pages)(/.*|$)'],
      ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
      ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
    ],
  },
],
'@typescript-eslint/no-unused-vars': [
    'error',
    { 
      argsIgnorePattern: '^_',
    }
  ],
      'simple-import-sort/exports': 'error',
      'react/react-in-jsx-scope': 'off',
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  prettier,
  {
    ignores: ['node_modules/', 'dist/', 'build/', '*.config.js']
  }
];