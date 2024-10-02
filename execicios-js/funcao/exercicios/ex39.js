let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

function reverter(vetorA, vetorB) {
    for (i = 0; i < vetorA.length; i++) {
        [vetorA[i], vetorB[i]] = [vetorB[i], vetorA[i]]
    }
    console.log(vetorA, vetorB)
}

reverter(vetorA, vetorB)