
let contador = () => {
  vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
  dentro = fora = 0
  for (i = 0; i < vetor.length; i++) {
    if (vetor[i] >= 10 && vetor[i] <= 20) dentro++
    else fora++
  }
  return `
  Tem ${dentro} numeros entre 10 e 20 fora do vetor
  Tem ${fora} numeros fora de 10 e 20 dentro do vetor`
}

console.log(contador())