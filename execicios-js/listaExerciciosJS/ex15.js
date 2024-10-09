const array = [1, 2, 3, 4]
const array2 = [10, 70, 22, 43]


function par(array) {
  return array.filter((numero, indice) => {
    const numeroPar = numero % 2 == 0
    const indicePar = indice % 2 == 0

    return numeroPar && indicePar
  })
}

console.log(par(array))
console.log(par(array2))