class LocalizacaoEspacial {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  determinarSetor() {

    const xPos = this.x >= 0;
    const yPos = this.y >= 0;
    const zPos = this.z >= 0;

    if (xPos && yPos && zPos) return 'Alfa';
    if (xPos && yPos && !zPos) return 'Beta';
    if (xPos && !yPos && zPos) return 'Gama';
    if (xPos && !yPos && !zPos) return 'Delta';
    if (!xPos && yPos && zPos) return 'Épsilon';
    if (!xPos && yPos && !zPos) return 'Zeta';
    if (!xPos && !yPos && zPos) return 'Sigma';
    return 'Ômega'; // (!xPos && !yPos && !zPos)
  }

  calcularDistancia() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }
}

function executarDesafio21() {
  const x = parseFloat(document.getElementById('coordX').value);
  const y = parseFloat(document.getElementById('coordY').value);
  const z = parseFloat(document.getElementById('coordZ').value);

  if (isNaN(x) || isNaN(y) || isNaN(z)) {
    document.getElementById('resultadoLocalizacao').innerHTML = 
      "Por favor, insira valores numéricos válidos para todas as coordenadas.";
    return;
  }

  const localizacao = new LocalizacaoEspacial(x, y, z);
  const setor = localizacao.determinarSetor();
  const distancia = localizacao.calcularDistancia();

  document.getElementById('resultadoLocalizacao').innerHTML = `
    <strong>Resultado:</strong><br>
    Coordenadas: (${x}, ${y}, ${z})<br>
    Setor: ${setor}<br>
    Distância da estação: ${distancia.toFixed(2)}
  `;
}