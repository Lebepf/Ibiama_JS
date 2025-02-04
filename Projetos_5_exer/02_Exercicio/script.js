class Carrinho {
    constructor() {
        this.itens = [
            {
                id: 1, // Corrigido o ID para ser um número inteiro
                nome: "Camisa",
                qtd: 1,
                preco: 20
            },
            {
                id: 2, // Corrigido o ID para ser um número inteiro
                nome: "Calça",
                qtd: 2,
                preco: 50
            }
        ];
        this.qtd = 3;
        this.valorTotal = 120;
    }

    addItem(item) {
        let contador = 0;

        for (let itemCarrinho of this.itens) {
            if (itemCarrinho.id === item.id) {  // Garantir comparação numérica entre os IDs
                itemCarrinho.qtd += item.qtd;  // Atualiza a quantidade do item no carrinho
                contador = 1;
            }
        }

        if (contador === 0) {
            this.itens.push(item); // Adiciona o novo item
        }

        this.qtd += item.qtd; // Atualiza a quantidade total de itens no carrinho
        this.valorTotal += item.preco * item.qtd; // Atualiza o valor total
    }
}

// Criando uma instância do carrinho
let carrinho = new Carrinho();

console.log(carrinho); // Exibe o carrinho inicial

// Adicionando um item existente no carrinho
carrinho.addItem({id: 1, nome: "Camisa", qtd: 2, preco: 20});

console.log(carrinho); // Exibe o carrinho após adicionar 2 Camisas

// Adicionando um item novo no carrinho
carrinho.addItem({id: 3, nome: "Boné", qtd: 1, preco: 15});

console.log(carrinho); // Exibe o carrinho após adicionar o Boné



