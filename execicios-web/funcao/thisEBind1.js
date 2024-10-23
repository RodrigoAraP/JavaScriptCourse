const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
        console.log(this === pessoa)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e Orientado a Objeto

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()