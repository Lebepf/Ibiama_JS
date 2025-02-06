// A expressão regular /Abacaxi?i/ busca pelo padrão "Abacaxi" seguido opcionalmente pela letra "i" (por causa do "?" que torna o "i" opcional),
// e a flag "i" no final faz a busca ser **case insensitive** (ou seja, sem considerar maiúsculas ou minúsculas).

const padrao = /Abacaxi?i/;

console.log(padrao.test("Abacaxi")); // true - corresponde "Abacaxi", o "i" é opcional.
console.log(padrao.test("abacai")); // true - corresponde "abacai" (por conta da flag "i" que ignora o case).

// A expressão regular /\d+\w?/ busca por um ou mais dígitos seguidos por zero ou um caractere alfanumérico (letras ou números).
// \d+ significa um ou mais dígitos (0-9) e \w? significa zero ou um caractere alfanumérico.

const padrao2 = /\d+\w?/;

console.log(padrao2.test("123")); // true - "123" corresponde ao padrão: dígitos seguidos de 0 caracteres alfanuméricos.
console.log(padrao2.test("123a")); // true - "123a" também corresponde: dígitos seguidos de 1 caractere alfanumérico ("a").

