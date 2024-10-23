function geradorArray(elemento, quantidade) {
  const retorno = []
  for (i = 0; i < quantidade; i++) retorno.push(elemento)
  return retorno
}

console.log(geradorArray('Codigo', 2))
console.log(geradorArray(7, 3))