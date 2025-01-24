function MultiplicaTrtesNumeros(x, y ,z) {
 return x * y * z
}

console.log(MultiplicaTrtesNumeros(2 , 3 , 4));

const mult = MultiplicaTrtesNumeros(2 , 3  , 4) //OBS : Outra forma de fazer 

console.log("O valor é " + mult);

function podedirigir(idade , cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode dirigir!")
    }else{
        console.log("Não pode dirigir")
    }
}

console.log(podedirigir(19, true));
console.log(podedirigir(20, false));
console.log(podedirigir(14, true));
console.log(podedirigir(60, true));

