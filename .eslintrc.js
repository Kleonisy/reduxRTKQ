module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  globals: {
    __IS__DEV__: true
  },
  overrides: [
    {
      files: ['**src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'i18next',
    'react',
    'react-hooks',
    '@typescript-eslint'
  ],
  rules: {
    'comma-dangle': ['error', {
      arrays: 'never',
      exports: 'never',
      functions: 'never',
      imports: 'never',
      objects: 'never'
    }],
    'function-paren-newline': ['error', 'consistent'],
    'i18next/no-literal-string': [
      'error',
      {
        ignoreAttribute: ['data-testid', 'to'],
        markupOnly: true
      }
    ],
    'implicit-arrow-linebreak': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    indent: [2, 2],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'max-len': ['error', { code: 120 }],
    'no-param-reassign': 'off',
    'no-promise-executor-return': 'warn',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'warn',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-sort-props': ['error', {
      noSortAlphabetically: false
    }],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    semi: ['error', 'never'],
    'sort-keys': 'error'
  }
}
