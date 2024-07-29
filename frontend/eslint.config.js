import { fixupConfigRules } from '@eslint/compat';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import reactRefresh from 'eslint-plugin-react-refresh';
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
            'react-refresh': reactRefresh,
            'simple-import-sort': simpleImportSort,
            '@stylistic/js': stylisticJs
        },
        rules: {
            '@typescript-eslint/no-unused-vars': 'error',
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
            'react-refresh/only-export-components': 'warn',
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            '@stylistic/js/indent': ['error', 2],
            '@stylistic/js/object-curly-spacing': ['error', 'always'],
            '@stylistic/js/no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
            '@typescript-eslint/explicit-function-return-type': 'error',
            'react/react-in-jsx-scope': 'off',
        }
    }
];
