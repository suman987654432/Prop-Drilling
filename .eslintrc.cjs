import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default {
  ignores: ['dist'], // Correctly specify ignored paths
  overrides: [
    {
      files: ['**/*.{js,jsx}'], // Apply settings to JS and JSX files
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser, // Use browser-specific globals
        parserOptions: {
          ecmaVersion: 'latest',
          ecmaFeatures: { jsx: true },
          sourceType: 'module',
        },
      },
      settings: {
        react: {
          version: 'detect', // Auto-detect React version
        },
      },
      plugins: {
        react, // Add React plugin
        'react-hooks': reactHooks, // Add React Hooks plugin
        'react-refresh': reactRefresh, // Add React Refresh plugin
      },
      rules: {
        ...js.configs.recommended.rules, // Include ESLint recommended rules
        ...react.configs.recommended.rules, // Include React recommended rules
        ...react.configs['jsx-runtime'].rules, // Include rules for JSX runtime
        ...reactHooks.configs.recommended.rules, // Include React Hooks recommended rules
        'react/jsx-no-target-blank': 'off', // Disable specific rule
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true }, // Configure React Refresh rule
        ],
      },
    },
  ],
};
