import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];

module.exports = {
    env: {
        mocha: true, // Recognize Mocha globals
        browser: true, // or node, depending on your environment
    },
    // Other ESLint configurations...
};
