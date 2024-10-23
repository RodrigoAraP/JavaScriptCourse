const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'

axios.get(url).then(response => { 
  const funcionarios = response.data
  // console.log(funcionarios)
  const ordemSalario = funcionarios.sort((a,b)=> a.salario - b.salario)
  const primeiroElemento = ordemSalario.filter(chineses).filter(mulheres)[0]
  console.log(primeiroElemento)
})