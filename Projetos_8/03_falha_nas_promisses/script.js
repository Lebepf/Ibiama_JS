let p = Promise.resolve(new error("Não deu certo"));  // ERRO: "error" está com "e" minúsculo, deveria ser "Error" (nome da classe de erro é com letra maiúscula)

console.log("LALALA");  // Imprime "LALALA" imediatamente no console

p.then((value => console.log(value));  // ERRO: falta um parêntese de fechamento para a função anônima dentro do then
  .catch(reason => console.log("Falhou " + reason));  // ERRO: a linha acima tem erro de sintaxe, o .catch não pode ser encadeado corretamente
