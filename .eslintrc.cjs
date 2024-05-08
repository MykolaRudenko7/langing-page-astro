module.exports = {
  extends: [
    "plugin:astro/recommended",
    "plugin:jsx-a11y/strict",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        project: "./tsconfig.json"
      },
      rules: {}
    }
  ],
  env: {
    node: true
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": "warn",
    "jsx-a11y/anchor-is-valid": "off"
  }
};
