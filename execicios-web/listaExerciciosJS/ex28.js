const filtrarPorQuantidadeDeDigitos = (array, qnt) => {
  const resultado = []
  for (i in array)
    if (array[i].toString().length == qnt) resultado.push(array[i])
  return resultado
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))