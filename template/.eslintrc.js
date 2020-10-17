module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: "16.14",
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  rules: {
    "no-else-return": "error",
    "no-lonely-if": "error",
    "no-self-compare": "error",
    "no-void": "error",

    "no-restricted-syntax": [
      "error",
      "TSEnumDeclaration",
      "TSInterfaceDeclaration",
    ],
    "@typescript-eslint/no-explicit-any": "error",

    "react/prop-types": "off",

    "react/jsx-curly-brace-presence": "error",
    "react/self-closing-comp": "error",
    "react-hooks/exhaustive-deps": "error",
  },
};
