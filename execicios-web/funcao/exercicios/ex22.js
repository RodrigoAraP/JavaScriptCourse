function anuidade(valor, mes) {
    if (mes > 0 && mes < 13)
        return (valor = valor * (1 + (mes - 1) * 0.05)).toFixed(2)
    else
        return "Anuidade inspirado."
}

console.log(anuidade(1000, 12))

