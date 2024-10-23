function triangulos(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoB == ladoC) {
        return 'Triângulo Equilátero'
    } else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
        return 'Triângulo Escaleno'
    } else {
        return 'Triângulo Isósceles'
    }
}

console.log(triangulos(5,5,5))
console.log(triangulos(5,5,4))
console.log(triangulos(5,4,3))