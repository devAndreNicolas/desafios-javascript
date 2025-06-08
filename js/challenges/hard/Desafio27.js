function encontrarConexoes(objeto) {
    const conexoesEncontradas = [];
    
    function buscarConexoes(obj) {
        if (!obj || typeof obj !== 'object') return;
        
        if (obj.connection && obj.connection._id && obj.connection.label) {
            conexoesEncontradas.push([obj.connection._id, obj.connection.label]);
        }
        
        if (Array.isArray(obj.connections)) {
            obj.connections.forEach(conexao => {
                if (conexao._id && conexao.label) {
                    conexoesEncontradas.push([conexao._id, conexao.label]);
                }
            });
        }
        
        for (const key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                buscarConexoes(obj[key]);
            }
        }
    }
    
    buscarConexoes(objeto);
    return conexoesEncontradas;
}

async function executarDesafio27() {
    const fileInput = document.getElementById('arquivoJson');
    const file = fileInput.files[0];
    
    if (!file) {
        document.getElementById('resultadoConexoes').innerText = 
            "Por favor, selecione um arquivo JSON.";
        return;
    }
    
    try {
        const conteudo = await file.text();
        const dados = JSON.parse(conteudo);
        const conexoes = encontrarConexoes(dados);
        
        document.getElementById('resultadoConexoes').innerHTML = `
            <strong>${conexoes.length} conexões encontradas:</strong>
            <div style="max-height: 300px; overflow-y: auto; margin-top: 10px;">
                <table border="1" cellpadding="5" cellspacing="0">
                    <tr><th>ID</th><th>Label</th></tr>
                    ${conexoes.map(con => `<tr><td>${con[0]}</td><td>${con[1]}</td></tr>`).join('')}
                </table>
            </div>
        `;
    } catch (error) {
        document.getElementById('resultadoConexoes').innerText = 
            "Erro ao processar o arquivo: " + error.message;
    }
}