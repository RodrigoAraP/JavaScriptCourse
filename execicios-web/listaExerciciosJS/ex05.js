//  Ex 05

function comparacao(primeiro, segundo) {
  if (typeof primeiro != typeof segundo) return false 
  return primeiro >= segundo
}

console.log(comparacao(5, 1))