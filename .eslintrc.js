module.exports = {
  "root": true,
  "extends": [
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "react",
    "jsx-a11y",
  ],
  rules: {
    "no-console": "off",
    "@typescript-eslint/indent": ["error", 2],
  }
}