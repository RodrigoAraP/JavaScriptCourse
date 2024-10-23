function arredondar(valor){
    return `R$ ${valor.toFixed(2).replace('.',',')}`
}

console.log(arredondar(0.1+0.2))