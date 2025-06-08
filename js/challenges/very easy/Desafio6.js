function inverterPalavras(frase) {
  let fraseLimpa = frase.normalize("NFD");
  fraseLimpa = fraseLimpa.replace(/[^a-zA-Z\s]/g, '');
  fraseLimpa = fraseLimpa.replace(/\s+/g, ' ').trim();
  const palavras = fraseLimpa.split(' ').filter(Boolean);
  const palavrasInvertidas = palavras.map(palavra => {
    const palavraInvertida = palavra.split('').reverse().join('');
    return palavraInvertida.toLowerCase();
  });

  return palavrasInvertidas.join(' ');
}

function executarDesafioInverterPalavras() {
  const entrada = document.getElementById('entradaInverterPalavras').value;
  const resultado = inverterPalavras(entrada);
  document.getElementById('resultadoInverterPalavras').innerText = "Resultado: " + resultado;
}