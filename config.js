{
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "globals": {},
  "parser": "/Users/cchudzicki/dev/eslint-config/node_modules/@typescript-eslint/parser/dist/index.js",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "@typescript-eslint",
    "react-hooks",
    "react"
  ],
  "rules": {
    "key-spacing": [
      "error",
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
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "argsIgnorePattern": "action"
      }
    ],
    "comma-dangle": [
      "off",
      "always-multiline"
    ],
    "semi": [
      "error",
      "never"
    ],
    "eqeqeq": [
      "error"
    ],
    "no-var": [
      "error"
    ],
    "camelcase": [
      "error",
      {
        "properties": "never",
        "ignoreDestructuring": false,
        "ignoreImports": false,
        "ignoreGlobals": false
      }
    ],
    "guard-for-in": [
      "error"
    ],
    "prefer-template": [
      "error"
    ],
    "space-infix-ops": [
      "error"
    ],
    "space-before-blocks": [
      "error"
    ],
    "space-in-parens": [
      "error"
    ],
    "no-throw-literal": [
      "error"
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "valid-jsdoc": [
      "off",
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
      "off",
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
      "off",
      "always"
    ],
    "no-invalid-this": [
      "off"
    ],
    "one-var": [
      "error",
      {
        "uninitialized": "always"
      }
    ],
    "no-multi-spaces": [
      "off"
    ],
    "prefer-promise-reject-errors": [
      "off"
    ],
    "quote-props": [
      "error",
      "as-needed"
    ],
    "no-prototype-builtins": [
      "off"
    ],
    "react/jsx-indent-props": [
      "error",
      2
    ],
    "react/jsx-key": [
      "error"
    ],
    "react/jsx-no-undef": [
      "error"
    ],
    "react/prop-types": [
      "off"
    ],
    "react/display-name": [
      "off"
    ],
    "react/no-unescaped-entities": [
      "off"
    ],
    "@typescript-eslint/adjacent-overload-signatures": [
      "error"
    ],
    "@typescript-eslint/ban-ts-comment": [
      "error"
    ],
    "@typescript-eslint/ban-types": [
      "error"
    ],
    "no-array-constructor": [
      "off"
    ],
    "@typescript-eslint/no-array-constructor": [
      "error"
    ],
    "no-empty-function": [
      "off"
    ],
    "@typescript-eslint/no-empty-function": [
      "error"
    ],
    "@typescript-eslint/no-empty-interface": [
      "error"
    ],
    "@typescript-eslint/no-explicit-any": [
      "warn"
    ],
    "@typescript-eslint/no-extra-non-null-assertion": [
      "error"
    ],
    "no-extra-semi": [
      "off"
    ],
    "@typescript-eslint/no-extra-semi": [
      "error"
    ],
    "@typescript-eslint/no-inferrable-types": [
      "error"
    ],
    "no-loss-of-precision": [
      "off"
    ],
    "@typescript-eslint/no-loss-of-precision": [
      "error"
    ],
    "@typescript-eslint/no-misused-new": [
      "error"
    ],
    "@typescript-eslint/no-namespace": [
      "error"
    ],
    "@typescript-eslint/no-non-null-asserted-optional-chain": [
      "error"
    ],
    "@typescript-eslint/no-non-null-assertion": [
      "warn"
    ],
    "@typescript-eslint/no-this-alias": [
      "error"
    ],
    "@typescript-eslint/no-unnecessary-type-constraint": [
      "error"
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn"
    ],
    "@typescript-eslint/no-var-requires": [
      "error"
    ],
    "@typescript-eslint/prefer-as-const": [
      "error"
    ],
    "@typescript-eslint/prefer-namespace-keyword": [
      "error"
    ],
    "@typescript-eslint/triple-slash-reference": [
      "error"
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
    "react/no-find-dom-node": [
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
    "no-unreachable": [
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
