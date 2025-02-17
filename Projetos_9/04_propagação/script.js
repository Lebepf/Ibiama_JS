let btn1 = document.querySelector("#abtn1");
let btn2 = document.querySelector("#abtn2");
let p = document.querySelector("p");

function msg(e) {
     console.log("Clicou no button");
     e.stopPropagation();
}

btn1.addEventListener("Click", msg);

btn2.addEventListener("click", function(event) {
     console.log(event);
});

p.addEventListener("click", function() {
     console.log("clico no paragrafo");
}) 