const p1 = new Promise(function(resolve, reject) {  
   setTimeout(function(){  // O setTimeout vai simular uma operação assíncrona que demora 5 segundos
       resolve(10);  // Depois de 5 segundos, resolve a Promise p1 com o valor 10
   }, 5000);  // 5000 milissegundos (5 segundos)
});

const p2 = Promise.resolve(10);  
// Aqui, p2 é uma Promise que já está resolvida imediatamente com o valor 10. Ela é resolvida de forma síncrona.

const p3 = new Promise((resolve, reject) => {
   resolve(10);  // p3 é uma Promise resolvida com o valor 10, mas isso acontece de forma assíncrona.
});

Promise.all([p1, p2, p3])  // O método Promise.all espera que todas as Promises sejam resolvidas ou rejeitadas.
   .then((values) => console.log(values));  
   // Quando todas as Promises (p1, p2, p3) forem resolvidas, o .then() é chamado.
   // O parâmetro `values` será um array com os resultados de todas as Promises: [10, 10, 10]
