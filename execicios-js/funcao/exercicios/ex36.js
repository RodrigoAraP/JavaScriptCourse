vetor = [1, 2, 3, 4, 5]

funcao1 = (vetor, multiplicador) => {
    let resultado = []
    for (i = 0; i < vetor.length; i++) resultado[i] = vetor[i] * multiplicador
    console.log(resultado)
}

funcao2 = (vetor, multiplicador) => {
    let resultado = []
    for (i = 0; i < vetor.length; i++) 
        if (multiplicador > 5) resultado[i] = vetor[i] * multiplicador
    console.log(resultado)
}

funcao1(vetor, 3)
funcao2(vetor, 11)
funcao2(vetor, 3)