let classificacao = ["Fusca", "Kombi", "Marea", "Brasília"];

function atualizarClassificacao(classificacao, comando) {
  const [nome, acao] = comando.split(" ");
  let index = classificacao.findIndex(c => c.startsWith(nome));

  if (index === -1) return;

  const isEliminated = classificacao[index].includes("ELIMINATED");

  if (acao === "ELIMINATE") {
    if (!isEliminated) {
      const eliminado = classificacao.splice(index, 1)[0] + " ELIMINATED";
      classificacao.push(eliminado);
    }
  } else {
    const deslocamento = parseInt(acao);
    if (!isEliminated && !isNaN(deslocamento)) {
      const [carro] = classificacao.splice(index, 1);
      const novoIndex = Math.max(0, Math.min(classificacao.length, index - deslocamento));
      classificacao.splice(novoIndex, 0, carro);
    }
  }
}

function mostrarClassificacao(classificacao) {
  return classificacao;
}

atualizarClassificacao(classificacao, "Kombi +1");
atualizarClassificacao(classificacao, "Brasília -2");
atualizarClassificacao(classificacao, "Marea ELIMINATE");

console.log(mostrarClassificacao(classificacao));
