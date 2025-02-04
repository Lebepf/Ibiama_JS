class Carro {
    constructor(marca, cor, gasolinaRestante, consumo) {
      this.marca = marca;
      this.cor = cor;
      this.gasolinaRestante = gasolinaRestante;
      this.consumo = consumo; // Adicionei o consumo no construtor
    }

    dirigir(km) {
     let litrosConsumidos = km / this.consumo;
     this.gasolinaRestante -= litrosConsumidos;
    }

    abastecer(litros) { // Aqui você precisa de um parâmetro para a quantidade de combustível
        this.gasolinaRestante += litros;
    }
}

let carro = new Carro("vw" , "cinza" , 100, 10); // Adicionei o consumo (10 km por litro)

console.log(carro);

carro.dirigir(100);

console.log(carro);

carro.abastecer(10); // Abastecendo com 10 litros

console.log(carro);
