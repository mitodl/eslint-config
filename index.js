module.exports = {
  "parser": "babel-eslint",
  "extends": [
      "google",
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended"
  ],
  "rules": {
    "key-spacing": [2, {
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
    "react/jsx-indent-props": [2, 2], // no tabs, indent is two spaces
    "react/jsx-key": [2], // validate that key prop exists
    "react/jsx-no-undef": [2], // disallow undeclared variables in JSX
    "react/prop-types": [0],
    "react/display-name" : [0],
    "react/no-find-dom-node": [0],
    "react/no-unescaped-entities": [0],
    "no-unused-vars": [ 2, {
      "vars": "local",
      "argsIgnorePattern": "action"
    }],
    "comma-dangle": [0],
    "semi": [2, "never"],
    "eqeqeq": [2],
    "no-var": [2],
    "camelcase": [2, {
      "properties": "never"
    }],
    "guard-for-in": [2],
    "prefer-template": [2],
    "space-infix-ops": [2],
    "space-before-blocks": [2],
    "space-in-parens": [2],
    "no-throw-literal": [2],
    "arrow-parens": [2, "as-needed"],
    "valid-jsdoc": 0,
    "require-jsdoc": 0,
    "spaced-comment": 0,
    "no-invalid-this": 0,
    "one-var": [2, {
      "uninitialized": "always"
    }],
    "no-multi-spaces": 0,
    "prefer-promise-reject-errors": 0,
    "quote-props": [2, "as-needed"],
    "no-prototype-builtins": [0],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
  },
  "plugins": [
    "react",
    "react-hooks"
  ]
}
