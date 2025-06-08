function persistenciaMultiplicativa(numero) {
    if (numero < 10) return 0;
    
    let passos = 0;
    let atual = numero;
    
    while (atual >= 10) {
        const digitos = atual.toString().split('');
        
        atual = digitos.reduce((produto, digito) => produto * parseInt(digito, 10), 1);
        
        passos++;
    }
    
    return passos;
}

function executarDesafio19() {
    const entrada = document.getElementById('entradaPersistencia').value.trim();
    const numero = parseInt(entrada, 10);
    
    if (isNaN(numero) || numero < 0) {
        document.getElementById('resultadoPersistencia').innerText = "Por favor, digite um número inteiro positivo.";
        return;
    }
    
    const resultado = persistenciaMultiplicativa(numero);
    document.getElementById('resultadoPersistencia').innerText = `Persistência multiplicativa: ${resultado}`;
}