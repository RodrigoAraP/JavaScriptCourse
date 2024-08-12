medida = (alturaA, crescimentoA, alturaB, crescimentoB) => {
  ano = 0
  if (alturaA > alturaB && crescimentoB > crescimentoA){
    while (alturaB < alturaA) {
      alturaA += crescimentoA
      alturaB += crescimentoB
      ano++
    }

    return `Em ${ano} ano a criança menor ficará maior que a outra criança`
  }

  else if (alturaA < alturaB && crescimentoB < crescimentoA){
    while (alturaA < alturaB) {
      alturaA += crescimentoA
      alturaB += crescimentoB
      ano++
    }

    return `Em ${ano} ano a criança menor ficará maior que a outra criança`
  }

  else if (alturaA == alturaB)
    if (crescimentoA > crescimentoB) return "A primeira criança será maior"
    else if (crescimentoA < crescimentoB) return "A segunda criança será maior"
    else return "As duas crianças seram do mesmo tamanho"

  else {
    return `A criança menor não irá passar a maior`
  }
}

console.log(medida(151, 2, 150, 1))