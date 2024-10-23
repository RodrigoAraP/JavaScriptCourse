contador = (vetor) => {
  let maior
  let menor
  let i = 0
  
  while (i < vetor.length) {
    if (maior === undefined && menor === undefined) {
      maior = vetor[i]
      menor = vetor[i]
    } else{
      if (vetor[i] > maior) maior = vetor[i]
      if (vetor[i] < menor) menor = vetor[i]
    }
    i++
  }
  
  return `
  Vetor ${vetor}
  Menor: ${menor}
  Maior: ${maior}`
}

vetor = [2, 3, 5, 1, 7, 9, 63, 56, 8, 2, 86, 76, 5]

console.log(contador(vetor))
