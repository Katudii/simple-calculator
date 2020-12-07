var { add, multiply } = require("../src/simple_calculator")

describe("add", () => {

    it("should add two intergers 6 and 9", () => {
        expect(add(6, 9)).toEqual(15);
    })

    it("should add three intergers 6,4 and 9", () => {
        expect(add(6, 4, 9)).toEqual(19);
    })

    it("should add four intergers 6,4,5 and 9", () => {
        expect(add(6, 4, 5, 9)).toEqual(24);
    })
})

describe("multiply", () => {

    it("should multiply two intergers 6 and 11", () => {
        expect(multiply(6, 11)).toEqual(66);
    })

    it("should multiply three intergers 6,4 and 11", () => {
        expect(multiply(6, 4, 11)).toEqual(264);
    })

    it("should multiply four intergers 6,4,5 and 11", () => {
        expect(multiply(6, 4, 5, 11)).toEqual(1320);
    })
})