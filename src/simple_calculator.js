const add = (...nums) => {
    return nums.reduce((acc, el) => { return acc + el })
}

const multiply = (...nums) => {
    return nums.reduce((acc, el) => { return acc * el }, 1)
}

module.exports = { add, multiply }