module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
  },
  "extends": [
      "google",
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "key-spacing": ["error", {
      "beforeColon": false,
      "afterColon": true,
      "align": {
        "beforeColon": false,
        "afterColon": true,
        "mode": "minimum",
        "on": "value"
      }
    }],
    "quotes": ["off"], // no opinion on ' vs ", let Prettier decide
    "object-curly-spacing": ["off"], // no opinion, let Prettier decide
    "new-cap": ["off"], // allows function calls like Immutable.Map(...)
    "max-len": ["off"], // no opinion, let Prettier decide
    "indent": ["error", 2],
    "newline-after-var": ["off"],
    "no-unused-vars": [ "error", {
      "vars": "local",
      "argsIgnorePattern": "action"
    }],
    "comma-dangle": ["off"],
    "semi": ["error", "never"],
    "eqeqeq": ["error"],
    "no-var": ["error"],
    "camelcase": ["error", {
      "properties": "never"
    }],
    "guard-for-in": ["error"],
    "prefer-template": ["error"],
    "space-infix-ops": ["error"],
    "space-before-blocks": ["error"],
    "space-in-parens": ["error"],
    "no-throw-literal": ["error"],
    "arrow-parens": ["error", "as-needed"],
    "valid-jsdoc": ["off"],
    "require-jsdoc": ["off"],
    "spaced-comment": ["off"],
    "no-invalid-this": ["off"],
    "one-var": ["error", {
      "uninitialized": "always"
    }],
    "no-multi-spaces": ["off"],
    "prefer-promise-reject-errors": ["off"],
    "quote-props": ["error", "as-needed"],
    "no-prototype-builtins": ["off"],
    "react/jsx-indent-props": ["error", 2], // no tabs, indent is two spaces
    "react/jsx-key": ["error"], // validate that key prop exists
    "react/jsx-no-undef": ["error"], // disallow undeclared variables in JSX
    "react/prop-types": ["off"],
    "react/display-name" : ["off"],
    "react/no-find-dom-node": ["off"],
    "react/no-unescaped-entities": ["off"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
}
