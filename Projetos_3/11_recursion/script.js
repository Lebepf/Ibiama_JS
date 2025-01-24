function recursao(n) {
   // Se n for menor que 2, a recursão para
   if(n < 2) {
      console.log("Recursão parou");
      return; // Terminamos a recursão
   }

   // Se o número for ímpar, imprime "Número ímpar"
   if(n % 2 !== 0) {
      console.log("Número ímpar");
      recursao(n - 1); // Chama a função novamente com n-1
   } else {
      // Se o número for par, imprime "Número par"
      console.log("Número par");
      recursao(n - 2); // Chama a função novamente com n-2
   }
}

// Exemplo de chamada da função:
recursao(5); // Isso irá testar com o número 5

//A recursão é quando uma função chama a si mesma para resolver um problema. Ela continua fazendo isso até atingir uma condição que a faça parar.