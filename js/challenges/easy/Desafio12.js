function calcularMoedas(valor) {
    const moedas = [500, 100, 25, 10, 5, 1];
    const resultado = {};
    
    moedas.forEach(moeda => {
        resultado[moeda] = 0;
    });
    
    let resto = valor;
    
    for (const moeda of moedas) {
        if (resto >= moeda) {
            resultado[moeda] = Math.floor(resto / moeda);
            resto = resto % moeda;
        }
    }
    
    return resultado;
}

function formatarResultado(resultado) {
    return `
        500 créditos: ${resultado[500]} moeda(s)
        100 créditos: ${resultado[100]} moeda(s)
        25 créditos: ${resultado[25]} moeda(s)
        10 créditos: ${resultado[10]} moeda(s)
        5 créditos: ${resultado[5]} moeda(s)
        1 crédito: ${resultado[1]} moeda(s)
    `;
}

function executarDesafioMoedas() {
    const entrada = document.getElementById('entradaMoedas').value;
    const valor = Number(entrada);
    
    if (isNaN(valor) || valor < 0) {
        document.getElementById('resultadoMoedas').innerText = "Por favor, digite um valor numérico válido (positivo).";
        return;
    }
    
    const resultado = calcularMoedas(valor);
    const resultadoFormatado = formatarResultado(resultado);
    
    document.getElementById('resultadoMoedas').innerText = resultadoFormatado;
}