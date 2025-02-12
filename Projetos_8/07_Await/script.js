function somaComDelay(a, b) {
   return new Promise(resolve => {
      setTimeout(function(){  // Simula um atraso de 4 segundos
         resolve(a + b);  // Resolve a Promise com o valor da soma de a e b
      }, 4000);  // A Promise será resolvida após 4 segundos
  })
}

async function resSoma(a, b, c) {

   let x = somaComDelay(a, b);  // Chama a função somaComDelay, que retorna uma Promise
   let y = c;  // A variável y é simplesmente o valor de c

   return await x + y;  // Espera pela resolução de x (somaComDelay) e depois soma o valor de y (c)
}

console.log(resSoma(1, 2, 3))  // Chama a função resSoma e imprime a Promise retornada por ela
    .then(value => console.log(value));  // Quando a Promise for resolvida, imprime o valor resultante
