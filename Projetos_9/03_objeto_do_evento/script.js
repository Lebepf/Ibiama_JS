let btn1 = document.querySelector("#abtn1");
let btn2 = document.querySelector("#abtn2");

function msg(e) {
     console.log(e);
}

btn1.addEventListener("Click", msg);

btn2.addEventListener("click", function(event) {
     console.log(event);
});