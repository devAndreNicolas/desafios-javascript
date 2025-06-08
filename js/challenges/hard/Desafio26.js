function fibonacci(n) {
  let a = 0n, b = 1n;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}

console.log(fibonacci(10));
console.log(fibonacci(50));
console.log(fibonacci(100));
console.log(fibonacci(1000));
console.log(fibonacci(10000));
