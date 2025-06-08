// Explorador inicial
let explorador = {
  nivel: 9,
  experiencia: 1340,
  ranque: "Novato",
  especialidades: {
    forest: {
      acertosCriticos: 2
    }
  },
  planetasConhecidos: [],
  vivo: true,
  podeExplorar: true
};

// Função que aplica uma exploração
function explorarPlaneta(explorador, planeta, dado1, dado2) {
  const resultado = dado1 + dado2;

  // Adiciona o planeta à lista de conhecidos
  explorador.planetasConhecidos.push(planeta);

  // Verifica falha crítica
  if (dado1 === 1 && dado2 === 1) {
    explorador.vivo = false;
    explorador.podeExplorar = false;
    return explorador;
  }

  // Sucesso na exploração
  explorador.experiencia += 25;

  // Verifica se subiu de nível
  if (explorador.experiencia >= 1365 && explorador.nivel < 10) {
    explorador.nivel = 10;
  }

  // Verifica ranque
  if (explorador.nivel >= 10) {
    explorador.ranque = "Explorador";
  }

  // Verifica se se tornou especialista no terreno
  const terreno = planeta.terrain;
  if (
    explorador.especialidades[terreno] &&
    explorador.especialidades[terreno].acertosCriticos >= 2 &&
    !explorador.especialidades[terreno].bonus
  ) {
    explorador.especialidades[terreno].bonus = 1;
  }

  return explorador;
}

// Primeira exploração (sucesso)
explorarPlaneta(
  explorador,
  { id: 1, name: "Planeta 1", hostility: "neutral", terrain: "forest" },
  4,
  5
);

// Segunda exploração (falha crítica)
explorarPlaneta(
  explorador,
  { id: 2, name: "Planeta 2", hostility: "hostile", terrain: "desert" },
  1,
  1
);

// Resultado final
console.log(explorador);