class EquacaoSegundoGrau {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  calcularDelta() {
    return this.b ** 2 - 4 * this.a * this.c;
  }

  resolver() {
    const delta = this.calcularDelta();
    console.log(`Delta: ${delta}`);

    if (delta < 0) {
      return 'A equação não possui raízes reais.';
    }

    const raiz1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
    const raiz2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);

    if (delta === 0) {
      return `A equação possui uma raiz real: x = ${raiz1}`;
    }

    return `A equação possui duas raízes reais: x₁ = ${raiz1}, x₂ = ${raiz2}`;
  }
}


const equacao = new EquacaoSegundoGrau(1, -3, -4);
console.log(equacao.resolver());

