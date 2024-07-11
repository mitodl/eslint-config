module.exports = {
  "parser": "@babel/eslint-parser",
  plugins: [
    "flowtype",
    "flow-vars",
  ],
  rules: {
    "flow-vars/define-flow-type": ["error"],
    "flow-vars/use-flow-type": ["error"],
    "flowtype/space-after-type-colon": ["off"],
    "flowtype/space-before-type-colon": ["error", "never"],
    "flowtype/generic-spacing": ["error", "never"],
    "flowtype/no-dupe-keys": ["error"],
    "flowtype/no-primitive-constructor-types": ["error"],
    "flowtype/object-type-delimiter": ["error", "comma"],
  }
}