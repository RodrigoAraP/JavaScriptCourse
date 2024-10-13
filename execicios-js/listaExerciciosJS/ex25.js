const buscarPorPalavra = (palavra, array) => array.filter(p => p.includes(palavra))

console.log(buscarPorPalavra("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPorPalavra("java", ["javascript", "java", "c++"]))