function parametro(numero, minimo, maximo, inclusivo = false) {
  // if (numero > minimo && numero < maximo) return true
  // else if (inclusivo == true && numero >= minimo && numero <= maximo) return true
  // else return false

  return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}

console.log(parametro(10, 50, 100))
console.log(parametro(16, 100, 160))
console.log(parametro(3, 3, 150))
console.log(parametro(3, 3, 150, true))