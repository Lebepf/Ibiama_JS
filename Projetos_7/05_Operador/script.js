// A expressão regular /[^123]/ busca por qualquer caractere que NÃO seja "1", "2" ou "3".
// O símbolo ^ dentro dos colchetes [^...] significa "negativo", ou seja, corresponderá a qualquer caractere que NÃO esteja na lista fornecida.

let palavrasSemAeB = /[^123]/;

console.log(palavrasSemAeB.test("1112")); // true - contém "2", que não está na lista [1, 2, 3].
console.log(palavrasSemAeB.test("14")); // true - contém "4", que não está na lista [1, 2, 3].
console.log(palavrasSemAeB.test("1")); // false - "1" está na lista [1, 2, 3], logo não é um match.

