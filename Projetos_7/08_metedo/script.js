// A expressão regular /\d+/ busca por uma sequência de um ou mais dígitos numéricos.

const digitos = /\d+/;

console.log(digitos.exec("Tem o número 100 aqui")); // ["100"] - A regex encontra a sequência "100" (dígitos) na string.
console.log(digitos.exec("Tem o número aqui")); // null - Não há dígitos na string, então não há correspondência.
