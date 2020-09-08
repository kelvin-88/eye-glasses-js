module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "comma-dangle": [2, "always-multiline"],
    quotes: [0, "double"],
    semi: [2, "always"],
    "space-before-function-paren": 0
  }
};
