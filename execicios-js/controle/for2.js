const notas = [6.7, 7.4, 9.8, 7.7]

for (let i in notas) {
    console.log(`${i + 1}º notas = ${notas[i]}`)
}

const pessoa = {
    Nome: 'Ana',
    Sobrenome: 'Silva',
    Idade: 20,
    Peso: 49
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
