function verificarNumero(num) {  // Define uma função que retorna uma Promise
   return new Promise((resolve, reject) => {  // Cria uma Promise que resolve ou rejeita com base na lógica interna
       if(num == 2) {  // Se o número passado for igual a 2, resolve a Promise
           resolve(`O número é ${num}`);  // Resolve a Promise com uma mensagem
       } else {  // Caso contrário (se o número não for 2)
           reject(new Error("Falhou"));  // Rejeita a Promise com um erro
       }
   });
}

verificarNumero(2);  // Chama a função com o valor 2. Espera-se que a Promise seja resolvida com a mensagem "O número é 2"
verificarNumero(3);  // Chama a função com o valor 3. Espera-se que a Promise seja rejeitada com um erro "Falhou"

