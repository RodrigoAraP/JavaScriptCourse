negativo = (vetor) => {
  neg = 0
  for (i = 0; i < vetor.length; i++) {
    if (vetor[i] < 0) neg ++
  }
  
  return `Tem ${neg} negativos.`
}

vetor = [4,765,321,423,-56,52,0,-5627,-17,32,-66]

console.log(negativo(vetor))