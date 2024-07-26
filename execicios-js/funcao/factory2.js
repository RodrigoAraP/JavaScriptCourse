function criarProduto(nome, preco) {
    return { nome, preco, desconto: 0.1 }
}

const prod1 = criarProduto('Bolsa', 50)

console.log(prod1)
console.log(criarProduto('Caneca', 15))
console.log(criarProduto('Pod', 135))
