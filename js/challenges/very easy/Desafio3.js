function inverterArrayOriginal(arr) {
  const novoArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    novoArray.push(arr[i]);
  }
  return novoArray;
}
const original = [1, 2, 3, 4];
const invertido = inverterArrayOriginal(original);

console.log(invertido);
console.log(original)