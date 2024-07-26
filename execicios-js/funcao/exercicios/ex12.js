function fatorial(numero) {
    fat = 1
    for (i = 2; i <= numero; i++) {
        fat *= i
    }
    console.log(fat)
}

fatorial(9)