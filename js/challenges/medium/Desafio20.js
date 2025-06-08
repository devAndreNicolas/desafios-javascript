function gerarCombinacoes(opcoes) {
    if (opcoes.length === 1) return [opcoes];
    
    const combinacoes = [];
    
    for (let i = 0; i < opcoes.length; i++) {
        const atual = opcoes[i];
        const restantes = [...opcoes.slice(0, i), ...opcoes.slice(i + 1)];
        
        const combinacoesRestantes = gerarCombinacoes(restantes);
        

        for (const combinacao of combinacoesRestantes) {
            combinacoes.push([atual, ...combinacao]);
        }
    }
    
    return combinacoes;
}

function executarDesafio20() {
    const entrada = document.getElementById('entradaOpcoes').value;
    const opcoes = entrada.split(',').map(item => item.trim()).filter(Boolean);
    
    if (opcoes.length < 2) {
        document.getElementById('resultadoCombinacoes').innerText = 
            "Por favor, insira pelo menos 2 itens separados por vírgula.";
        return;
    }
    
    if (opcoes.length > 8) {
        document.getElementById('resultadoCombinacoes').innerText = 
            "Por questões de performance, o número máximo de itens é 8.";
        return;
    }
    
    const inicio = performance.now();
    const combinacoes = gerarCombinacoes(opcoes);
    const tempo = performance.now() - inicio;
    
    document.getElementById('resultadoCombinacoes').innerHTML = `
        <strong>${combinacoes.length} combinações geradas em ${tempo.toFixed(2)}ms</strong>
        <div style="max-height: 200px; overflow-y: auto; margin-top: 10px;">
            ${combinacoes.map(comb => comb.join(' ')).slice(0, 100).join('<br>')}
            ${combinacoes.length > 100 ? '<br>... (mostrando apenas as primeiras 100)' : ''}
        </div>
    `;
}