const a = 2
const b = 0

describe("What do we receive", () => {
  test("Can not be null", () => {
    expect(a).not.toBeNull()
    expect(b).not.toBeNull()
  })

  test("Can not be undefined", () => {
    expect(a).not.toBeUndefined()
    expect(b).not.toBeUndefined()
  })

  test("Can not be NaN", () => {
    expect(a).not.toBeNaN()
    expect(b).not.toBeNaN()
  })

  test("There must be numbers", () => {
    expect(a).toBeNumber()
    expect(b).toBeNumber()
  })
})