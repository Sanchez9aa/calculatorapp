const calculator = require("../components/calculator")

describe("Multiplication calculator test", () => {
  test("A multiplication between 0 should return 0", () => {
    expect(calculator.mult(1,0)).toBe(0)
    expect(calculator.mult(0,4)).toBe(0)
    /* expect(calculator.mult(0,4)).toBe(1) */
  })

  test("A number multiplied by 1 should return the same number", () => {
    expect(calculator.mult(1,7)).toBe(7)
    expect(calculator.mult(5,1)).toBe(5)
    /* expect(calculator.mult(3,1)).toBe(1) */
  })

  test("2*2 should return 4", () => {
    expect(calculator.mult(2,2)).toBe(4)
    /* expect(calculator.mult(2,2)).toBe(5) */
  })
})