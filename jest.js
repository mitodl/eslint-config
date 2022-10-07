module.exports = {
  overrides: [
    {
      files:   ["**/?(*.)+(test|spec).[jt]s?(x)"],
      env: {
        "jest/globals": true
      },
      "plugins": ["jest"],
      "extends": ["plugin:jest/recommended"],
      rules: {
        /**
         * We sometimes have custom expectation functions.
         * You can add custom expectations to the rule (including patterns)
         * but without a more helpful error message, let's just turn this off
         * for now.
         */
        "jest/expect-expect": "off"
      }
    },
  ],
};