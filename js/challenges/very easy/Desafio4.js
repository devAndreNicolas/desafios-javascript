function quadradoConcatenado(numero){
    const numeroStr = numero.toString();

    const resultado = numeroStr
    .split('')
    .map(digito=> {
        const n = Number(digito);
        return n * n;
})
    .join('');

    return Number(resultado);
}

const entrada = prompt("Digite um número:");
const resultado = quadradoConcatenado(Number(entrada));
alert("Resultado: " + resultado);
