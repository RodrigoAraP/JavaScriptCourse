// nao aceita repeticao/nao indexada
const times = new Set()
times.add('Atletico-MG')
times.add('Vasco').add('Palmeiras').add('Gremio')
times.add('Flamengo')
times.add('Atletico-MG')

console.log(times)
console.log(times.size)
console.log(times.has('atletico-MG'))
console.log(times.has('Atletico-MG'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)