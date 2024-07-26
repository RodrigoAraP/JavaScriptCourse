function feira (fruta) {
    switch (fruta){
        case 'kiwi':
            return  'Estamos com escassez de kiwis'
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
        default: 
            return 'Não vendemos esta fruta aqui'
    }
}

console.log(feira('kiwi'))
console.log(feira('melancia'))
console.log(feira('maça'))