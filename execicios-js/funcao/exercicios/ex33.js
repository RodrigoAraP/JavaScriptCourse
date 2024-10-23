let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar (...args) {
  resultado = []
  for (i = 0; i < arguments.length;i++)
    resultado = resultado.concat(arguments[i]) 

  return resultado
}

console.log(concatenar(vetorInteiro,vetorDouble))
console.log(concatenar(vetorInteiro,vetorString))
console.log(concatenar(vetorDouble,vetorString))
console.log(concatenar(vetorInteiro,vetorDouble,vetorString))