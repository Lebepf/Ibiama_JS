let validaDataDeNasc = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validaDataDeNasc.test('25/12/2025'));  // true - corresponde ao formato correto "DD/MM/AAAA"
console.log(validaDataDeNasc.test('25/12/15'));    // false - ano com apenas 2 dígitos (precisa de 4 dígitos no ano)
console.log(validaDataDeNasc.test('2/2/2015'));    // false - dia e mês devem ter 2 dígitos
console.log(validaDataDeNasc.test('30/02/1999')); // true - formato está correto, mas é uma data inválida (isso não é validado pela regex)