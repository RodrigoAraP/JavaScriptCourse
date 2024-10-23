const elevado = (base, expoente = 1, resultado = base) => {
    for (i = 1; i < expoente; i++) {
        resultado = resultado * base
    }
//resultado = base ** expoente -> Operador de pontencia **
    return resultado
}

console.log(elevado(5,3))
console.log(Math.pow(5,3))//Metodo da biblioteca Math