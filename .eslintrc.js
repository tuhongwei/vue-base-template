// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: "module",
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "standard",
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    quotes: ["error", "single"],
    // 要求每个块有多个声明
    semi: ["error", "always"],
    // 块语句前面加空格
    "space-before-blocks": ["warn", "always"],
    // 对象换行
    "object-curly-newline": ["error", { multiline: true }],
    "object-curly-spacing": ["error", "always"],
    "vue/jsx-uses-vars": 2,
    // allow async-await
    "generator-star-spacing": "off",
    // allow console during development
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
};
