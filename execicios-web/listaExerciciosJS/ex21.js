function menorNumero(array) {
  let menor = array[0]
  for (i in array) if (menor > array[i]) menor = array[i]
  return menor
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))