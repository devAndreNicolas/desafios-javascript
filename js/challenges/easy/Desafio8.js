function abreviarNomeCompleto(nomeCompleto) {
  const nomes = nomeCompleto.trim().split(" ");
  const ultimoNome = nomes.pop().toUpperCase();
  const abreviaturas = nomes.map(n => n[0].toUpperCase() + ".").join(" ");
  
  return `${abreviaturas}, ${ultimoNome}`;
}

console.log(abreviarNomeCompleto("Ruan Wallice da silva lima"))