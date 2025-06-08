function decifrar(texto, chave) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    let c = texto[i];
    let codigo = texto.charCodeAt(i);

    if (c >= 'a' && c <= 'z') {
      resultado += String.fromCharCode((codigo - 97 - chave + 26) % 26 + 97);
    } else if (c >= 'A' && c <= 'Z') {
      resultado += String.fromCharCode((codigo - 65 - chave + 26) % 26 + 65);
    } else {
      resultado += c;
    }
  }

  return resultado;
}

console.log(decifrar("Vguvg", 2)); 
