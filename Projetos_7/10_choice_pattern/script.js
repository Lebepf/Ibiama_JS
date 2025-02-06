const reg = /\w+: (Matheus|João|Maria)/; // Busca por "Nome: Matheus", "Nome: João", ou "Nome: Maria"

console.log(reg.test("Nome: Mathues")); // false
console.log(reg.test("Nome: José"));   // false

