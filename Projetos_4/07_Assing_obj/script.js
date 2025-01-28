let carro = {
    portas: 2,
    portamala: '200l',
    motor: '2.0',
}

 let adicionais = {
    tetosolar: true,
    arcondicionado: true,
 }

console.log(carro);

Object.assign(carro, adicionais);//segundo objeto que quro copiar

console.log(carro);




