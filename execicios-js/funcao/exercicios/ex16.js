const calculadora = (num1, op, num2) => {
  switch (op) {
    case '+':
      return `${num1} + ${num2} = ${num1 + num2}`
    case '-':
      return `${num1} - ${num2} = ${num1 - num2}`
    case '*': case 'x':
      return `${num1} x ${num2} = ${num1 * num2}`
    case '/':
      return `${num1} / ${num2} = ${num1 / num2}`
    default:
      return `Operador invalidado`
  }
}

console.log(calculadora(5, '-', 5))
console.log(calculadora(5, '+', 5))
console.log(calculadora(5, 'x', 5))
console.log(calculadora(5, '*', 5))
console.log(calculadora(5, '/', 5))
console.log(calculadora(5, 'z', 5))


