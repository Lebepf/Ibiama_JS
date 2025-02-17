let btn1 = document.querySelector("#abtn1");
let btn2 = document.querySelector("#abtn2");

function msg() {
     console.log("Clicou em mim")
}

btn1.addEventListener("Click", msg);

btn1.addEventListener("click", function() {
     btn1.removeEventListener("click", msg);
});