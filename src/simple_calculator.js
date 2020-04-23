function add (){
    let sum = 0
    for(let x=0;x<arguments.length;x++){
        sum+=arguments[x]
    }

    return sum
}

function multiply (){
    let sum = 1
    for(let x=0;x<arguments.length;x++){
        sum*=arguments[x]
    }

    return sum
}

console.log(add(3,5,4,6))
console.log(multiply(3,5,4,6))

module.exports =add
module.exports =multiply