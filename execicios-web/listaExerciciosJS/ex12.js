function removerPropriedade (objeto, excluir){
  copia = Object.assign({},objeto)
  
  delete copia[excluir]
  console.log(copia)
}

removerPropriedade({a: 1, b: 2}, "a")

array = {a: 1, b: 2}, "a"
console.log(typeof array.a)