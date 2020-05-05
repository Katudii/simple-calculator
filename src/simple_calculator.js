function add() {
    let sum = 0
    for (let x = 0; x < arguments.length; x++) {
        sum += arguments[x]
    }

    return sum
}

function multiply() {
    let sum = 1
    for (let x = 0; x < arguments.length; x++) {
        sum *= arguments[x]
    }

    return sum
}

module.exports ={add , multiply}