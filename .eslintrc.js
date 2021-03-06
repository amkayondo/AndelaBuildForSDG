module.exports = {
  "parser": "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "comma-dangle": ["error", "never"],
    "no-param-reassign": ["error", { "props": false }],
    "quotes": [1, "double", { "avoidEscape": true }],
    "no-console": 0,
    "no-unused-vars": 0,
    "class-methods-use-this": 0,
    "no-param-reassign": 0
  },
};