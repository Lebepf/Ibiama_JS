// Definindo um objeto 'pessoa' com a propriedade 'maos'
const pessoa = {
    maos: 2
}

// Aqui, usamos Object.getPrototypeOf para obter o protótipo do objeto 'pessoa'
// O protótipo é um objeto a partir do qual 'pessoa' herda propriedades e métodos.
console.log(Object.getPrototypeOf(pessoa));

// Verificamos se o protótipo de 'pessoa' é o protótipo padrão de objetos em JavaScript (Object.prototype)
// Isso é verdadeiro porque, por padrão, todos os objetos em JavaScript herdam de Object.prototype.
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

// Aqui estamos verificando se o objeto 'pessoa' tem a propriedade 'maos' como sua própria (não herdada)
console.log(pessoa.hasOwnProperty('maos'));
