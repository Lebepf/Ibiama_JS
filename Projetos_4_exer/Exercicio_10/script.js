const calculadora = {
    soma : function(a,b) {
        return a + b;
    },
    subtrair : function(a,b) {
        return a - b;
    },
    multiplicar : function(a,b){
        return a * b;
    },
    dividir : function(a,b){
        return a / b;
    }
}

console.log(calculadora.soma(1,2));
console.log(calculadora.subtrair(7,5));
console.log(calculadora.multiplicar(10,12));
console.log(calculadora.dividir(20,2));