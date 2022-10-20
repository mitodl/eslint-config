module.exports = {
  overrides: [
    {
      files:   ["**/?(*.)+(test|spec).[jt]s?(x)"],
      env: {
        "jest/globals": true
      },
      "extends": ["plugin:jest/recommended"],
      rules: {
        /**
         * We sometimes have custom expectation functions.
         * You can add custom expectations to the rule (including patterns)
         * but without a more helpful error message, let's just turn this off
         * for now.
         */
        "jest/expect-expect": "off",
        /**
         * Conditionals in tests can be confusing. But we fairly often write
         * tests along the lines of `test.each([true, false])` that toggle a
         * particular behavior. Combining the test cases but toggling behavior
         * with `.each` is nice because it highlights what actually controls the
         * change in behavior. However, this can require legitimate uses of
         * conditional expectations.
         * 
         * Rather than littering our tests with "eslint-disable" comments, lets
         * turn this off.
         */
        "jest/no-conditional-expect": "off"
      },
    },
  ],
};