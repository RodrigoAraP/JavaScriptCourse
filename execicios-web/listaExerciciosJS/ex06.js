// Ex 06 

function inverso (tipo) {
  if (typeof tipo == 'boolean') return !tipo
  else if (typeof tipo == 'number') return tipo * -1
  else return `booleano ou numero esperado, mas o parametro e do tipo ${typeof tipo}`
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(54))
console.log(inverso(-54))
console.log(inverso('54'))