const contadorCaractere = (caracter, frase) => [...frase].filter(a => a === caracter).length

console.log(contadorCaractere('r', 'A sorte favorece os audazes'))
console.log(contadorCaractere('c', 'Conhece-te a ti mesmo'))