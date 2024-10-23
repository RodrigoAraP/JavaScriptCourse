function multiplicar(numero, multiplicador) {
  retorno = numero
  for (i = 1; i < multiplicador; i++) retorno += numero; return retorno
}

console.log(multiplicar(5,5))
console.log(multiplicar(0,7))
console.log(multiplicar(3,7))