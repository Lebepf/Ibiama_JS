function checarnumero(valor) {
   let resultado = Number(valor);
   if(Number.isNaN(resultado)) {
      return null;
   }else {
      return resultado;
   }
}

console.log(checarnumero(5));
console.log(checarnumero("Testes"))