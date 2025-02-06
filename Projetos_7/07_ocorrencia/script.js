// A expressão regular para o CEP brasileiro (formato 12345-678):
// \d{5} - Cinco dígitos numéricos.
// - - O hífen literal que separa a parte do CEP.
// \d{3} - Três dígitos numéricos após o hífen.

const cep = /\d{5}-\d{3}/;

console.log(cep.test("88117-500")); // true - "88117-500" corresponde ao padrão (5 dígitos, hífen e 3 dígitos).
console.log(cep.test("asd")); // false - "asd" não é um número e não segue o formato do CEP.
console.log(cep.test("881-50")); // false - Faltam 2 dígitos antes do hífen.
console.log(cep.test("99999-999")); // true - "99999-999" segue o formato correto de CEP.


// A expressão regular para o número de telefone (formato (XX)XXXXX-XXXX ou (XX)XXXX-XXXX):
// (\d{2}) - Captura dois dígitos (o código de área) entre parênteses.
// \d{4,5} - Corresponde a 4 ou 5 dígitos após o código de área.
// - - O hífen literal separando o número de telefone.
// \d{4} - Corresponde a 4 dígitos finais do telefone.

const tel = /(\d{2})\d{4,5}-\d{4}/;

console.log(tel.test("(48)9999-9999")); // true - "9999-9999" corresponde ao formato esperado.
console.log(tel.test("(48)55555-4444")); // tr



