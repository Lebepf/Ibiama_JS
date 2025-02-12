const validaMatricula = /[A-Z]/;

console.log(validaMatricula.test("testando"));
console.log(validaMatricula.test("123"));
console.log(validaMatricula.test("TESTANDO"));