function inverter(objeto) {
  const objPArray = Object.entries(objeto)
  for(i in objPArray) objPArray[i].reverse()
  return Object.fromEntries(objPArray)
}

console.log(inverter({ a: 1, b: 2, c: 3 }))