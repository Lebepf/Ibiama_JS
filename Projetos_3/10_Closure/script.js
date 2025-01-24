function armazenaSoma(x) {
   return y => x + y;

}

let soma1 = armazenaSoma(3);
console.log(soma1(5)); //8, ela lembra do lugar que foi criada.
let soma2 = armazenaSoma(5);
console.log(soma2(10)); //15