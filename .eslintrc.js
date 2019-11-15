module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        semi: false,
      },
    ],
  },
  globals: {
    $nuxt: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
