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
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    indent: [2, 2],
    'no-promise-executor-return': 'warn',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'warn',
    'no-shadow': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-props-no-spreading': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'never'],
  },
  globals: {
    __IS__DEV__: true,
  },
}
