// Definindo a classe 'Cachorro' com um construtor
class Cachorro {
    // O 'constructor' é chamado quando a classe é instanciada e inicializa as propriedades 'raca' e 'cor'
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    // Método latir() que imprime "aU au" no console
    latir() {
        console.log("aU au");
    }
}

// Modificando o protótipo de 'Cachorro' para adicionar a propriedade 'patas' com valor 4
Cachorro.prototype.patas = 4;

// Criando um novo objeto 'labrador' da classe Cachorro, mas sem passar a propriedade 'patas'
let labrador = new Cachorro('Labrador', 'Amarelo');

// Exibindo a propriedade 'patas' do objeto 'labrador', que vem do protótipo
console.log(labrador.patas);
