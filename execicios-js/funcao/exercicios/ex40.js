conceitos = function (notas) {
    for (i = 0; i < notas.length; i++) {
        switch (Math.floor(notas[i])) {
            case 0: case 1: case 2: case 3: case 4: 
                console.log('D')
                break
            case 5: case 6:
                console.log('C')
                break
            case 7: case 8: 
                console.log('B')
                break
            case 9: case 10:
                console.log('A')
                break
            default:
                console.log('Nota inválida')
        }
    }
}

notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]

conceitos(notas)