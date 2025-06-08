function coordenadas(x, y) {
  let pares = [];

  for (let j = 1; j <= y; j++) {
    for (let i = 1; i <= x; i++) {
      pares.push([i, j]);
    }
  }

  return pares;
}

console.log(coordenadas(2, 3));
