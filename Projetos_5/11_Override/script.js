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

// Modificando o protótipo de 'Cachorro' para adicionar a propriedade 'raca' e 'patas' com valores padrão
Cachorro.prototype.raca = 'SRD';  // Definindo um valor padrão para 'raca'
Cachorro.prototype.patas = 4;  // Definindo um valor padrão para 'patas'

// Criando um novo objeto 'labrador' da classe Cachorro
let labrador = new Cachorro('Labrador', 'Amarelo');

// Exibindo a propriedade 'patas' do objeto 'labrador', que vem do protótipo
console.log(labrador.patas);  // Espera-se que imprima 4, pois o protótipo define 'patas' como 4

// O método 'latir()' existe na classe Cachorro, mas o código tenta chamar 'lati()' no objeto 'labrador'
// Isso gerará um erro, pois 'lati' não é um método definido nem no objeto nem no protótipo.
labrador.latir();  // Erro! Deveria ser 'labrador.latir()' (Erro: 'lati' não é uma função)

// Exibindo o valor da propriedade 'raca' do protótipo de 'Cachorro', que é 'SRD'
console.log(Cachorro.prototype.raca);  // Exibe 'SRD', pois é o valor definido no protótipo

// Exibindo a propriedade 'raca' do objeto 'labrador', que foi passada ao criar o objeto
console.log(labrador.raca);  // Exibe 'Labrador', pois foi definido diretamente no objeto 'labrador'
