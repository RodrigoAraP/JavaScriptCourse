const calcularMedia = (array) => array.reduce((acumulador, atual) => acumulador + atual) / array.length

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))