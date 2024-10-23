const consoante = (frase) => {
  const vogais = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
  vogais.forEach(vogal => frase = frase.replace(vogal, ''))
  return frase
}

console.log(consoante("Cod3r"))
console.log(consoante("Fundamentos"))
