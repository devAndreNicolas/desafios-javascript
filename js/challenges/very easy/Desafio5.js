function maiorLetra(frase) {
  const letras = frase
    .toLowerCase()
    .replace(/[^a-z]/g, '');

  if (letras.length === 0) {
    return "Nenhuma letra válida encontrada.";
  }

  let maior = letras[0];
  for (let i = 1; i < letras.length; i++) {
    if (letras[i] > maior) {
      maior = letras[i];
    }
  }

  return maior;
}

function executarDesafio() {
  const entrada = document.getElementById('entradaLetra').value;
  const resultado = maiorLetra(entrada);
  document.getElementById('resultadoLetra').innerText = "Maior letra: " + resultado;
}
