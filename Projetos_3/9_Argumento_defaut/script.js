function RepetirFrase(frase, n=2) {
   for(let x = 1; x<= n; x++) {
      console.log(frase + " " + x);
   }
}

RepetirFrase("Faz O L", 5);
RepetirFrase("Só duas vezes");

function potencial(base, exp=2) {
   return Math.pow(base,exp)
}

console.log(potencial(2));
console.log(potencial(2,3));
console.log(potencial(2,2));
