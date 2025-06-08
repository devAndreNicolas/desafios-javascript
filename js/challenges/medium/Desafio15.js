function romanoParaInteiro(s) {
  let valores = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let atual = valores[s[i]];
    let proximo = valores[s[i + 1]];

    if (proximo > atual) {
      total += proximo - atual;
      i++;
    } else {
      total += atual;
    }
  }

  return total;
}

console.log(romanoParaInteiro("CXIX")); 
