const danf = (cod, qnt = 1) => {
  switch (cod) {
    case 100:
      return `${qnt}x Cachorro Quente: R$ ${3 * qnt}`
    case 200:
      return `${qnt}x Hambúguer Simples: R$ ${4 * qnt}`
    case 300:
      return `${qnt}x Cheeseburguer : R$ ${5, 5 * qnt}`
    case 400:
      return `${qnt}x Bauru: R$ ${7, 5 * qnt}`
    case 500:
      return `${qnt}x Refrigerante: R$ ${3, 5 * qnt}`
    case 600:
      return `${qnt}x Suco: R$ ${2, 8 * qnt}`
    default:
      `Produto ${cod} não encontrado`
  }
}

console.log(danf(100))
console.log(danf(200, 2))
console.log(danf(300, 7))
console.log(danf(400, 3))
console.log(danf(500, 6))
console.log(danf(600, 5))
console.log(danf(700, 8))