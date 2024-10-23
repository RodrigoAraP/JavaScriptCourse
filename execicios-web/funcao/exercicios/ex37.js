pA = (n, a1, r) => {
    let soma = 0
    console.log(`
PA
an = a1 + (n - 1) * r
a1: ${a1} 
n: ${n} 
r: ${r}
`)

    for (i = 1; i <= n; i++) {
        an = a1 + (i - 1) * r
        soma = soma + an
        console.log(`a${i}: ${an} | Soma${i}: ${soma}`)
    }

}

pG = (n, a1, r) => {
    let soma = 0
    console.log(`
PG
an = a1 * r^(n-1)
a1: ${a1} 
n: ${n} 
r: ${r}
`)

    for (i = 1; i <= n; i++) {
        an = a1 * r ** (i - 1)
        soma = soma + an
        console.log(`a${i}: ${an} | Soma${i}: ${soma}`)
    }
}


pA(10, 10, 15)
pG(10, 5, 3)