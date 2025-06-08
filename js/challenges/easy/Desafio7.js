function organizarResultados(arrayBidimensional) {
  const Array = [];

  for (let i = 0; i < arrayBidimensional.length; i++) {
    for (let j = 0; j < arrayBidimensional[i].length; j++) {
      Array.push(arrayBidimensional[i][j]);
    }
  }

  Array.sort((a, b) => a - b);

  return Array;
}

const matriz = [
  [3, 5, 1],
  [8, 2],
  [7, 4, 6]
];

console.log(organizarResultados(matriz));

