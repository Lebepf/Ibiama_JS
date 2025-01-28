function DetectaDado(dado){
  if(typeof === 'string'){
    console.log("Seu dado é um string");

  } else(typeof === 'boolean'){
    console.log("Seu dado é um boolean");

  } else(typeof === 'number'){
    console.log("Seu dado é um number");
  }
}

DetectaDado(true);
DetectaDado(13);
DetectaDado("Oiii")