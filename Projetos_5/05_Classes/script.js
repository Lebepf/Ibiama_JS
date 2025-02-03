// Criando um objeto 'cachorro' com as propriedades 'patas', 'raca' e o método 'latir'
let cachorro = {
    patas: 4,
    raca: 'SRD',  // SRD significa "Sem Raça Definida"
    latir: function() {
        console.log("Au Au");  // Quando chamado, imprime "Au Au" no console
    }
}

// Criando um novo objeto 'labrador' que herda de 'cachorro'
// 'Object.create(cachorro)' cria um novo objeto que tem 'cachorro' como seu protótipo
let labrador = Object.create(cachorro);

// Chama o método 'latir' do protótipo 'cachorro', que é herdado por 'labrador'
// Isso vai imprimir "Au Au" no console, mesmo que 'labrador' não tenha o método 'latir' diretamente
labrador.latir();

// Modificando a propriedade 'raca' do objeto 'labrador'
// Isso não afeta a propriedade 'raca' de 'cachorro', pois estamos mudando diretamente em 'labrador'
labrador.raca = 'Labrador';

// Exibindo o valor da propriedade 'raca' de 'labrador' (que foi alterada para '
