function notas(aluno, nota) {
    if (nota < 37)
        console.log(`Aluno: ${aluno} | Nota: ${nota} | Reprovado.`)
    else 
    console.log(`Aluno: ${aluno} | Nota: ${arredondar(Math.round(nota))} | Aprovado.`)
}

function arredondar(nota) {
    while (nota % 5 >= 3) {
        nota = nota + 1
    }
    return(nota)
}

notas('Rodrigo', 100)
notas('Rodrigo', 30)
notas('Rodrigo', 38)
notas('Rodrigo', 88)
notas('Rodrigo', 61)
