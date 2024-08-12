function parImpar() {
  lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  par = impar = i = 0

  while (i < lista.length) {
    if (lista[i] % 2) par++
    else impar++
    i++
  }

  return `
  ${par} são pares
  ${impar} são impares`
}

console.log(parImpar())