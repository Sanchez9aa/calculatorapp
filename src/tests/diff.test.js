const calculator = require("../components/calculator")

describe("Dif calculator test", () => {
  test("A rest between 0 should return the same value", () => {
    expect(calculator.diff(2,0)).toBe(2)
    /* expect(calculator.diff(2,0)).toBe(0) */
  })

  test("0 - a number should return the negative or positive of that number", () => {
    expect(calculator.diff(0,2)).toBe(-2)
    /* expect(calculator.diff(0,2)).toBe(2) */
  })

  test("9-3 should return 6", () => {
    expect(calculator.diff(9,3)).toBe(6)
    /* expect(calculator.diff(9,3)).toBe(4) */
  })
})