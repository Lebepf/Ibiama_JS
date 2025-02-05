const padrao = /Abacaxi?i/;

console.log(padrao.test("Abacaxi"));
console.log(padrao.test("abacai"));

const padrao2 = /\d+\w?/;

console.log(padrao2.test("123"));
console.log(padrao2.test("123a"));

