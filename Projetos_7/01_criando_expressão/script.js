let reg1 = new RegExp("bola");

console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem"));

const reg2 = /bola/;

console.log(reg2.test("tem bola?"))
console.log(reg2.test("Não tem"));
