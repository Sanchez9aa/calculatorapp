const calculator = require("../components/calculator")

describe("Sum calculator test", () => {

  test("A sum + 0 should return the same value", () => {
    expect(calculator.sum(2,0)).toBe(2)
    expect(calculator.sum(0,2)).toBe(2)
    /* expect(calculator.sum(0,2)).toBe(3) */
  })

  test("2 + 2 should return 4", () => {
    expect(calculator.sum(2,2)).toBe(4)
    /* expect(calculator.sum(2,2)).toBe(3) */
  })

})