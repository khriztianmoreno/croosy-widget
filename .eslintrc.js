module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    graphql: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'semi': [2, 'never'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
  },
  settings: {
    'import/extensions': [
      '.js',
      '.jsx'
    ],
    'import/resolver': {
      alias: [
        ['@', './src']
      ],
    },
  }
};
