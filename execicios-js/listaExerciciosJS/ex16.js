function anoBissexto (ano){
  if(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) return `O ano ${ano} e bissexto.`
  else return `O ano ${ano} nao e bissexto.`
}

console.log(anoBissexto(400))