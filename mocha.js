module.exports = {
  env: {
    mocha: true
  },
  rules: {
    "mocha/no-exclusive-tests": [2],
    "mocha/no-skipped-tests": [2],
    "mocha/no-sibling-hooks": [2],
    "mocha/no-global-tests": [2],
    "mocha/handle-done-callback": [2],
    "mocha/no-top-level-hooks": [2],
    "mocha/no-identical-title": [2],
    "mocha/no-nested-tests": [2],
  },
  plugins: [
    "mocha",
  ]
};