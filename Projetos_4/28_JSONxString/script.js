const pessoa = {
    "nome" : "Lebe",
    "idade" : 20,
    "profissa" : "Programados",
    "hobbies": ["Ler" , "Video game" , "Tocar"]
}

let pessoaText = JSON.stringify(pessoa);

console.log(pessoaText)

let pessoaJSON = JSON.parse(pessoaText);

console.log(pessoaJSON.hobbies[1]);

