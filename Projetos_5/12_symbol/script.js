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

// Modificando o protótipo de 'Cachorro' para adicionar a propriedade 'raca' com valor 'SRD'
Cachorro.prototype.raca = 'SRD';

// Criando um símbolo para a propriedade 'patas'
// Usar Symbol para criar propriedades privadas que não podem ser acessadas facilmente
let patas = Symbol();

// Adicionando a propriedade 'patas' no protótipo de 'Cachorro' com o valor 4
Cachorro.prototype[patas] = 4;

// Criando um novo objeto 'labrador' da classe Cachorro
let labrador = new Cachorro('Labrador', 'Amarelo');

// Tentando acessar a propriedade 'patas' do objeto 'labrador'
// Como 'patas' está definida no protótipo com Symbol, não será acessível diretamente como uma propriedade comum
console.log(labrador.patas);  // 'undefined', pois 'patas' não é uma propriedade normal no objeto

// Chamada incorreta de método 'lati()', que não existe
// Isso causará um erro porque o método correto é 'latir()'
labrador.lati();  // Erro! 'lati' não é uma função, deveria ser 'latir'

// Acessando a propriedade 'raca' do protótipo de 'Cachorro'
console.log(Cachorro.prototype.raca);  // 'SRD', porque foi definida no protótipo

// Acessando a propriedade 'raca' diretamente do objeto 'labrador'
// O valor da 'raca' é 'Labrador', pois foi passado para o objeto na criação
console.log(labrador.raca);  // 'Labrador', porque foi definido diretamente no objeto

// Acessando a propriedade com o Symbol 'patas' no protótipo
console.log(Cachorro.prototype[patas]);  // 4, porque 'patas' foi definido no protótipo com Symbol

// Acessando a propriedade 'patas' no objeto 'labrador' usando o Symbol
console.log(labrador[patas]);  // 4, porque 'patas' foi definido como Symbol no objeto
