// Função que cria um objeto 'cachorro' com propriedades específicas
function CriarCachorro(raca, patas, cor) {
    // Criando um novo objeto vazio usando Object.create({}), sem protótipo específico
    let cachorro = Object.create({});

    // Definindo as propriedades do objeto 'cachorro'
    cachorro.raca = raca;  // A raça do cachorro
    cachorro.patas = patas;  // Número de patas do cachorro
    cachorro.cor = cor;  // Cor do cachorro

    // Retornando o objeto 'cachorro' criado
    return cachorro;
}

// Criando um novo cachorro (doberman) com a função CriarCachorro
let doberman = CriarCachorro('Doberman', 4, 'preta');

// Exibindo o objeto 'doberman' no console
console.log(doberman);

