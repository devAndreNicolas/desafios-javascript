function gerarChunks(n) {
  if (n <= 1) {
    return "chunk";
  }
  return "chunk-" + gerarChunks(n - 1);
}

console.log(gerarChunks(3)); 