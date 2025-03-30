import eslint from '@eslint/js';
import * as typescriptEslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import sonarjs from 'eslint-plugin-sonarjs';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import unusedImports from 'eslint-plugin-unused-imports';
import nextEslint from '@next/eslint-plugin-next';
import react from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import'; // <-- Add this import

export default [
  eslint.configs.recommended,
  ...typescriptEslint.configs.recommended,
  ...typescriptEslint.configs.recommendedTypeChecked,
  {
    plugins: {
      'react-hooks': reactHooks,
      react,
      'jsx-a11y': jsxA11y,
      sonarjs,
      prettier,
      'simple-import-sort': simpleImportSort,
      'no-relative-import-paths': noRelativeImportPaths,
      'unused-imports': unusedImports,
      '@next/next': nextEslint,
      import: importPlugin,  // <-- Add this plugin here
    },

    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        typescript: {}
      }
    },

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptEslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        browser: true,
        es6: true,
        node: true
      }
    },
    ignores: [
      "node_modules/",
      "dist/",
      "build/",
      "coverage/",
      "**/*.min.js",
      "src/components/ui/",
      "/src/lib/"
    ],
    rules: {
      // React rules
      'react/display-name': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
      'react/function-component-definition': [2, {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }],

      // TypeScript rules
      '@typescript-eslint/no-unnecessary-template-expression': 'error',
      '@typescript-eslint/restrict-template-expressions': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-shadow': 'error',

      // Import rules
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-extraneous-dependencies': 'off',
      'import/extensions': ['error', 'never'],
      'import/no-unresolved': 2,
      'import/no-default-export': 'error',

      // Other import-related rules
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { allowSameFolder: true }
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w'],
            [
              '^config|^components|^providers|^utils|^hooks|^actions|^stores|^schemas|^constants|^types?\\w'
            ],
            [
              '^\\u0000',
              '^\\.',
              '^',
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$'
            ],
            ['^.+\\.?(styled)$', '^.+\\.?(styles)$', '^.+\\.?(css)$']
          ]
        }
      ],
      'simple-import-sort/exports': 'error',
      'sort-imports': 'off',
      'import/order': 'off',

      // Unused imports
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],

      // Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Other rules
      'no-shadow': 'off',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'sonarjs/cognitive-complexity': ['error', 10],
      'max-lines-per-function': ['error', 175],
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'jsx-a11y/label-has-associated-control': 'off',
      'sonarjs/todo-tag': 'off'
    }
  },

  // Test files override
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    // Add any specific rules for test files if needed
  }
];