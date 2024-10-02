vetorPilha = [1, 2, 3, 4, 5]
vetorAdiciona = [6, 7, 8, 9, 10]

function vetores(vetorPilha, vetorAdiciona) {
    for (i = 0; i < vetorAdiciona.length; i++) {
        vetorPilha.push(vetorAdiciona[i])
    }
    console.log(`Vetor Pilha: ${vetorPilha}`)
}

vetores(vetorPilha, vetorAdiciona)

