const calculator = require("../components/calculator")

describe("Division calculator test", () => {
  test("A division between 0 should return inifinty", () => {
    expect(calculator.div(1,0)).toBe(Infinity)
    /* expect(calculator.div(1,0)).toBe(0) */
  })

  test("0 divided for any number should return 0", () => {
    expect(calculator.div(0,7)).toBe(0)
    /* expect(calculator.div(0,7)).toBe(7) */
  })

  test("9/3 should return 3", () => {
    expect(calculator.div(9,3)).toBe(3)
    /* expect(calculator.div(9,3)).toBe(4) */
  })
})