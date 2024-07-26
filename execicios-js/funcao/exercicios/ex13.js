function semana(dia) {
        switch (dia % 7) {
            case 1:
                return 'Domingo'
            case 2: case 3: case 4: case 5: case 6:
                return 'Dia Útil'
            case 0:
                return 'Sabado'
            default:
                return 'Dia inválido'
        }
}

console.log(semana(791))