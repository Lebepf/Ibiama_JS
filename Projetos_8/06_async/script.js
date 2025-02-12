async function somar(a, b) {  
   // A palavra-chave "async" torna a função uma função assíncrona
   return a + b;  // A função retorna a soma de "a" e "b". Essa soma é automaticamente encapsulada em uma Promise.
}

console.log(somar(2, 4));  
// A função somar retorna uma Promise que resolve com o valor da soma (2 + 4 = 6), mas não estamos tratando o valor diretamente aqui.
// O que será impresso no console é a Promise pendente: Promise { <pending> }

somar(2, 4).then(value => console.log(value));  
// Aqui, estamos lidando com a Promise retornada pela função "somar" usando o .then()
// Quando a Promise for resolvida, o valor (6) será impresso no console.
