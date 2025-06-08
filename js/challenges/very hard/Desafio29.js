function labirintoComCaminho(matriz) {
  const linhas = matriz.length;
  const colunas = matriz[0].length;
  const direcoes = [
    [0, 1], [1, 0], [0, -1], [-1, 0]
  ];

  let inicio, fim;

  for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
      if (matriz[i][j] === 'S') inicio = [i, j];
      if (matriz[i][j] === 'E') fim = [i, j];
    }
  }

  const fila = [[...inicio, 0, [inicio]]];
  const visitado = new Set();
  visitado.add(inicio.join(','));

  while (fila.length) {
    const [x, y, passos, caminho] = fila.shift();
    if (x === fim[0] && y === fim[1]) {
      return {
        passos,
        caminho: caminho.map(([i, j]) => `(${i}, ${j})`)
      };
    }

    for (const [dx, dy] of direcoes) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 && nx < linhas &&
        ny >= 0 && ny < colunas &&
        matriz[nx][ny] !== '#' &&
        !visitado.has(`${nx},${ny}`)
      ) {
        fila.push([nx, ny, passos + 1, [...caminho, [nx, ny]]]);
        visitado.add(`${nx},${ny}`);
      }
    }
  }
  return { passos: -1, caminho: [] };
}


const mapa = [
  [' ', ' ', ' ', ' ', '#', ' ', ' '],
  [' ', 'S', ' ', ' ', '#', ' ', ' '],
  [' ', ' ', ' ', '#', ' ', ' ', ' '],
  [' ', '#', ' ', '#', ' ', ' ', ' '],
  [' ', '#', ' ', ' ', ' ', '#', ' '],
  ['#', '#', ' ', '#', ' ', ' ', 'E'],
  ['#', '#', ' ', '#', ' ', ' ', ' ']
];

const resultado = labirintoComCaminho(mapa);

console.log("Passos:", resultado.passos);
console.log("Caminho:", resultado.caminho);
