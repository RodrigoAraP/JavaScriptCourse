function string(stringA, stringB) {
  igual = true
  for (i = 0; i < stringA.length; i++) {
    caracterA = stringA.charAt(i).toLowerCase()
    for (j = 0; j < stringB.length; j++) {
      caracterB = stringB.charAt(i).toLowerCase()
      if (caracterA == caracterB) {
        igual = true
        break
      } else igual = false
      if (!igual) return igual
    }
  }

  for (i = 0; i < stringB.length; i++) {
    caracterA = stringB.charAt(i).toLowerCase()
    for (j = 0; j < stringA.length; j++) {
      caracterB = stringA.charAt(i).toLowerCase()
      if (caracterA == caracterB) {
        igual = true
        break
      } else igual = false
      if (!igual) return igual
    }
  }
  return igual
}

console.log(string('abcdf', 'dcba'))
console.log(string('dcba', 'DCBA'))