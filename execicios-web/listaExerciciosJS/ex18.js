const despesaTotal = (array) =>
  array.map(a => a.preco).reduce((acumulador, atual) => acumulador + atual)

console.log(despesaTotal([
  { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
  { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
]))

console.log(despesaTotal([
  { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
  { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }
]))