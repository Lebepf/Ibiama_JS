let input = document.querySelector("#Inpu1");

input.addEventListener("focus" ,function() {
   console.log("Entrou no input");
});

input.addEventListener("blur" ,function() {
     console.log("Saiu");
  });