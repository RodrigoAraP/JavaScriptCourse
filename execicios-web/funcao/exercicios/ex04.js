function divisao(dividendo, divisor) {
    resto = dividendo
    quociente = 0
    while (divisor <= resto) {
        resto -= divisor
        quociente++
    }
    console.log(`${dividendo} / ${divisor} = ${quociente} 
Resto = ${resto}`)
}

divisao(7, 3)

const div = (dividendo, divisor) => `${dividendo} / ${divisor} = ${Math.floor(dividendo / divisor)} 
Resto = ${dividendo % divisor}`

console.log(div(9, 2))

/*
function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(7, 3)
 */