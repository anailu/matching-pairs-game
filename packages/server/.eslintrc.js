module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    serviceworker: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-var-requires': 'off',
    'no-restricted-globals': [
      'error',
      {
        name: 'self',
        message: "Use the global 'self' in service worker context",
      },
    ],
  },
  ignorePatterns: ['dist/'],
};
