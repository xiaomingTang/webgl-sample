const path = require("path")
const Paths = require("./config/paths")

module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": 6
  },
  "extends": [
    "eslint:recommended",
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true
    }
  },
  rules: {
    // 便于调试, 所以允许console
    "no-console": "off",
    // scss自动生成的scss.d.ts没有使用default, 同时一些utils可能从语义上来说没有default导出, 所以关闭
    "import/prefer-default-export": "off",
    // window风格的换行(而非unix)
    "linebreak-style": ["error", "windows"],
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "@typescript-eslint/indent": ["error", 2],
    "semi": ["error", "never"],
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": path.resolve(Paths.Root, "config", "webpack.common.config.js")
      }
    },
    "react": {
      "version": "detect",
    }
  },
}