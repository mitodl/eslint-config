{
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "globals": {},
  "parser": "/Users/cchudzicki/dev/eslint-config/node_modules/babel-eslint/lib/index.js",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react-hooks",
    "react"
  ],
  "rules": {
    "key-spacing": [
      2,
      {
        "beforeColon": false,
        "afterColon": true,
        "align": {
          "beforeColon": false,
          "afterColon": true,
          "mode": "minimum",
          "on": "value"
        }
      }
    ],
    "quotes": [
      "off",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "object-curly-spacing": [
      "off"
    ],
    "new-cap": [
      "off"
    ],
    "max-len": [
      "off",
      {
        "code": 80,
        "tabWidth": 2,
        "ignoreUrls": true,
        "ignorePattern": "goog.(module|require)"
      }
    ],
    "indent": [
      "error",
      2
    ],
    "newline-after-var": [
      "off"
    ],
    "react/jsx-indent-props": [
      2,
      2
    ],
    "react/jsx-key": [
      2
    ],
    "react/jsx-no-undef": [
      2
    ],
    "react/prop-types": [
      0
    ],
    "react/display-name": [
      0
    ],
    "react/no-find-dom-node": [
      0
    ],
    "react/no-unescaped-entities": [
      0
    ],
    "no-unused-vars": [
      2,
      {
        "vars": "local",
        "argsIgnorePattern": "action"
      }
    ],
    "comma-dangle": [
      0,
      "always-multiline"
    ],
    "no-unreachable": [
      2
    ],
    "semi": [
      2,
      "never"
    ],
    "eqeqeq": [
      2
    ],
    "no-var": [
      2
    ],
    "camelcase": [
      2,
      {
        "properties": "never",
        "ignoreDestructuring": false,
        "ignoreImports": false,
        "ignoreGlobals": false
      }
    ],
    "guard-for-in": [
      2
    ],
    "prefer-template": [
      2
    ],
    "space-infix-ops": [
      2
    ],
    "space-before-blocks": [
      2
    ],
    "space-in-parens": [
      2
    ],
    "no-throw-literal": [
      2
    ],
    "arrow-parens": [
      2,
      "as-needed"
    ],
    "valid-jsdoc": [
      0,
      {
        "requireParamDescription": false,
        "requireReturnDescription": false,
        "requireReturn": false,
        "prefer": {
          "returns": "return"
        },
        "requireReturnType": true,
        "requireParamType": true
      }
    ],
    "require-jsdoc": [
      0,
      {
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true,
          "ArrowFunctionExpression": false,
          "FunctionExpression": false
        }
      }
    ],
    "spaced-comment": [
      0,
      "always"
    ],
    "no-invalid-this": [
      0
    ],
    "one-var": [
      2,
      {
        "uninitialized": "always"
      }
    ],
    "no-multi-spaces": [
      0
    ],
    "prefer-promise-reject-errors": [
      0
    ],
    "quote-props": [
      2,
      "as-needed"
    ],
    "no-prototype-builtins": [
      0
    ],
    "react-hooks/rules-of-hooks": [
      "error"
    ],
    "react-hooks/exhaustive-deps": [
      "warn"
    ],
    "react/jsx-no-comment-textnodes": [
      2
    ],
    "react/jsx-no-duplicate-props": [
      2
    ],
    "react/jsx-no-target-blank": [
      2
    ],
    "react/jsx-uses-react": [
      2
    ],
    "react/jsx-uses-vars": [
      2
    ],
    "react/no-children-prop": [
      2
    ],
    "react/no-danger-with-children": [
      2
    ],
    "react/no-deprecated": [
      2
    ],
    "react/no-direct-mutation-state": [
      2
    ],
    "react/no-is-mounted": [
      2
    ],
    "react/no-render-return-value": [
      2
    ],
    "react/no-string-refs": [
      2
    ],
    "react/no-unknown-property": [
      2
    ],
    "react/no-unsafe": [
      0
    ],
    "react/react-in-jsx-scope": [
      2
    ],
    "react/require-render-return": [
      2
    ],
    "constructor-super": [
      "error"
    ],
    "for-direction": [
      "error"
    ],
    "getter-return": [
      "error"
    ],
    "no-async-promise-executor": [
      "error"
    ],
    "no-case-declarations": [
      "error"
    ],
    "no-class-assign": [
      "error"
    ],
    "no-compare-neg-zero": [
      "error"
    ],
    "no-cond-assign": [
      "error"
    ],
    "no-const-assign": [
      "error"
    ],
    "no-constant-condition": [
      "error"
    ],
    "no-control-regex": [
      "error"
    ],
    "no-debugger": [
      "error"
    ],
    "no-delete-var": [
      "error"
    ],
    "no-dupe-args": [
      "error"
    ],
    "no-dupe-class-members": [
      "error"
    ],
    "no-dupe-else-if": [
      "error"
    ],
    "no-dupe-keys": [
      "error"
    ],
    "no-duplicate-case": [
      "error"
    ],
    "no-empty": [
      "error"
    ],
    "no-empty-character-class": [
      "error"
    ],
    "no-empty-pattern": [
      "error"
    ],
    "no-ex-assign": [
      "error"
    ],
    "no-extra-boolean-cast": [
      "error"
    ],
    "no-extra-semi": [
      "error"
    ],
    "no-fallthrough": [
      "error"
    ],
    "no-func-assign": [
      "error"
    ],
    "no-global-assign": [
      "error"
    ],
    "no-import-assign": [
      "error"
    ],
    "no-inner-declarations": [
      "error"
    ],
    "no-invalid-regexp": [
      "error"
    ],
    "no-irregular-whitespace": [
      "error"
    ],
    "no-misleading-character-class": [
      "error"
    ],
    "no-mixed-spaces-and-tabs": [
      "error"
    ],
    "no-new-symbol": [
      "error"
    ],
    "no-obj-calls": [
      "error"
    ],
    "no-octal": [
      "error"
    ],
    "no-redeclare": [
      "error"
    ],
    "no-regex-spaces": [
      "error"
    ],
    "no-self-assign": [
      "error"
    ],
    "no-setter-return": [
      "error"
    ],
    "no-shadow-restricted-names": [
      "error"
    ],
    "no-sparse-arrays": [
      "error"
    ],
    "no-this-before-super": [
      "error"
    ],
    "no-undef": [
      "error"
    ],
    "no-unexpected-multiline": [
      "error"
    ],
    "no-unsafe-finally": [
      "error"
    ],
    "no-unsafe-negation": [
      "error"
    ],
    "no-unused-labels": [
      "error"
    ],
    "no-useless-catch": [
      "error"
    ],
    "no-useless-escape": [
      "error"
    ],
    "no-with": [
      "error"
    ],
    "require-yield": [
      "error"
    ],
    "use-isnan": [
      "error"
    ],
    "valid-typeof": [
      "error"
    ],
    "curly": [
      2,
      "multi-line"
    ],
    "no-caller": [
      2
    ],
    "no-extend-native": [
      2
    ],
    "no-extra-bind": [
      2
    ],
    "no-multi-str": [
      2
    ],
    "no-new-wrappers": [
      2
    ],
    "array-bracket-newline": [
      0
    ],
    "array-bracket-spacing": [
      2,
      "never"
    ],
    "array-element-newline": [
      0
    ],
    "block-spacing": [
      2,
      "never"
    ],
    "brace-style": [
      2
    ],
    "comma-spacing": [
      2
    ],
    "comma-style": [
      2
    ],
    "computed-property-spacing": [
      2
    ],
    "eol-last": [
      2
    ],
    "func-call-spacing": [
      2
    ],
    "keyword-spacing": [
      2
    ],
    "linebreak-style": [
      2
    ],
    "no-array-constructor": [
      2
    ],
    "no-multiple-empty-lines": [
      2,
      {
        "max": 2
      }
    ],
    "no-new-object": [
      2
    ],
    "no-tabs": [
      2
    ],
    "no-trailing-spaces": [
      2
    ],
    "operator-linebreak": [
      2,
      "after"
    ],
    "padded-blocks": [
      2,
      "never"
    ],
    "semi-spacing": [
      2
    ],
    "space-before-function-paren": [
      2,
      {
        "asyncArrow": "always",
        "anonymous": "never",
        "named": "never"
      }
    ],
    "switch-colon-spacing": [
      2
    ],
    "generator-star-spacing": [
      2,
      "after"
    ],
    "prefer-const": [
      2,
      {
        "destructuring": "all",
        "ignoreReadBeforeAssign": false
      }
    ],
    "prefer-rest-params": [
      2
    ],
    "prefer-spread": [
      2
    ],
    "rest-spread-spacing": [
      2
    ],
    "yield-star-spacing": [
      2,
      "after"
    ]
  },
  "settings": {},
  "ignorePatterns": []
}
