const esperarPor = (tempo = 2000) => new Promise((resolver) => setTimeout(() => resolver(), tempo))

// esperarPor(2000)
//   .then(() => console.log('Executando promise 1...'))
//   .then(esperarPor)
//   .then(() => console.log('Executando promise 2...'))
//   .then(esperarPor)
//   .then(() => console.log('Executando promise 3...'))

const retornarValor = () => new Promise(resolver => setTimeout(() => resolver(10), 5000))
const retornarValorRapido = async () => 20

const executar = async () => {
  let valor = await retornarValorRapido()
  await esperarPor(1500)
  console.log(`Async/Await ${valor}...`)
  await esperarPor(1500)
  console.log(`Async/Await ${valor + 1}...`)
  await esperarPor(1500)
  console.log(`Async/Await ${valor + 2}...`)

  return valor + 3
}

const executarDeVerdade = async () => {
  const valor = await executar()
  console.log(valor)
}

executarDeVerdade()
