class Spreadsheet {
  constructor() {
    this.data = {}; // Armazena as células com valores ou fórmulas
  }

  writeCell(cell, value) {
    this.data[cell] = value;
  }

  readCell(cell) {
    const value = this.data[cell];
    if (typeof value === 'string' && value.startsWith('FORMULA(')) {
      const formulaStr = value.slice(8, -1); // Remove "FORMULA(" e ")"
      return this.calculateFormula(formulaStr);
    }
    return value;
  }

  calculateFormula(formulaStr) {
    const match = formulaStr.match(/^(\w+)\((.+)\)$/); // Ex: SUM(A1;A2)
    if (!match) return 'Fórmula inválida';

    const [_, operation, argsStr] = match;
    const args = argsStr.split(';').map(arg => this.readCell(arg));

    const nums = args.map(Number);
    if (nums.some(isNaN)) return 'Erro: célula inválida';

    switch (operation) {
      case 'SUM': return nums.reduce((a, b) => a + b, 0);
      case 'SUB': return nums.reduce((a, b) => a - b);
      case 'MUL': return nums.reduce((a, b) => a * b, 1);
      case 'DIV': return nums.reduce((a, b) => a / b);
      case 'MIN': return Math.min(...nums);
      case 'MAX': return Math.max(...nums);
      case 'AVG': return nums.reduce((a, b) => a + b, 0) / nums.length;
      default: return 'Fórmula não implementada';
    }
  }

  save() {
    return JSON.stringify(this.data);
  }

  load(jsonString) {
    try {
      this.data = JSON.parse(jsonString);
    } catch {
      console.error('Erro ao carregar planilha.');
    }
  }
}