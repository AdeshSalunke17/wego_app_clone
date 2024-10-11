import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: { ...globals.browser, test: "readonly", expect: "readonly", beforeEach: "readonly", afterEach: "readonly", describe: "readonly", it: "readonly" } }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // Disable the rule that enforces React to be in scope
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unused-vars": "off",
      "react/no-unescaped-entities": "off",
      "react/jsx-key": "off"
    },
  },
];
