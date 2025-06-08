function instrucoesEmergencia(str) {
  const contador = {};

  for (let char of str) {
    contador[char] = (contador[char] || 0) + 1;
  }

  const valores = Object.values(contador);
  return valores.every(v => v === valores[0]);
}

console.log(instrucoesEmergencia("aabb")); // true
console.log(instrucoesEmergencia("aabbc")); // false
console.log(instrucoesEmergencia("abcabc")); // true
