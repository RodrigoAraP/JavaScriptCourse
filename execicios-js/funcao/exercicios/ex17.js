const reajuste = (salario, plano) => {
  switch (plano) {
    case 'A':
      return salario * 1.1
      break
    case 'B':
      return salario * 1.15
      break
    case 'C':
      return salario * 1.20
      break
    default:
      return 'Plano inválido'
  }
}

console.log(reajuste(1000, 'C'))