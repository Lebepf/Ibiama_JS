function TestaTexto(texto){
  if(texto.length <= 10){
    console.log("Texto dentro do limite.")
  }else{
    console.log("Texto muito longo");
  }
}

console.log(TestaTexto("AAAAAAAAAAAA"));
