// RegExp usando a forma construtora, onde a string "bola" é passada como argumento para criar a expressão regular.
let reg1 = new RegExp("bola");

console.log(reg1.test("Tem bola?")); // true - "bola" é encontrado na string.
console.log(reg1.test("Não tem")); // false - "bola" não está presente.

const reg2 = /bola/; // Outra forma de criar uma expressão regular, usando a notação literal.

console.log(reg2.test("tem bola?")) // true - "bola" é encontrado na string.
console.log(reg2.test("Não tem")) // false - "bola" não está presente.

