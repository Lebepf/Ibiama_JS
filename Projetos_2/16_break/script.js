for (let i = 0; i < 10; i = i + 1) {

  let nome = "Lebe";

  if (i == 3) {
    nome = "Mave";
  }
  if (i == 5 && nome == "Mave") {  // Fixed the assignment operators to comparison operators
    console.log("O nome é Mave, pode parar");
    break;
  }
  console.log(i);
}
