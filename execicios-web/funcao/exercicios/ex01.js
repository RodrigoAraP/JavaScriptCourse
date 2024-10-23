function soma(val1 = 0, val2 = 0) {
    console.log(`${val1} + ${val2} = ${val1 + val2}`)
}
soma(5, 10)

const subtracao = (val1 = 0, val2 = 0) => `${val1} - ${val2} = ${val1 - val2}`
console.log(subtracao(10, 5))

function multDiv(val1 = 1, val2 = 1, div) {
    if (div == null)
        return `${val1} x ${val2} = ${val1 * val2}`
    else
        return `${val1} / ${val2} = ${val1 / val2}`
}

console.log(multDiv(9, 3))
console.log(multDiv(9, 3, true))

const operacoes = (val1,val2) =>{
    return `    ${val1} + ${val2} = ${val1 + val2}
    ${val1} - ${val2} = ${val1 - val2}
    ${val1} x ${val2} = ${val1 * val2}
    ${val1} / ${val2} = ${val1 / val2}`
}

console.log(operacoes(5,4))