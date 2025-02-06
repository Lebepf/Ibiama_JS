let validaDominio = /www\.\w+\.com|com\.br/;

console.log(validaDominio.test("www.google.com")); // true
console.log(validaDominio.test("www.teste")); // false
console.log(validaDominio.test("teste.com")); // false
console.log(validaDominio.test("www.horadeacordar.com.br")); // true
