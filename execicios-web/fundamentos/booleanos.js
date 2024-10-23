let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log(`os verdairos...
${!!3}
${!!-1}
${!!' '}
${!![]}
${!!{}}
${!!Infinity}
${!!(isAtivo = true)}
`)


console.log(`os falsos:
${!!0}
${!!''}
${!!null}
${!!NaN}
${!!undefined}
${!!(isAtivo = false)}
`)

console.log(`pra finalizar:
${ !!('' || null || 0 || ' ')}
`)

let nome = ''
console.log(nome || 'Desconhecido')
nome = 'Rodrigo'
console.log(nome || 'Desconhecido')