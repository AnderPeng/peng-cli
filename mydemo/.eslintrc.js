module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "standard-with-typescript"
  ],
  overrides: [
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest", // ECMAScript版本
    sourceType: "module",
    ecmafeatures: {
      jsx: true,
      impliedStrict: true
    }
  },
  plugins: [
    "vue"
  ],
  rules: {
    "no-unused-vars": [
      "error",
      { varsIgnorePattern: ".*", args: "none" }
    ],
    eqeqeq: "warn", // 要求使用 `===` 和 `!==`
    curly: "error", // 强制所有控制语句使用一致的括号风格
    quotes: ["error", "double"] // 引号
  }
}
