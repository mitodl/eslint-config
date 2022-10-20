module.exports = {
  extends:   ["../index"],
  overrides: [
    {
      files:   ["./jest/*"],
      extends: ["../jest"]
    }
  ]
}
