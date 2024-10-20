const gerarNumerosEntre = (min, max, numerosProibios) => {
  if (min > max) [min, max] = [max, min]
  return new Promise((resolve, reject) => {
    const fator = (max - min + 1)
    const aleatorio = parseInt(Math.random() * fator) + min
    if (numerosProibios.includes(aleatorio)) reject('Numero repetido!')
    else resolve(aleatorio)
  })
}

const gerarMegaSena = async (qntdNumeros, tentativa = 1) => {
  try {
    const numeros = []
    for (let _ of Array(qntdNumeros).fill())
      numeros.push(await gerarNumerosEntre(1, 60, numeros))
    return numeros
  } catch (e) {
    if (tentativa > 1) throw 'Nao deu certo chato'
    else return gerarMegaSena(qntdNumeros, tentativa++)
  }
}

gerarMegaSena(6)
  .then(console.log)
  .catch(console.log)
