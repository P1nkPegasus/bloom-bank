module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'no-undef': 'error',
    'no-redeclare': 'error',
    'no-fallthrough': 'error',

    'eqeqeq': ['error', 'always'],
    'no-param-reassign': ['warn', { props: true }],

    'no-var': 'error',
    'prefer-const': ['warn', { destructuring: 'all' }],

    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    'indent': ['error', 2, { SwitchCase: 1 }],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': ['error', 'always'],
    'max-len': ['warn', { code: 100, ignoreComments: true, ignoreStrings: true }],

    'consistent-return': 'warn'
  },
};
