let ano = /\d\d\d\d/;
console.log(ano.test("05"));
console.log(ano.test("2019"));
console.log(ano.test("opa"));

let palavrasTresletras = /\w\w\w/;
console.log(palavrasTresletras.test("dia"));
console.log(palavrasTresletras.test("ano"));
console.log(palavrasTresletras.test("oi"));
console.log(palavrasTresletras.test("teste"));


