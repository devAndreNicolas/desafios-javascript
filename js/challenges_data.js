// js/challenges_data.js

export const challenges = [
  // --- VERY EASY ---
  {
    id: 'very-easy-1',
    title: 'Calculadora de Média',
    description: `Calcule a média aritmética de uma quantidade variável de números passados como entrada.
    
  - Se nenhum número for informado, a média deve ser 0.
  - Caso contrário, some todos os números e divida pela quantidade de números.`,
    difficulty: 'very-easy',
    inputs: [
      {
        name: 'numeros',
        type: 'text',
        label: 'Digite os números separados por vírgula (ex: 10,20,30):'
      }
    ],
    solution: function(inputs) {
      try {
        const strNumeros = inputs.numeros.trim();
        if (!strNumeros) return '0'; // nenhum número informado
        
        const arrNumeros = strNumeros.split(',').map(s => s.trim()).map(Number);
        if (arrNumeros.some(isNaN)) return 'Erro: entrada inválida. Use apenas números separados por vírgula.';
        
        const soma = arrNumeros.reduce((total, n) => total + n, 0);
        const media = soma / arrNumeros.length;
        
        return media.toString();
      } catch {
        return 'Erro: entrada inválida.';
      }
    }
  },  
  {
    id: 'very-easy-2r',
    title: 'Gerador de Chunks Recursivo',
    description: 'Dada uma entrada numérica n, gere uma string recursivamente concatenando "chunk" com hífens. Para n=1, retorna "chunk". Para n>1, retorna "chunk-" seguido do resultado para n-1.',
    difficulty: 'very-easy',
    inputs: [
      { name: 'n', type: 'number', label: 'Digite o valor de n:' }
    ],
    solution: function(inputs) {
      const n = Number(inputs.n);
      if (isNaN(n) || n < 1) {
        return 'Erro: informe um número inteiro positivo maior ou igual a 1.';
      }
      
      function gerarChunks(n) {
        if (n <= 1) {
          return "chunk";
        }
        return "chunk-" + gerarChunks(n - 1);
      }
      
      return gerarChunks(n);
    }
  },  
  {
    id: 'very-easy-3',
    title: 'Inverter Array',
    description: 'Inverte um array sem modificar o original.',
    difficulty: 'very-easy',
    inputs: [
      { name: 'array', type: 'text', label: 'Digite um array separado por vírgulas:' }
    ],
    solution: function(inputs) {
      const arr = inputs.array.split(',').map(item => item.trim());
      const novoArray = [];
      for (let i = arr.length - 1; i >= 0; i--) {
        novoArray.push(arr[i]);
      }
      return novoArray;
    }
  },
  {
    id: 'very-easy-4',
    title: 'Quadrado Concatenado',
    description: 'Para cada dígito do número, calcula o quadrado e concatena os resultados.',
    difficulty: 'very-easy',
    inputs: [
      { name: 'numero', type: 'number', label: 'Digite um número:' }
    ],
    solution: function(inputs) {
      const numeroStr = inputs.numero.toString();
      const resultado = numeroStr
        .split('')
        .map(digito => {
          const n = Number(digito);
          return n * n;
        })
        .join('');
      return Number(resultado);
    }
  },
  {
    id: 'very-easy-5',
    title: 'Maior Letra na Frase',
    description: 'Dada uma frase, retorne a maior letra (a-z) lexicograficamente, ignorando caracteres não alfabéticos.',
    difficulty: 'very-easy',
    inputs: [
      { name: 'frase', type: 'text', label: 'Digite uma frase:' }
    ],
    solution: function(inputs) {
      const letras = inputs.frase.toLowerCase().replace(/[^a-z]/g, '');
      if (letras.length === 0) return "Nenhuma letra válida encontrada.";
      let maior = letras[0];
      for (let i = 1; i < letras.length; i++) {
        if (letras[i] > maior) maior = letras[i];
      }
      return maior;
    }
  },
  {
    id: 'very-easy-6',
    title: 'Inverter Palavras da Frase',
    description: 'Dada uma frase, inverta cada palavra individualmente, removendo acentos e caracteres especiais, e retorne a frase resultante em letras minúsculas.',
    difficulty: 'very-easy',
    inputs: [
      { name: 'frase', type: 'text', label: 'Digite uma frase:' }
    ],
    solution: function(inputs) {
      let fraseLimpa = inputs.frase.normalize("NFD").replace(/[^a-zA-Z\s]/g, '').replace(/\s+/g, ' ').trim();
      const palavras = fraseLimpa.split(' ').filter(Boolean);
      const palavrasInvertidas = palavras.map(palavra =>
        palavra.split('').reverse().join('').toLowerCase()
      );
      return palavrasInvertidas.join(' ');
    }
  },
  ...Array.from({ }, (_, i) => ({
    id: `very-easy-${i + 1}`,
    title: `Desafio Muito Fácil ${i + 1}`,
    description: `Descrição para o desafio muito fácil ${i + 1}.`,
    difficulty: 'very-easy',
    inputs: [{ name: `inputVE${i}`, type: 'text', label: `Entrada ${i + 1}:` }],
    solution: function(inputs) {
      return `Resultado para Muito Fácil ${i + 1}: ${inputs[`inputVE${i}`] || 'vazio'}`;
    }
  })),

  // --- EASY ---
  {
    id: 'easy-1',
    title: 'Organizar Resultados',
    description: 'Dado um array bidimensional contendo números, transforme-o em um array unidimensional com todos os números ordenados em ordem crescente.',
    difficulty: 'easy',
    inputs: [
      { name: 'matriz', type: 'text', label: 'Digite a matriz (ex: [[3,5,1],[8,2],[7,4,6]]):' }
    ],
    solution: function(inputs) {
      try {
        const arrayBidimensional = JSON.parse(inputs.matriz);
        if (!Array.isArray(arrayBidimensional)) return 'Erro: A entrada não é uma matriz válida.';
        const resultado = [];
        for (let i = 0; i < arrayBidimensional.length; i++) {
          if (!Array.isArray(arrayBidimensional[i])) continue;
          for (let j = 0; j < arrayBidimensional[i].length; j++) {
            resultado.push(arrayBidimensional[i][j]);
          }
        }
        resultado.sort((a, b) => a - b);
        return `Array ordenado: [${resultado.join(', ')}]`;
      } catch (e) {
        return 'Erro: Entrada inválida. Use uma matriz válida (ex: [[1,2],[3]])';
      }
    }
  },

  {
    id: 'easy-2',
    title: 'Abreviar Nome Completo',
    description: 'Dado um nome completo, retorne a abreviação do primeiro(s) nome(s) seguido do sobrenome completo em letras maiúsculas. Exemplo: "Ruan Wallice da silva lima" → "R. W. D. S., LIMA".',
    difficulty: 'easy',
    inputs: [
      { name: 'nomeCompleto', type: 'text', label: 'Digite o nome completo:' }
    ],
    solution: function(inputs) {
      try {
        const nomeCompleto = inputs.nomeCompleto;
        const nomes = nomeCompleto.trim().split(" ");
        if (nomes.length < 2) return 'Erro: Informe pelo menos nome e sobrenome.';
        const ultimoNome = nomes.pop().toUpperCase();
        const abreviaturas = nomes.map(n => n[0].toUpperCase() + ".").join(" ");
        return `${abreviaturas}, ${ultimoNome}`;
      } catch (e) {
        return 'Erro: Entrada inválida.';
      }
    }
  },

  {
    id: 'easy-3',
    title: 'Instruções de Emergência',
    description: 'Verifique se todos os caracteres de uma string aparecem a mesma quantidade de vezes. Por exemplo, "aabb" retorna true, "aabbc" retorna false.',
    difficulty: 'easy',
    inputs: [
      { name: 'texto', type: 'text', label: 'Digite a string para verificar:' }
    ],
    solution: function(inputs) {
      try {
        const str = inputs.texto;
        const contador = {};
  
        for (let char of str) {
          contador[char] = (contador[char] || 0) + 1;
        }
  
        const valores = Object.values(contador);
        return valores.every(v => v === valores[0])
          ? 'Todos os caracteres aparecem igualmente: true'
          : 'Nem todos os caracteres aparecem igualmente: false';
      } catch (e) {
        return 'Erro: Entrada inválida.';
      }
    }
  },
  
  {
    id: 'easy-4',
    title: 'Cálculo de Fatorial',
    description: 'Dado um número inteiro não negativo, calcule seu fatorial. O fatorial de n (n!) é o produto de todos os números inteiros positivos menores ou iguais a n.',
    difficulty: 'easy',
    inputs: [
      { name: 'numero', type: 'number', label: 'Digite um número inteiro não negativo:' }
    ],
    solution: function(inputs) {
      try {
        const n = Number(inputs.numero);
        if (!Number.isInteger(n) || n < 0) return 'Erro: Insira um número inteiro não negativo.';
  
        function fatorial(n) {
          return n <= 1 ? 1 : n * fatorial(n - 1);
        }
  
        return `Fatorial de ${n} é ${fatorial(n)}`;
      } catch (e) {
        return 'Erro: Entrada inválida.';
      }
    }
  },

  {
    id: 'easy-5',
    title: 'Gerar Coordenadas',
    description: 'Dado dois números inteiros positivos representando colunas (x) e linhas (y), gere todos os pares de coordenadas no formato [x, y], percorrendo da esquerda para a direita e de cima para baixo.',
    difficulty: 'easy',
    inputs: [
      { name: 'x', type: 'number', label: 'Digite o número de colunas (x):' },
      { name: 'y', type: 'number', label: 'Digite o número de linhas (y):' }
    ],
    solution: function(inputs) {
      try {
        const x = Number(inputs.x);
        const y = Number(inputs.y);
  
        if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) {
          return 'Erro: Insira apenas números inteiros positivos.';
        }
  
        const pares = [];
        for (let j = 1; j <= y; j++) {
          for (let i = 1; i <= x; i++) {
            pares.push([i, j]);
          }
        }
  
        return `Coordenadas: ${JSON.stringify(pares)}`;
      } catch (e) {
        return 'Erro: Entrada inválida.';
      }
    }
  },

  {
    id: 'easy-6',
    title: 'Calculadora de Moedas',
    description: `Dado um valor inteiro, calcule a quantidade mínima de moedas necessárias para compor esse valor, usando moedas de 500, 100, 25, 10, 5 e 1 crédito.`,
    difficulty: 'easy',
    inputs: [
      { name: 'valor', type: 'number', label: 'Digite o valor em créditos:' }
    ],
    solution: function(inputs) {
      const valor = Number(inputs.valor);
      if (isNaN(valor) || valor < 0) {
        return "Erro: Por favor, digite um valor numérico válido e positivo.";
      }
  
      const moedas = [500, 100, 25, 10, 5, 1];
      const resultado = {};
  
      moedas.forEach(moeda => {
        resultado[moeda] = 0;
      });
  
      let resto = valor;
      for (const moeda of moedas) {
        if (resto >= moeda) {
          resultado[moeda] = Math.floor(resto / moeda);
          resto %= moeda;
        }
      }
  
      // Formata o resultado em string para exibir
      return `
  500 créditos: ${resultado[500]} moeda(s)
  100 créditos: ${resultado[100]} moeda(s)
  25 créditos: ${resultado[25]} moeda(s)
  10 créditos: ${resultado[10]} moeda(s)
  5 créditos: ${resultado[5]} moeda(s)
  1 crédito: ${resultado[1]} moeda(s)
      `.trim();
    }
  },  

  {
    id: 'easy-7',
    title: 'Gerador de Licença de Piloto',
    description: `Crie uma licença de voo para um piloto com base no nome, sobrenome e data de nascimento seguindo a regra:
  - Pegue os 5 primeiros caracteres do sobrenome em maiúsculas (completando com '9' se faltar).
  - Use o penúltimo dígito do ano, o mês com 2 dígitos e o último dígito do ano.
  - A licença terá o formato: SOBRENOME-XYMZ.i, onde XYMZ é a combinação do ano e mês, e i é a primeira letra do nome em minúscula.`,
    difficulty: 'easy',
    inputs: [
      { name: 'firstName', type: 'text', label: 'Nome:' },
      { name: 'lastName', type: 'text', label: 'Sobrenome:' },
      { name: 'birthday', type: 'date', label: 'Data de nascimento:' }
    ],
    solution: function(inputs) {
      try {
        const firstName = inputs.firstName?.trim();
        const lastName = inputs.lastName?.trim();
        const birthdayStr = inputs.birthday;
  
        if (!firstName || !lastName || !birthdayStr) {
          return "Erro: Preencha todos os campos.";
        }
  
        const birthday = new Date(birthdayStr);
        if (isNaN(birthday)) {
          return "Erro: Data de nascimento inválida.";
        }
  
        const sobrenomePart = lastName.slice(0, 5).toUpperCase().padEnd(5, '9');
  
        const year = birthday.getFullYear().toString();
        const decada = year[year.length - 2];
        const mes = (birthday.getMonth() + 1).toString().padStart(2, '0');
        const ultimoAno = year[year.length - 1];
        const primeiraLetra = firstName[0].toLowerCase();
  
        const licenseCode = `${sobrenomePart}-${decada}${mes}${ultimoAno}.${primeiraLetra}`;
  
        return `Licença gerada: ${licenseCode}`;
      } catch (e) {
        return "Erro: Entrada inválida.";
      }
    }
  },  

  {
    id: 'easy-8',
    title: 'Validador de Código da Nave',
    description: `Valide um código de 12 dígitos da nave com base em um algoritmo de dígito verificador. A validação segue estas etapas:
    1. Multiplicar por 3 a soma dos dígitos nas posições pares (1-based: 2ª, 4ª, 6ª...10ª).
    2. Somar os dígitos nas posições ímpares (1ª, 3ª...11ª).
    3. Somar os dois resultados.
    4. Subtrair o último dígito da soma total de 10 para obter o dígito verificador. Se o resultado for 10, considerar 0.
    5. O código é válido se o 12º dígito for igual ao dígito verificador calculado.
    
    Exemplos de códigos válidos para teste:
    - 123456789014
    - 000000000000
    - 111111111119
    - 987654321096
    - 555555555555
    
    Digite um dos códigos acima para obter a resposta "VÁLIDO".`,
    difficulty: 'easy',
    inputs: [
      { name: 'codigo', type: 'text', label: 'Digite o código da nave (12 dígitos):' }
    ],
    solution: function(inputs) {
      try {
        const codigoStr = inputs.codigo.trim();
  
        if (!/^\d{12}$/.test(codigoStr)) {
          return 'Erro: O código deve conter exatamente 12 dígitos numéricos.';
        }
  
        let somaPares = 0;
        for (let i = 1; i <= 9; i += 2) {
          somaPares += parseInt(codigoStr[i], 10);
        }
  
        let somaImpares = 0;
        for (let i = 0; i <= 10; i += 2) {
          somaImpares += parseInt(codigoStr[i], 10);
        }
  
        const somaTotal = somaPares * 3 + somaImpares;
        const resto = somaTotal % 10;
        const digitoVerificador = resto === 0 ? 0 : 10 - resto;
  
        const valido = digitoVerificador === parseInt(codigoStr[11], 10);
  
        return `O código é ${valido ? 'VÁLIDO' : 'INVÁLIDO'}`;
      } catch {
        return 'Erro: Entrada inválida.';
      }
    }
  },   
  ...Array.from({ }, (_, i) => ({
    id: `easy-${i + 7}`,
    title: `Desafio Fácil ${i + 7}`,
    description: `Descrição para o desafio fácil ${i + 7}.`,
    difficulty: 'easy',
    inputs: [{ name: `inputE${i}`, type: 'text', label: `Entrada ${i + 1}:` }],
    solution: function(inputs) {
      return `Resultado para Desafio Fácil ${i + 7}: ${inputs[`inputE${i}`] || 'vazio'}`;
    }
  })),

  // --- MEDIUM ---
  {
    id: 'medium-1',
    title: 'Conversor de Números Romanos para Inteiro',
    description: `Converta uma string representando um número romano em seu valor inteiro correspondente.
A regra é: some os valores dos símbolos, subtraindo quando um símbolo menor precede um maior.
Exemplo: "CXIX" deve retornar 119.`,
    difficulty: 'medium',
    inputs: [
      { name: 'romano', type: 'text', label: 'Digite o número romano:' }
    ],
    solution: function(inputs) {
      const s = inputs.romano.toUpperCase().trim();
      const valores = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
      
      if (!/^[IVXLCDM]+$/.test(s)) {
        return 'Erro: Entrada inválida. Use apenas caracteres romanos válidos (I, V, X, L, C, D, M).';
      }
  
      let total = 0;
      for (let i = 0; i < s.length; i++) {
        const atual = valores[s[i]];
        const proximo = valores[s[i + 1]] || 0;
  
        if (proximo > atual) {
          total += proximo - atual;
          i++;
        } else {
          total += atual;
        }
      }
      return total;
    }
  },
  {
    id: 'medium-2',
    title: 'Decifrador de Código César',
    description: `Dado um texto cifrado com a cifra de César e uma chave numérica, retorne o texto original.
A cifra de César desloca cada letra do alfabeto por um número fixo de posições. A decifração reverte esse deslocamento.
Exemplo: "Vguvg" com chave 2 retorna "Teste".`,
    difficulty: 'medium',
    inputs: [
      { name: 'texto', type: 'text', label: 'Texto cifrado:' },
      { name: 'chave', type: 'number', label: 'Chave de deslocamento:' }
    ],
    solution: function(inputs) {
      const texto = inputs.texto;
      const chave = parseInt(inputs.chave, 10);
  
      if (isNaN(chave)) {
        return 'Erro: A chave deve ser um número.';
      }
  
      let resultado = "";
  
      for (let i = 0; i < texto.length; i++) {
        let c = texto[i];
        let codigo = texto.charCodeAt(i);
  
        if (c >= 'a' && c <= 'z') {
          resultado += String.fromCharCode((codigo - 97 - chave + 26) % 26 + 97);
        } else if (c >= 'A' && c <= 'Z') {
          resultado += String.fromCharCode((codigo - 65 - chave + 26) % 26 + 65);
        } else {
          resultado += c;
        }
      }
  
      return resultado;
    }
  },
  {
    id: 'medium-3',
    title: 'Inserção de Palavras em Frases',
    description: `Crie a função \`relatorio(frase, palavra, indices)\` que insere a palavra fornecida nas posições indicadas dentro da frase original.

Exemplo:
- \`relatorio("Hello", "World", [5])\` → "HelloWorld"
- \`relatorio("usar cápsulas emergência", "de ", [5, 20])\` → "usar de cápsulas de emergência"`,
    difficulty: 'medium',
    inputs: [
      { name: 'frase', type: 'text', label: 'Digite a frase original:' },
      { name: 'palavra', type: 'text', label: 'Digite a palavra a ser inserida:' },
      { name: 'indices', type: 'text', label: 'Digite os índices de inserção (separados por vírgula):' }
    ],
    solution: function(inputs) {
      const frase = inputs.frase;
      const palavra = inputs.palavra;
      const indices = inputs.indices.split(',').map(num => parseInt(num.trim(), 10));
      
      if (indices.some(isNaN)) {
        return 'Erro: Os índices devem ser números válidos.';
      }

      let resultado = frase;
      indices.forEach(indice => {
        if (indice >= 0 && indice <= resultado.length) {
          resultado = resultado.slice(0, indice) + palavra + resultado.slice(indice);
        }
      });

      return resultado;
    }
  },
  {
    id: 'medium-4',
    title: 'Equação do Segundo Grau',
    description: `Implemente uma classe \`EquacaoSegundoGrau\` com os atributos \`a\`, \`b\`, \`c\` e métodos para:
1. Calcular o delta (Δ = b² - 4ac)
2. Resolver a equação usando a fórmula de Bhaskara
3. Retornar as raízes reais ou indicar que não há raízes reais`,
    difficulty: 'medium',
    inputs: [
      { name: 'a', type: 'number', label: 'Digite o valor de a:' },
      { name: 'b', type: 'number', label: 'Digite o valor de b:' },
      { name: 'c', type: 'number', label: 'Digite o valor de c:' }
    ],
    solution: function(inputs) {
      const a = parseFloat(inputs.a);
      const b = parseFloat(inputs.b);
      const c = parseFloat(inputs.c);

      const delta = b * b - 4 * a * c;

      if (delta < 0) {
        return 'Não existem raízes reais.';
      }

      const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
      const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

      return `Raízes: x₁ = ${raiz1}, x₂ = ${raiz2}`;
    }
  },
  {
    id: 'medium-5',
    title: 'Persistência Multiplicativa',
    description: `A persistência multiplicativa de um número é o número de vezes que precisamos multiplicar os dígitos até chegar a um único dígito.

Exemplo:
- \`persistenciaMultiplicativa(39)\` → 3 (3×9=27, 2×7=14, 1×4=4)
- \`persistenciaMultiplicativa(999)\` → 4
- \`persistenciaMultiplicativa(4)\` → 0 (já é um único dígito)`,
    difficulty: 'medium',
    inputs: [
      { name: 'numero', type: 'number', label: 'Digite o número:' }
    ],
    solution: function(inputs) {
      let numero = inputs.numero;
      let contagem = 0;

      while (numero >= 10) {
        numero = numero
          .toString()
          .split('')
          .reduce((acc, digito) => acc * digito, 1);
        contagem++;
      }

      return contagem;
    }
  },
  {
    id: 'medium-6',
    title: 'Geração de Combinações',
    description: `Implemente a função \`gerarCombinacoes(array)\` que retorna todas as permutações possíveis dos elementos fornecidos.

Exemplo:
- \`gerarCombinacoes(["a", "b"])\` → [["a","b"], ["b","a"]]
- \`gerarCombinacoes(["a", "b", "c"])\` → [["a","b","c"], ["a","c","b"], ["b","a","c"], ...]`,
    difficulty: 'medium',
    inputs: [
      { name: 'array', type: 'text', label: 'Digite os elementos do array (separados por vírgula):' }
    ],
    solution: function(inputs) {
      const array = inputs.array.split(',').map(item => item.trim());
      const combinacoes = [];

      const permutar = (arr, inicio = 0) => {
        if (inicio === arr.length) {
          combinacoes.push([...arr]);
          return;
        }
        for (let i = inicio; i < arr.length; i++) {
          [arr[inicio], arr[i]] = [arr[i], arr[inicio]];
          permutar(arr, inicio + 1);
          [arr[inicio], arr[i]] = [arr[i], arr[inicio]];  // Desfaz a troca
        }
      };

      permutar(array);
      return combinacoes;
    }
  },
  {
    id: 'medium-7',
    title: 'Localização Espacial',
    description: `Crie a classe \`LocalizacaoEspacial(x, y, z)\` com dois métodos:
- \`determinarSetor()\`: retorna o setor baseado nos sinais das coordenadas.
- \`calcularDistancia()\`: retorna a distância do ponto (x, y, z) até a origem (0,0,0).

Exemplo:
- Para (1, -2, 3), setor = Gama, distância ≈ 3.74`,
    difficulty: 'medium',
    inputs: [
      { name: 'x', type: 'number', label: 'Digite o valor de x:' },
      { name: 'y', type: 'number', label: 'Digite o valor de y:' },
      { name: 'z', type: 'number', label: 'Digite o valor de z:' }
    ],
    solution: function(inputs) {
      const x = inputs.x;
      const y = inputs.y;
      const z = inputs.z;
      const distancia = Math.sqrt(x ** 2 + y ** 2 + z ** 2);

      let setor = '';
      if (x >= 0 && y >= 0 && z >= 0) setor = 'Alfa';
      else if (x >= 0 && y >= 0 && z < 0) setor = 'Beta';
      // Verifique outras condições para os setores

      return `Setor: ${setor}, Distância: ${distancia.toFixed(2)}`;
    }
  },
  {
    id: 'medium-8',
    title: 'Prisioneiros Faltantes',
    description: `Implemente a função \`encontrarPrisioneirosFaltantes(lista)\` que recebe uma lista com os códigos dos prisioneiros e retorna os códigos faltantes até o maior número presente.

Exemplo:
- Entrada: ["0001", "0002", "0004"]
- Saída: ["0003"]`,
    difficulty: 'medium',
    inputs: [
      { name: 'lista', type: 'text', label: 'Digite os códigos dos prisioneiros (separados por vírgula):' }
    ],
    solution: function(inputs) {
      const lista = inputs.lista.split(',').map(item => item.trim());
      const numeros = lista.map(item => parseInt(item, 10));
      const max = Math.max(...numeros);
      const faltantes = [];

      for (let i = 1; i <= max; i++) {
        if (!numeros.includes(i)) {
          faltantes.push(i.toString().padStart(4, '0'));
        }
      }

      return faltantes;
    }
  },
  ...Array.from({ }, (_, i) => ({
    id: `medium-${i + 4}`,
    title: `Desafio Médio ${i + 4}`,
    description: `Descrição para o desafio médio ${i + 4}.`,
    difficulty: 'medium',
    inputs: [{ name: `inputM${i}`, type: 'text', label: `Entrada ${i + 1}:` }],
    solution: function(inputs) {
      return `Resultado para Desafio Médio ${i + 4}: ${inputs[`inputM${i}`] || 'vazio'}`;
    }
  })),

  // --- HARD ---
// --- HARD ---
{
  id: 'hard-1',
  title: 'Atualizar Classificação',
  description: `Este desafio atualiza a classificação de veículos com base em comandos. Os comandos podem mover um veículo para cima ou para baixo na classificação ou eliminá-lo.
  
Exemplo de entrada:
- Classificação inicial: ["Fusca", "Kombi", "Marea", "Brasília"]
- Comando: "Kombi +1" (move Kombi uma posição para cima)
- Comando: "Brasília -2" (move Brasília duas posições para baixo)
- Comando: "Marea ELIMINATE" (elimina Marea)

Saída esperada:
- ["Brasília", "Fusca", "Kombi", "Marea ELIMINATED"]`,
  difficulty: 'hard',
  inputs: [
      { name: 'classificacao', type: 'textarea', label: 'Digite a classificação inicial (ex: ["Fusca", "Kombi", "Marea", "Brasília"]):' },
      { name: 'comando', type: 'text', label: 'Digite o comando (ex: "Kombi +1"):' }
  ],
  solution: function(inputs) {
      try {
          const classificacao = JSON.parse(inputs.classificacao);
          const comando = inputs.comando.trim();
          const [nome, acao] = comando.split(" ");
          let index = classificacao.findIndex(c => c.startsWith(nome));

          if (index === -1) return 'Erro: Veículo não encontrado na classificação.';

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

          return classificacao;
      } catch (e) {
          return 'Erro: Entrada inválida. Certifique-se de que a classificação e o comando estão corretos.';
      }
  }
},
{
  id: 'hard-2',
  title: 'Validador de Usuário',
  description: `Valide nomes de usuários com base nas seguintes regras:
- Deve começar com uma letra.
- Deve conter entre 3 e 32 caracteres.
- Deve incluir pelo menos uma letra, um número e um underscore.
- Não pode estar na lista de usuários já existentes.

Exemplo de entrada:
- Nome: "User_123"
Saída esperada:
- "Usuário válido."`,
  difficulty: 'hard',
  inputs: [
      { name: 'nome', type: 'text', label: 'Digite o nome do usuário:' }
  ],
  solution: function(inputs) {
      const usuarios = ['user1', 'teste_user', 'exemplo123'];
      const nome = inputs.nome.trim();
      const regex = /^[A-Za-z][A-Za-z0-9_]{2,30}[A-Za-z0-9]$/;
      const temLetra = /[A-Za-z]/.test(nome);
      const temNumero = /[0-9]/.test(nome);
      const temUnderscore = /_/.test(nome);

      if (
          regex.test(nome) &&
          temLetra &&
          temNumero &&
          temUnderscore &&
          !usuarios.includes(nome)
      ) {
          return 'Usuário válido.';
      }
      return 'Usuário inválido. Certifique-se de seguir as regras.';
  }
},
{
  id: 'hard-3',
  title: 'Validador de Parênteses',
  description: `Verifique se uma string de parênteses, colchetes e chaves está balanceada.

Exemplo de entrada:
- String: "([{}])"
Saída esperada:
- "String válida."

Exemplo de entrada:
- String: "(]"
Saída esperada:
- "String inválida."`,
  difficulty: 'hard',
  inputs: [
      { name: 'string', type: 'text', label: 'Digite a string para validar:' }
  ],
  solution: function(inputs) {
      const s = inputs.string.trim();
      const pilha = [];
      const mapa = { ')': '(', ']': '[', '}': '{' };

      for (let c of s) {
          if ('([{'.includes(c)) pilha.push(c);
          if (')]}'.includes(c)) {
              if (pilha.pop() !== mapa[c]) return 'String inválida.';
          }
      }
      return pilha.length === 0 ? 'String válida.' : 'String inválida.';
  }
},
{
  id: 'hard-4',
  title: 'Fibonacci com BigInt',
  description: `Calcule o n-ésimo número de Fibonacci usando BigInt para suportar números muito grandes.

Exemplo de entrada:
- n: 10
Saída esperada:
- "55"

Exemplo de entrada:
- n: 100
Saída esperada:
- "354224848179261915075"`,
  difficulty: 'hard',
  inputs: [
      { name: 'n', type: 'number', label: 'Digite o valor de n:' }
  ],
  solution: function(inputs) {
      const n = parseInt(inputs.n, 10);
      if (isNaN(n) || n < 0) return 'Erro: Insira um número inteiro não negativo.';

      let a = 0n, b = 1n;
      for (let i = 0; i < n; i++) {
          [a, b] = [b, a + b];
      }
      return a.toString();
  }
},
{
  id: 'hard-5',
  title: 'Encontrar Conexões',
  description: `Dado um objeto JSON, encontre todas as conexões que possuem um ID e um label.

Exemplo de entrada:
- JSON: {"connections": [{"_id": "123", "label": "Conexão A"}, {"_id": "456", "label": "Conexão B"}]}
Saída esperada:
- [["123", "Conexão A"], ["456", "Conexão B"]]`,
  difficulty: 'hard',
  inputs: [
      { name: 'json', type: 'textarea', label: 'Digite o objeto JSON:' }
  ],
  solution: function(inputs) {
      try {
          const objeto = JSON.parse(inputs.json);
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
      } catch (e) {
          return 'Erro: Entrada inválida. Certifique-se de que o JSON está correto.';
      }
  }
},
{
  id: 'hard-6',
  title: 'Explorar Planeta',
  description: `Simule a exploração de planetas por um explorador, atualizando suas propriedades com base nos resultados.

Exemplo de entrada:
- Explorador inicial: {"nivel": 9, "experiencia": 1340, "ranque": "Novato", "especialidades": {"forest": {"acertosCriticos": 2}}, "planetasConhecidos": [], "vivo": true, "podeExplorar": true}
- Planeta: {"id": 1, "name": "Planeta 1", "hostility": "neutral", "terrain": "forest"}
- Dado 1: 4
- Dado 2: 5

Saída esperada:
- Explorador atualizado com novas propriedades.`,
  difficulty: 'hard',
  inputs: [
      { name: 'explorador', type: 'textarea', label: 'Digite o explorador inicial (JSON):' },
      { name: 'planeta', type: 'textarea', label: 'Digite o planeta (JSON):' },
      { name: 'dado1', type: 'number', label: 'Digite o valor do dado 1:' },
      { name: 'dado2', type: 'number', label: 'Digite o valor do dado 2:' }
  ],
  solution: function(inputs) {
      try {
          const explorador = JSON.parse(inputs.explorador);
          const planeta = JSON.parse(inputs.planeta);
          const dado1 = parseInt(inputs.dado1, 10);
          const dado2 = parseInt(inputs.dado2, 10);

          if (isNaN(dado1) || isNaN(dado2)) return 'Erro: Dados inválidos.';

          const resultado = dado1 + dado2;

          explorador.planetasConhecidos.push(planeta);

          if (dado1 === 1 && dado2 === 1) {
              explorador.vivo = false;
              explorador.podeExplorar = false;
              return explorador;
          }

          explorador.experiencia += 25;

          if (explorador.experiencia >= 1365 && explorador.nivel < 10) {
              explorador.nivel = 10;
          }

          if (explorador.nivel >= 10) {
              explorador.ranque = "Explorador";
          }

          const terreno = planeta.terrain;
          if (
              explorador.especialidades[terreno] &&
              explorador.especialidades[terreno].acertosCriticos >= 2 &&
              !explorador.especialidades[terreno].bonus
          ) {
              explorador.especialidades[terreno].bonus = 1;
          }

          return explorador;
      } catch (e) {
          return 'Erro: Entrada inválida. Certifique-se de que os JSONs estão corretos.';
      }
  }
},
  ...Array.from({ }, (_, i) => ({
    id: `hard-${i + 3}`,
    title: `Desafio Difícil ${i + 3}`,
    description: `Descrição para o desafio difícil ${i + 3}.`,
    difficulty: 'hard',
    inputs: [{ name: `inputD${i}`, type: 'text', label: `Entrada ${i + 1}:` }],
    solution: function(inputs) {
      return `Resultado para Desafio Difícil ${i + 3}: ${inputs[`inputD${i}`] || 'vazio'}`;
    }
  })),

  // --- VERY HARD ---
  {
    id: 'very-hard-1',
    title: 'Labirinto com Caminho',
    description: `Dado um labirinto representado por uma matriz, encontre o menor caminho entre o ponto inicial (S) e o ponto final (E). 
A matriz contém os seguintes elementos:
- 'S': Ponto inicial
- 'E': Ponto final
- '#': Obstáculo
- ' ': Caminho livre

Exemplo de entrada:
- Matriz: [[" ", " ", " ", " ", "#", " ", " "], [" ", "S", " ", " ", "#", " ", " "], [" ", " ", " ", "#", " ", " ", " "], [" ", "#", " ", "#", " ", " ", " "], [" ", "#", " ", " ", " ", "#", " "], ["#", "#", " ", "#", " ", " ", "E"], ["#", "#", " ", "#", " ", " ", " "]]

Saída esperada:
- Passos: Número mínimo de passos para chegar ao destino
- Caminho: Lista de coordenadas do caminho encontrado`,
    difficulty: 'very-hard',
    inputs: [
        { name: 'matriz', type: 'textarea', label: 'Digite a matriz do labirinto (ex: [[" ", "S", " "], ["#", " ", "E"]]):' }
    ],
    solution: function(inputs) {
        try {
            const matriz = JSON.parse(inputs.matriz);
            const linhas = matriz.length;
            const colunas = matriz[0].length;
            const direcoes = [[0, 1], [1, 0], [0, -1], [-1, 0]];

            let inicio, fim;

            for (let i = 0; i < linhas; i++) {
                for (let j = 0; j < colunas; j++) {
                    if (matriz[i][j] === 'S') inicio = [i, j];
                    if (matriz[i][j] === 'E') fim = [i, j];
                }
            }

            const fila = [[...inicio, 0, [inicio]]];
            const visitado = new Set();
            visitado.add(inicio.join(','));

            while (fila.length) {
                const [x, y, passos, caminho] = fila.shift();
                if (x === fim[0] && y === fim[1]) {
                    return `Passos: ${passos}\nCaminho: ${caminho.map(([i, j]) => `(${i}, ${j})`).join(' -> ')}`;
                }

                for (const [dx, dy] of direcoes) {
                    const nx = x + dx;
                    const ny = y + dy;

                    if (
                        nx >= 0 && nx < linhas &&
                        ny >= 0 && ny < colunas &&
                        matriz[nx][ny] !== '#' &&
                        !visitado.has(`${nx},${ny}`)
                    ) {
                        fila.push([nx, ny, passos + 1, [...caminho, [nx, ny]]]);
                        visitado.add(`${nx},${ny}`);
                    }
                }
            }
            return 'Não foi possível encontrar um caminho.';
        } catch (e) {
            return 'Erro: Entrada inválida. Certifique-se de que a matriz está correta.';
        }
    }
},
{
  id: 'very-hard-2',
  title: 'Planilha com Fórmulas',
  description: `Implemente uma planilha simples que permita:
- Escrever valores em células
- Ler valores de células (inclusive fórmulas)
- Usar fórmulas como SUM, SUB, MUL, DIV, MIN, MAX, AVG
- Salvar o estado da planilha
- Carregar o estado de uma planilha salva

Formato de comandos (um por linha):
- write A1 10
- write A2 5
- write A3 FORMULA(SUM(A1;A2))
- read A3
- save
- load {"A1":"5","A2":"2","A3":"FORMULA(MUL(A1;A2))"}
- read A3

**Observação**: A fórmula deve seguir o padrão "FORMULA(OP(ARG1;ARG2;...))"

Saída esperada:
- Lista com os resultados das ações de leitura e execução.`,

  difficulty: 'very-hard',
  inputs: [
    { name: 'comandos', type: 'textarea', label: 'Digite os comandos da planilha (um por linha):' }
  ],
  solution: function(inputs) {
    try {
      const linhas = inputs.comandos.trim().split('\n').map(l => l.trim()).filter(Boolean);

      class Spreadsheet {
        constructor() {
          this.data = {};
        }

        writeCell(cell, value) {
          this.data[cell] = value;
        }

        readCell(cell) {
          const value = this.data[cell];
          if (typeof value === 'string' && value.startsWith('FORMULA(')) {
            const formulaStr = value.slice(8, -1);
            return this.calculateFormula(formulaStr);
          }
          return value !== undefined ? value : 'Célula vazia';
        }

        calculateFormula(formulaStr) {
          const match = formulaStr.match(/^(\w+)\((.+)\)$/);
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

        load(json) {
          try {
            this.data = JSON.parse(json);
            return 'Planilha carregada.';
          } catch {
            return 'Erro ao carregar planilha.';
          }
        }
      }

      const planilha = new Spreadsheet();
      const resultados = [];

      for (const linha of linhas) {
        const [comando, ...resto] = linha.split(' ');

        if (comando === 'write') {
          const celula = resto[0];
          const valor = resto.slice(1).join(' ');
          planilha.writeCell(celula, valor);
        } else if (comando === 'read') {
          const celula = resto[0];
          resultados.push(planilha.readCell(celula));
        } else if (comando === 'save') {
          resultados.push(planilha.save());
        } else if (comando === 'load') {
          const json = linha.slice(5).trim();
          const resultado = planilha.load(json);
          if (resultado) resultados.push(resultado);
        } else {
          resultados.push(`Comando desconhecido: ${linha}`);
        }
      }

      return resultados;
    } catch (e) {
      return 'Erro: Comando inválido. Certifique-se de seguir o formato especificado.';
    }
  }
},
  ...Array.from({ }, (_, i) => ({
    id: `very-hard-${i + 1}`,
    title: `Desafio Muito Difícil ${i + 1}`,
    description: `Descrição para o desafio muito difícil ${i + 1}.`,
    difficulty: 'very-hard',
    inputs: [{ name: `inputVH${i}`, type: 'text', label: `Entrada ${i + 1}:` }],
    solution: function(inputs) {
      return `Resultado para Muito Difícil ${i + 1}: ${inputs[`inputVH${i}`] || 'vazio'}`;
    }
  }))
];
