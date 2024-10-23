const fs = require('fs')

const path = require('path')
const caminho = path.join(__dirname, 'dados.txt')

const lerArquivo = caminho => new Promise(resolve =>
  fs.readFile(caminho, (_, conteudo) => resolve(conteudo.toString())))

lerArquivo(caminho)
  .then(conteudo => conteudo.split('\n'))
  .then(linhas => linhas.join(','))
  .then(conteudo => `O valor final e: ${conteudo}`)
  .then(console.log)