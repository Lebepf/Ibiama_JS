// Definindo um objeto 'cachorro' com várias propriedades e métodos
const cachorro  = {
    // Propriedade 'raca' que armazena a raça do cachorro
    raca: 'SRD',
    
    // Método 'uivar', que imprime "Auuuuuuu" no console
    uivar: function() {
        console.log("Auuuuuuu");
    },

    // Método 'rosnar', que imprime "grrrrr" no console
    rosnar: function() {
        console.log("grrrrr");
    },

    // Método 'setRaca' que altera o valor da propriedade 'raca'
    setRaca: function(raca) {
        this.raca = raca;  // 'this' se refere ao objeto 'cachorro', alterando o valor de 'raca'
    },

    // Método 'getRaca' que retorna uma string com a raça atual do cachorro
    getRaca: function() {
        return "A raça é " + this.raca;
    }
}

// Exibe a raça atual do cachorro (que é 'SRD') no console
console.log(cachorro.raca);

// Altera a raça do cachorro para 'Pastor alemão' usando o método 'setRaca'
cachorro.setRaca('Pastor alemão');

// Exibe a nova raça do cachorro (que agora é 'Pastor alemão') no console
console.log(cachorro.raca);

// Chama o método 'getRaca' para exibir a raça do cachorro em uma string formatada
console.log(cachorro.getRaca());
