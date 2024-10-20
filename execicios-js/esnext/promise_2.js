// setTimeout(() => {
//   console.log('Executando callback...')

//   setTimeout(() => {
//     console.log('Executando callback...')

//     setTimeout(() => {
//       console.log('Executando callback...')

//     }, 2000)
//   }, 2000)
// }, 2000)

const esperarPor = (tempo = 2000) => new Promise((resolver) => {
  setTimeout(function () {
    console.log('Executando promise...')
    resolver()
  }, tempo)
})

esperarPor()
  .then(() => esperarPor())
  .then(esperarPor)
