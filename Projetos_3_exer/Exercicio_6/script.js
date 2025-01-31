function DetectaDado(dado) {
  if (typeof dado === 'string') {
    console.log("Seu dado é um string");
  } else if (typeof dado === 'boolean') {
    console.log("Seu dado é um boolean");
  } else if (typeof dado === 'number') {
    console.log("Seu dado é um number");
  } else {
    console.log("Tipo de dado não identificado");
  }
}

DetectaDado(true);      // Vai imprimir: "Seu dado é um boolean"
DetectaDado(13);        // Vai imprimir: "Seu dado é um number"
DetectaDado("Oiii");    // Vai imprimir: "Seu dado é um string"
