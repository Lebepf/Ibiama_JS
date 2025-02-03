// Definindo a classe 'cachorro' usando a sintaxe de classes (ES6)
class cachorro {
    // O método 'constructor' é utilizado para inicializar as propriedades do objeto
    constructor(raca, patas, cor) {
        // Definindo as propriedades do objeto usando 'this'
        this.raca = raca;  // A raça do cachorro
        this.patas = patas;  // O número de patas do cachorro
        this.cor = cor;  // A cor do cachorro
    }
}

// Criando uma instância da classe 'cachorro' chamada 'labrador'
// Passamos 'Labrador', 4 e 'preta' como valores para as propriedades raca, patas e cor
let labrador = new cachorro('Labrador', 4, 'preta');

// Exibindo a propriedade 'raca' do objeto 'labrador' no console
console.log(labrador.raca);
