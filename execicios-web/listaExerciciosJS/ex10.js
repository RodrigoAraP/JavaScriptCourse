function contador(numero) {
  string = ''
  for (i = 0; i < numero; i++){
    string += '+'
  }
  return string
}

console.log(contador(2))
console.log(contador(4))