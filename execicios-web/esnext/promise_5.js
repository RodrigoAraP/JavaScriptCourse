const funcionarOuNao = (valor, chanceError) => new Promise((resolve, reject) => {
  try {
    con.log('temp')
    if (Math.random() < chanceError) reject('Ocorreu um erro!')
    else resolve(valor)
  } catch (e) { reject(e) }
})

funcionarOuNao('Testando...', 0.5)
  .then(v => `Valor: ${v}`)
  .then(
    v => consol.log(v),
    err => console.log(`Erro esp.: ${err}`)
  )
  .then(() => console.log('Quase Fim!'))
  .catch(err => console.log(`Erro Geral: ${err}`))
  .then(() => console.log('Fim!'))