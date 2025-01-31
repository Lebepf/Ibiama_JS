let num = [1,2,3,4,5,6];
let coisa = ["caneta" , "lapis", "diamante"];

function verificaElemento(arr) {
    if(arr.length > 5) {
        console.log("Muitos elementos")
    }else{
        console.log("Poucos elementos");
    }
}

verificaElemento(num);
verificaElemento(coisa);