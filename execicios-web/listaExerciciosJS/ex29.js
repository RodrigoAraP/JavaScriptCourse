function segundoMaior(array) {
  const crescente = array.sort((a, b) => a - b).reverse()
  return crescente[1]
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))