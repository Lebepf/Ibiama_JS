// A expressão regular pontoRegex corresponde a qualquer caractere, exceto quebras de linha.
const pontoRegex = /./;

console.log(pontoRegex.test("asd")); // true - qualquer caractere é aceito, "asd" tem caracteres.
console.log(pontoRegex.test(" ")); // true - o espaço é um caractere válido.
console.log(pontoRegex.test("123")); // true - números são caracteres válidos.
console.log(pontoRegex.test("123sad")); // true - "123sad" tem caracteres válidos.
console.log(pontoRegex.test("MAAA")); // true - letras maiúsculas são caracteres válidos.


// A expressão regular dRegex busca por um dígito (qualquer número entre 0 e 9).
const dRegex = /\d/; // \d é equivalente a [0-9]

console.log("d");
console.log(dRegex.test("asd")); // false - "asd" não tem nenhum dígito.
console.log(dRegex.test(" ")); // false - o espaço não é um dígito.


// A expressão regular dRegex2 busca por qualquer caractere que **não** seja um dígito (oposto de \d).
const dRegex2 = /\D/; // \D é equivalente a [^0-9]

console.log("D");
console.log(dRegex2.test("asd")); // true - "asd" não tem números, então é um match com \D.
console.log(dRegex2.test(" ")); // true - o espaço não é um dígito, então é um match com \D.


// A expressão regular sRegex busca por espaços em branco (inclui tabulação, espaço e quebras de linha).
const sRegex = /\s/;

console.log('s');
console.log(sRegex.test("asd")); // false - "asd" não tem espaço em branco.
console.log(sRegex.test(" ")); // true - o espaço é um espaço em branco.
console.log(sRegex.test("123")); // false - "123" não tem espaços em branco.
console.log(sRegex.test("aaaaa")); // false - "aaaaa" não tem espaço em branco.


// A expressão regular wRegex busca por caracteres alfanuméricos (letras, números e o caractere de sublinhado).
const wRegex = /\w/;

console.log('w');
console.log(wRegex.test(" ")); // false - o espaço não é um caractere alfanumérico.
console.log(wRegex.test("asd")); // true - "asd" são caracteres alfanuméricos.
console.log(wRegex.test("123")); // true - "123" são caracteres alfanuméricos (números).


