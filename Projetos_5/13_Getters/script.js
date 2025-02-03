class Cachorro{
    constructor(raca,patas,cor) {
        this.raca = raca;
        this.cor = cor;
    }

latir() {
    console.log("aU au");
}

get getcor () {
    return this.cor
}
set setcor(cor) {
    this.cor = cor;
}


}

let pastor = new cachorro('Pastor Alemão' , 'Sem cor');

console.log(pastor);

pastor.setCor = 'Marrom' ;

console.log(pastor.getcor);

