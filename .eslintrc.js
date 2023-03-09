module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks'],
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    "react/no-array-index-key": 0,
  },
};