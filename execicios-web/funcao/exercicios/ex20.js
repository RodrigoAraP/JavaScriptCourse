function notas(valor) {
    nota100 = nota50 = nota10 = nota5 = nota1 = 0
    while (valor >= 100) {
        valor -= 100
        nota100++
        if (valor < 100)
            console.log(`Nota 100: ${nota100}`)
    }
    while (valor >= 50) {
        valor -= 50
        nota50++
        if (valor < 50)
            console.log(`Nota 50: ${nota50}`)
    }
    while (valor >= 10) {
        valor -= 10
        nota10++
        if (valor < 10)
            console.log(`Nota 10: ${nota10}`)
    }
    while (valor >= 5) {
        valor -= 5
        nota5++
        if (valor < 5)
            console.log(`Nota 5: ${nota5}`)
    }
    while (valor >= 1) {
        valor -= 1
        nota1++
        if (valor < 1)
            console.log(`Nota 1: ${nota1}`)
    }
}

notas(371)