// Função construtora 'Cachorro' para criar objetos com propriedades
function Cachorro(raca, patas, cor) {
    // Definindo as propriedades do objeto com 'this'
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

// Adicionando o método 'uivar' ao protótipo de 'Cachorro'
// Isso significa que todos os objetos criados com 'Cachorro' terão o método 'uivar'
Cachorro.prototype.uivar = function() {
    console.log("Auuuuu");
}

// Criando um novo objeto 'husky' usando a função construtora 'Cachorro'
let husky = new Cachorro('Husky', 4, 'cinza');

// Chamando o método 'uivar' no objeto 'husky', que foi herdado através do protótipo
husky.uivar();
