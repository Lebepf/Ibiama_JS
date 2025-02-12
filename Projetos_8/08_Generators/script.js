function* criadorId() {  
   let id = 0;  // Inicializa a variável "id" com 0
   while(true) {  
      yield id++;  // "yield" retorna o valor atual de "id", depois incrementa "id"
    }
}

let criarId = criadorId();  // Chama a função geradora "criadorId", que retorna um iterador

console.log(criarId.next().value);  // Chama o "next" para obter o próximo valor gerado pela função geradora (primeiro "id" será 0)
console.log(criarId.next().value);  // Chama o "next" novamente, gerando o próximo valor de "id" (agora será 1)

