// Expressão regular para validar um email básico. 
// /\w+/ - Um ou mais caracteres alfanuméricos (letras, números e underscore).
// @ - O símbolo de arroba, separando o nome do domínio.
// \w+ - Mais caracteres alfanuméricos após o arroba.
// \. - O ponto, separando o domínio do TLD (exemplo: .com).
// \w+ - O TLD (exemplo: com, org, net) com pelo menos um caractere alfanumérico.

let validarEmail = /\w+@\w+\. \w+/;

// Testando alguns exemplos de emails:
console.log(validarEmail.test("Teste@email.com")); // true - válido
console.log(validarEmail.test("email@email")); // false - domínio sem TLD
console.log(validarEmail.test("ronaldo@yahoo.com.br")); // false - espaço entre o ponto e o TLD
console.log(validarEmail.test("email.com")); // false - falta o símbolo "@" e o domínio
