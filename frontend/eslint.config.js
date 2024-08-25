import { fixupConfigRules } from '@eslint/compat';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import stylisticJsx from '@stylistic/eslint-plugin-jsx';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    settings: { react: { version: 'detect' } },
    plugins: {
      'simple-import-sort': simpleImportSort,
      '@stylistic/js': stylisticJs,
      '@stylistic/jsx': stylisticJsx
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@stylistic/js/indent': ['error', 2, { 'SwitchCase': 1 }],
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
      '@stylistic/js/no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
      '@typescript-eslint/explicit-function-return-type': 'error',
      'react/react-in-jsx-scope': 'off',
      '@stylistic/jsx/jsx-indent': ['error', 2],
      '@stylistic/jsx/jsx-closing-bracket-location': 1,
      '@stylistic/jsx/jsx-closing-tag-location': 1,
      '@stylistic/jsx/jsx-wrap-multilines': 1,
      '@stylistic/jsx/jsx-first-prop-new-line': ['error', 'multiline'],
      '@stylistic/jsx/jsx-sort-props': ['error', {
        'callbacksLast': true,
        'shorthandLast': true,
      }],
      '@stylistic/jsx/jsx-curly-newline': 1
    }
  }
];
