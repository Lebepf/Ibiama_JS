function imprimePar(num) {
   for (let i = num; i >= 0; i--) {  // Usando ponto e vírgula
      if (i % 2 == 0) {
         console.log(i);
      }
   }
}

imprimePar(10);  // Vai imprimir: 10, 8, 6, 4, 2, 0
