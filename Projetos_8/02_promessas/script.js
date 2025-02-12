let p = Promise.resolve(5);  // Cria uma Promise já resolvida, com o valor 5.

console.log("Outros codigos");  // Imprime "Outros codigos" imediatamente no console.

console.log(p);  // Imprime a Promise "p" no console. Vai mostrar algo como: Promise { 5 }.

p.then((value) => {  // Quando a Promise for resolvida, a função .then() será executada com o valor da resolução.
    console.log(`O valor e ${value}`);  // Exibe "O valor é 5" no console, porque a Promise foi resolvida com o valor 5.
});
