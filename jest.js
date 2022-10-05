module.exports = {
  overrides: [
    {
      files:   ["**/?(*.)+(test).[jt]s?(x)"],
      env: {
        "jest/globals": true
      },
      "plugins": ["jest"],
      "extends": ["plugin:jest/recommended"],
    },
  ],
};