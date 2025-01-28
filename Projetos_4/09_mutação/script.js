let pessoa = {
    nome: 'Kethelen',  
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: "Jess",
}

console.log(pessoa == pessoa2);

pessoa2.nome = "pedro";

console.log(pessoa.nome);

pessoa.nome = "Maria";

console.log(pessoa2.nome);

console.log(pessoa3.nome);