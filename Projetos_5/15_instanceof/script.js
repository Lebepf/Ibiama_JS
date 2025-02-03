
// Definindo a classe Mamífero
class Mamifero {
    // O construtor da classe recebe o número de patas
    constructor(patas) {
        this.patas = patas; // Atribui o número de patas à propriedade "patas"
    }
}

// Criando um objeto "coiote" da classe Mamifero com 4 patas
let coiote = new Mamifero(4);
console.log(coiote.patas); // Mostra o número de patas do coiote (4)


// Definindo a classe Cachorro que herda de Mamifero
class Cachorro extends Mamifero {
    // O construtor da classe Cachorro recebe o número de patas e a raça do cachorro
    constructor(patas, raca) {
        super(patas); // Chama o construtor da classe mãe (Mamifero), passando o número de patas
        this.raca = raca; // Atribui a raça à propriedade "raca"
    }

    // Método para o cachorro latir
    latir() {
        console.log("Au Au"); // Exibe a mensagem "Au Au" quando chamado
    }
}

// Criando um objeto "pug" da classe Cachorro, com 4 patas e raça "pug"
let pug = new Cachorro(4, "pug");

// Mostra o número de patas do pug (4)
console.log(pug.patas);

// Chama o método latir do pug
pug.latir(); // Vai exibir "Au Au"

console.log(new cachorro instanceof Mamifero);
console.log(new coiote instanceof Mamifero);