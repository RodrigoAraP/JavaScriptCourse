const ficha = { nome: 'Maria', profissao: 'Desenvolvedor de software' }
const venda = { codigo: 11111, preco: 12000 }

function objetoParaArray(obj) { return Object.entries(obj) }

console.log(objetoParaArray(ficha))
console.log(objetoParaArray(venda))