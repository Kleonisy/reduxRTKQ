module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'function-paren-newline': ['error', 'consistent'],
    'implicit-arrow-linebreak': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    indent: [2, 2],
    'no-promise-executor-return': 'warn',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'warn',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-props-no-spreading': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    semi: ['error', 'never'],
    'sort-keys': 'error',
  },
  globals: {
    __IS__DEV__: true,
  },
}
