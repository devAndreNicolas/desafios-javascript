function calcularMedia(...numeros) {
  if (numeros.length === 0) return 0;

  const soma = numeros.reduce((total, numero) => total + numero, 0);
  return soma / numeros.length;
}


console.log(calcularMedia(10, 20, 30));
console.log(calcularMedia(5));          
console.log(calcularMedia(2,4));