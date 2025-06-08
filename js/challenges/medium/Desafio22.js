function encontrarPrisioneirosFaltantes(listaPrisioneiros) {
    if (listaPrisioneiros.length === 0) return [];
    
    const ultimo = Math.max(...listaPrisioneiros.map(p => parseInt(p, 10)));
    const todosPrisioneiros = new Set();
    
    for (let i = 1; i <= ultimo; i++) {
        todosPrisioneiros.add(i.toString().padStart(4, '0'));
    }
    
    listaPrisioneiros.forEach(p => todosPrisioneiros.delete(p));
    
    return Array.from(todosPrisioneiros).sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
}

function executarDesafio22() {
    const entrada = document.getElementById('entradaPrisioneiros').value;
    const listaPrisioneiros = entrada.split(',').map(item => item.trim()).filter(Boolean);
    
    const formatoValido = listaPrisioneiros.every(p => /^\d{4}$/.test(p));
    
    if (!formatoValido) {
        document.getElementById('resultadoPrisioneiros').innerText = 
            "Formato inválido. Insira códigos de 4 dígitos (ex: 0001, 0020) separados por vírgula.";
        return;
    }
    
    const faltantes = encontrarPrisioneirosFaltantes(listaPrisioneiros);
    
    document.getElementById('resultadoPrisioneiros').innerHTML = 
        faltantes.length === 0 
            ? "Nenhum prisioneiro faltando."
            : `<strong>Prisioneiros faltantes:</strong><br>${faltantes.join(', ')}`;
}