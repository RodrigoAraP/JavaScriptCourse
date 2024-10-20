const primeiroElemento = elemento => elemento[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise((resolve) => resolve(['Ana', 'Bia', 'Carlos', 'Daniel']))
  .then(primeiroElemento) // Primeiro elemento do Array => [Ana]
  .then(primeiroElemento) // Primeiro elemento de [Ana] => A
  .then(letraMinuscula)
  .then(console.log)