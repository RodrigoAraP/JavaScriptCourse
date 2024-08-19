function impar(inicio = 0, fim = 100) {
    if (inicio > fim) [inicio, fim] = [fim, inicio]
    retorno = [];
    for (i = inicio; i <= fim; i++) {
        if (i % 2 != 0) {
            retorno.push(i)
        }
    }
    console.log(retorno)
}

impar()
impar(200, 2)