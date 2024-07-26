function calcularNota (ra,nota1,nota2,nota3){
    if (nota1 > nota2 && nota1 > nota3)
        media = (nota1*4 + nota2*3 + nota3*3)/10
    else if (nota2 > nota1 && nota2 > nota3)
        media = (nota2*4 + nota1*3 + nota3*3)/10
    else if (nota3 > nota1 && nota3 > nota2)
        media = (nota3*4 + nota1*3 + nota2*3)/10
    
    condicao = (media >= 5) ? 'APROVADO' : 'REPROVADO'

    return `
    RA: ${ra} - ${condicao}
    1º Nota: ${nota1}
    2º Nota: ${nota2}
    3º Nota: ${nota3}
    Media: ${media}
`
}

console.log(calcularNota(5,6,5,5))

function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`
    Código do Aluno: ${codAluno}. 
    Notas: ${nota1}, ${nota2}, ${nota3}.  
    [${mediaFinal}]  ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)

}

calcularNotaFinal(123, 6, 5, 5)
