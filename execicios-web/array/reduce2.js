const alunos = [
  { nome: 'Joao', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true },
]

// Desafio 1: Todos os alunos sao bolsista?

const bolsista = alunos.map(e => e.bolsista)
const todosBolsista = bolsista.reduce(function (anterior, atual) {
  if (anterior == false || atual == false) return false
  else return true
})
console.log(todosBolsista)

// Desafio 2: Algum aluno e bolsista?

const algumBolsista = bolsista.reduce(function (anterior, atual) {
  if (anterior == true || atual == true) return true
  else return false
})

console.log(algumBolsista)