media = (numeros) => {
  soma = 0
  for(i=0;i<numeros.length;i++)
    soma += numeros[i]

  return `Media: ${soma/numeros.length}`
}

numeros = [1, 2, 3, 4, 5]

console.log(media(numeros))