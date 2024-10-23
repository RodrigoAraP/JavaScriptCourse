const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raqueal']

// const forEach2 = (array) => {
//     for (i = 0; i < array.length; i++) {
//         nome = array[i]
//         indice = i
//         console.log(`${indice + 1}. ${nome}`)
//     }
// }

// forEach2(aprovados)

Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

aprovados.forEach2(function (nome, indice) { console.log(`${indice + 1}. ${nome}`) })