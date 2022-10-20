// eslint-disable-next-line prefer-const
export let x = 1

/**
 * This is an expected error in non-test files.
 */
// eslint-disable-next-line no-undef
it("should be 1", () => {})

