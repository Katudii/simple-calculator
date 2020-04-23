describe("Calculate",()=>{
    var add  = require("../src/simple_calculator")
    var multiply  = require("../src/simple_calculator")

    it("should add two intergers 6 and 9"),()=>{
        expect(add(6,9)).toEqual(15)
    }

    it("should multiply two intergers 6 and 11"),()=>{
        expect(multiply(6,11)).toEqual(66)
    }
})