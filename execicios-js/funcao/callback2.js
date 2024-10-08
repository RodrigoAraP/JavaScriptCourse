const { checkPrimeSync } = require("crypto")

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback

let notasBaixas = []
for(let nota in notas){
    if(notas[nota] < 7){
        notasBaixas.push(notas[nota])
    }
}

console.log(notasBaixas)

// com callback
notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)