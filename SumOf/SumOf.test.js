
const testing = require("./SumOf.js")
const tester = new testing

test('10 and 5 makes 15', () => {
    expect(tester.SumOf(10, 5)).toBe(15)
})

test('Should be only numbers', () => {
    expect(tester.SumOf("a",1)).toBe("not right")
})

test('Both have a value', () => {
    expect(tester.SumOf("")).toBe("not right")
})

test('Isnt boolean', () => {
    expect(tester.SumOf(true, false)).toBe("not right")
})

test('Exact', () => {
    expect(tester.SumOf(0.9999999999999999, 1)).toBe(2)
})

