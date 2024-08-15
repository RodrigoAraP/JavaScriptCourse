let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function add(vetorPilha,vetorAdiciona) {
  for (i = 0; i < vetorAdiciona.length; i++) {
    vetorPilha = vetorPilha.concat(vetorAdiciona[i])
  }
  return vetorPilha
}

console.log(add(vetorPilha,vetorAdiciona))