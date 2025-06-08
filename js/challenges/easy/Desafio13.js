function validarCodigoNave(codigo) {
    const codigoStr = codigo.toString();
    
    if (codigoStr.length !== 12 || !/^\d+$/.test(codigoStr)) {
        return false;
    }
    
    let somaPares = 0;
    for (let i = 1; i < 11; i += 2) {
        somaPares += parseInt(codigoStr[i]);
    }
    
    const passo2 = somaPares * 3;
    
    let somaImpares = 0;
    for (let i = 0; i < 11; i += 2) {
        somaImpares += parseInt(codigoStr[i]);
    }
    
    const somaTotal = passo2 + somaImpares;
    
    const resto = somaTotal % 10;
    
    const digitoVerificador = resto === 0 ? 0 : 10 - resto;
    
    return digitoVerificador === parseInt(codigoStr[11]);
}

function executarDesafio13() {
    const entrada = document.getElementById('entradaCodigoNave').value;
    const codigo = entrada.trim();
    
    if (!/^\d{12}$/.test(codigo)) {
        document.getElementById('resultadoCodigoNave').innerText = "O código deve conter exatamente 12 dígitos numéricos.";
        return;
    }
    
    const valido = validarCodigoNave(codigo);
    const resultado = valido ? "VÁLIDO" : "INVÁLIDO";
    
    document.getElementById('resultadoCodigoNave').innerText = `O código é ${resultado}`;
}