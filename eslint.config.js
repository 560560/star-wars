import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import unusedImports from 'eslint-plugin-unused-imports'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import importPlugin from 'eslint-plugin-import'
import prettierConfig from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettierConfig,
    ],
    plugins: {
      react,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // === Правила для импортов ===

      // Сортировка импортов
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1. Вендорные импорты: Node.js, React, библиотеки из node_modules
            ['^node:', '^react', '^@?\\w'],
            // 2. Локальные импорты: относительные (./, ../) и абсолютные (/) пути
            // (включая side effect imports)
            ['^\\u0000', '^/', '^\\.'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      // Запрет дублирующихся импортов
      'import/no-duplicates': 'error',

      // Удаление неиспользуемых импортов
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // === React Best Practices ===

      // Самозакрывающиеся теги для компонентов без детей
      'react/self-closing-comp': 'error',

      // Запрет использования индекса массива в качестве key
      'react/no-array-index-key': 'warn',

      // Запрет неэкранированных сущностей
      'react/no-unescaped-entities': 'error',

      // Фрагменты должны использовать короткий синтаксис
      'react/jsx-fragments': ['error', 'syntax'],

      // Boolean пропсы без значения
      'react/jsx-boolean-value': ['error', 'never'],

      // Закрывающая скобка JSX должна быть выровнена
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

      // Запрет лишних пробелов в JSX
      'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],

      // Пропсы должны быть отсортированы
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          shorthandFirst: true,
          ignoreCase: true,
          reservedFirst: true,
        },
      ],

      // === TypeScript Best Practices ===

      // Явные типы возвращаемых значений для функций
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // Consistent type imports
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
        },
      ],

      // Запрет any
      '@typescript-eslint/no-explicit-any': 'warn',

      // Использование const assertions там где нужно
      '@typescript-eslint/prefer-as-const': 'error',

      // === Общие Best Practices ===

      // Использование const для переменных которые не переназначаются
      'prefer-const': 'error',

      // Запрет var
      'no-var': 'error',

      // Использование шаблонных строк вместо конкатенации
      'prefer-template': 'error',

      // Запрет console (кроме warn и error)
      'no-console': ['warn', { allow: ['log', 'warn', 'error'] }],

      // Запрет debugger в production
      'no-debugger': 'error',

      // Требование === вместо ==
      eqeqeq: ['error', 'always', { null: 'ignore' }],

      // Форматирование теперь обрабатывается Prettier
      // Правила semi, quotes, comma-dangle убраны чтобы не конфликтовать с Prettier
    },
  },
])
