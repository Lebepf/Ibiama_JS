// Função construtora 'Cachorro' para criar objetos com propriedades e métodos
function Cachorro(raca, patas, cor) {
    // Usando 'this' para definir as propriedades do objeto
    this.raca = raca;  // Define a raça do cachorro
    this.patas = patas;  // Define o número de patas do cachorro
    this.cor = cor;  // Define a cor do cachorro

    // Método 'uivar' que imprime "Auuuuuu" no console
    this.uivar = function() {
        console.log("Auuuuuu");
    }
}

// Criando um novo objeto 'husky' usando a função construtora 'Cachorro' com o operador 'new'
let husky = new Cachorro('Husky', 4, 'cinza');

// Chamando o método 'uivar' do objeto 'husky', que imprime "Auuuuuu"
husky.uivar();
