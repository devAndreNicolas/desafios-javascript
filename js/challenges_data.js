// js/challenges_data.js

// (Cole aqui o array 'challenges' completo da resposta anterior)
// Exemplo resumido:
export const challenges = [
    // --- FÁCIL ---
    {
        id: 'easy-1',
        title: 'Soma de Dois Números',
        description: 'Crie uma função que receba dois números como entrada e retorne a soma deles.',
        difficulty: 'easy',
        inputs: [
            { name: 'numero1', type: 'number', label: 'Primeiro número:' },
            { name: 'numero2', type: 'number', label: 'Segundo número:' }
        ],
        solution: function(inputs) {
            const num1 = parseFloat(inputs.numero1);
            const num2 = parseFloat(inputs.numero2);
            if (isNaN(num1) || isNaN(num2)) {
                return 'Erro: Por favor, insira números válidos.';
            }
            return `A soma de ${num1} e ${num2} é: ${num1 + num2}`;
        }
    },
    {
        id: 'easy-2',
        title: 'Contar Caracteres',
        description: 'Crie uma função que receba uma string e retorne o número de caracteres que ela possui.',
        difficulty: 'easy',
        inputs: [
            { name: 'texto', type: 'text', label: 'Digite um texto:' }
        ],
        solution: function(inputs) {
            const str = inputs.texto;
            if (typeof str !== 'string') {
                return 'Erro: Entrada inválida.';
            }
            return `O texto "${str}" possui ${str.length} caracteres.`;
        }
    },
    // Adicione mais 8 desafios fáceis aqui... (placeholders da resposta anterior)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: `easy-${i + 3}`, title: `Desafio Fácil ${i + 3}`, description: `Descrição para o desafio fácil ${i + 3}.`, difficulty: 'easy',
        inputs: [{ name: `inputF${i}`, type: 'text', label: `Entrada ${i+1}:` }],
        solution: function(inputs) { return `Resultado para Desafio Fácil ${i + 3} com entrada: ${inputs[`inputF${i}`] || 'vazia'}`; }
    })),

    // --- MÉDIO ---
    {
        id: 'medium-1',
        title: 'Inverter String',
        description: 'Crie uma função que receba uma string e retorne a string invertida.',
        difficulty: 'medium',
        inputs: [
            { name: 'stringOriginal', type: 'text', label: 'String para inverter:' }
        ],
        solution: function(inputs) {
            const str = inputs.stringOriginal;
            if (typeof str !== 'string') { return 'Erro: Entrada inválida.'; }
            return `A string invertida é: ${str.split('').reverse().join('')}`;
        }
    },
    {
        id: 'medium-2',
        title: 'Verificar Palíndromo',
        description: 'Crie uma função que verifique se uma palavra ou frase é um palíndromo (lê-se igual de trás para frente, desconsiderando espaços e maiúsculas/minúsculas).',
        difficulty: 'medium',
        inputs: [
            { name: 'textoPalindromo', type: 'text', label: 'Texto para verificar:' }
        ],
        solution: function(inputs) {
            const str = inputs.textoPalindromo;
            if (typeof str !== 'string' || !str.trim()) { return 'Erro: Forneça um texto válido.'; }
            const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
            const reversedStr = cleanedStr.split('').reverse().join('');
            if (cleanedStr === reversedStr) {
                return `"${str}" é um palíndromo! ✅`;
            } else {
                return `"${str}" não é um palíndromo. ❌`;
            }
        }
    },
    // Adicione mais 8 desafios médios aqui... (placeholders da resposta anterior)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: `medium-${i + 3}`, title: `Desafio Médio ${i + 3}`, description: `Descrição para o desafio médio ${i + 3}.`, difficulty: 'medium',
        inputs: [{ name: `inputM${i}`, type: 'text', label: `Entrada ${i+1}:` }],
        solution: function(inputs) { return `Resultado para Desafio Médio ${i + 3} com entrada: ${inputs[`inputM${i}`] || 'vazia'}`; }
    })),

    // --- DIFÍCIL ---
    {
        id: 'hard-1',
        title: 'Fatorial de um Número',
        description: 'Crie uma função que calcule o fatorial de um número inteiro não negativo. (Ex: 5! = 5*4*3*2*1 = 120)',
        difficulty: 'hard',
        inputs: [
            { name: 'numeroFatorial', type: 'number', label: 'Número para calcular fatorial:' }
        ],
        solution: function(inputs) {
            const n = parseInt(inputs.numeroFatorial);
            if (isNaN(n) || n < 0) {
                return 'Erro: Insira um número inteiro não negativo.';
            }
            if (n === 0 || n === 1) return `O fatorial de ${n} é: 1`;
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
            }
            return `O fatorial de ${n} é: ${result}`;
        }
    },
    {
        id: 'hard-2',
        title: 'Sequência de Fibonacci',
        description: 'Crie uma função que retorne o n-ésimo número da sequência de Fibonacci. A sequência começa com 0 e 1. (Ex: F(0)=0, F(1)=1, F(2)=1, F(3)=2, ...)',
        difficulty: 'hard',
        inputs: [
            { name: 'nFibonacci', type: 'number', label: 'Posição na sequência de Fibonacci (n >= 0):' }
        ],
        solution: function(inputs) {
            const n = parseInt(inputs.nFibonacci);
            if (isNaN(n) || n < 0) {
                return 'Erro: Insira um número inteiro não negativo para a posição.';
            }
            if (n === 0) return `F(0) = 0`;
            if (n === 1) return `F(1) = 1`;
            
            let a = 0, b = 1, temp;
            for (let i = 2; i <= n; i++) {
                temp = a + b;
                a = b;
                b = temp;
            }
            return `O ${n}º número de Fibonacci (F(${n})) é: ${b}`;
        }
    },
    // Adicione mais 8 desafios difíceis aqui... (placeholders da resposta anterior)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: `hard-${i + 3}`, title: `Desafio Difícil ${i + 3}`, description: `Descrição para o desafio difícil ${i + 3}.`, difficulty: 'hard',
        inputs: [{ name: `inputD${i}`, type: 'text', label: `Entrada ${i+1}:` }],
        solution: function(inputs) { return `Resultado para Desafio Difícil ${i + 3} com entrada: ${inputs[`inputD${i}`] || 'vazia'}`; }
    }))
];