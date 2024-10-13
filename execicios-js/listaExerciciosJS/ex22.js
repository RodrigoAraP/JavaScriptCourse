const sorteado = (numero) => {
  const sorteado = Math.floor(Math.random() * 10) + 1
  if (numero == sorteado) return `Parabéns! O número sorteado foi o ${sorteado}`
  else return `Que pena! O número sorteado foi o ${sorteado}`
}

console.log(sorteado(3))
console.log(sorteado(3))
console.log(sorteado(3))
console.log(sorteado(3))
console.log(sorteado(3))
console.log(sorteado(3))
console.log(sorteado(3))
console.log(sorteado(3))
console.log(sorteado(3))
console.log(sorteado(3))
