function relatorio(frase, palavra, indices) {
  if (indices.length === 0) return frase;

  let chars = frase.split('');

  for (let i of indices) {
    if (i >= 0 && i <= chars.length) {
      chars.splice(i, 0, palavra);
    }
  }

  return chars.join('');
}

console.log(relatorio('Hello', 'world', [6])); 

console.log(relatorio('capaz utilizar as cápsulas emergência', 'de ', [6, 27])); 

