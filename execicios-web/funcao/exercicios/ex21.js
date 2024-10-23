const plano = (idade) => {
    if (idade <= 10) adicional = 80
    else if  (idade <= 30) adicional = 50
    else if  (idade <= 60) adicional = 95
    else adicional = 130
    return `O idade ${idade}, paga R$ ${100 + adicional} pelo plano atual.`
}

console.log(plano(7))
console.log(plano(15))
console.log(plano(60))
console.log(plano(70))
