let x = document.querySelector(".x");
let o = document.querySelector(".o");

let boxes = document.querySelectorAll(".box"); // Corrigido para querySelectorAll para selecionar todas as caixas
let buttons = document.querySelector("#buttons-contaier button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) { // Corrigido para boxes.length, que é o número de caixas

    // quando alguém clica na caixa
    boxes[i].addEventListener("click", function () { // Corrigido addEventListener (letra maiúscula "L")

        // verifica se já tem o x ou o 
        if (this.childNodes.length == 0) { // Correção: verifica se não há filhos

            let el = checkel(player1, player2);

            let cloneEl = el.cloneNode(true); // Corrigido para clonar o elemento X ou O
            this.appendChild(cloneEl);

            // computar a jogada
            if (player1 == player2) {
                player1++;
            } else {
                player2++;
            }
        }
    });
}

// vê quem vai jogar
function checkel(player1, player2) {

    if (player1 == player2) {
        // x
        el = x;
    } else {
        // o
        el = o;
    }
    return el;
}

// quem venceu esta coisa?
function checkWinCondition() {
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    // horizontal 
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if (b1child == 'x' && b2child == 'x' && b3child == 'x') {
            // x
            declareWinner('x');
        } else if (b1child == 'o' && b2child == 'o' && b3child == 'o') {
            // o
            declareWinner('o');
        }
    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className;

        if (b4child == 'x' && b5child == 'x' && b6child == 'x') {
            // x
            declareWinner('x');
        } else if (b4child == 'o' && b5child == 'o' && b6child == 'o') {
            // o
            declareWinner('o');
        }
    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7child = b7.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if (b7child == 'x' && b8child == 'x' && b9child == 'x') {
            // x
            declareWinner('x');
        } else if (b7child == 'o' && b8child == 'o' && b9child == 'o') {
            // o
            declareWinner('o');
        }
    }

    // deu velha
    let counter = 0;

    for (let i = 0; i < boxes.length; i++) { // Corrigido: foi "> boxes.length" para "< boxes.length"
        if (boxes[i].childNodes.length > 0) { // Corrigido para verificar se há algo dentro da caixa
            counter++;
        }
    }

    if (counter == 9) {
        declareWinner('deu velha');
    }
}

// limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner) {

    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardY = document.querySelector("#scoreboard-2"); // Corrigido o ID para scoreboard-2
    let msg = '';

    if (winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1; // Corrigido para textContent
        msg = "O jogador 1 venceu"
    } else if (winner == 'o') {
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1; // Corrigido para textContent
        msg = "O jogador 2 venceu"
    } else {
        msg = "Deu velha!";
    }

    // exibe msg
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");
}

// esconde msg
setTimeout(function () {
    messageContainer.classList.add("hide");
}, 3000);

// zera as jogadas
player1 = 0;
player2 = 0;

// remove x e o
let boxestoRemove = document.querySelectorAll(".box div");

for (let i = 0; i < boxestoRemove.length; i++) {
    boxestoRemove[i].parentNode.removeChild(boxestoRemove[i]);
}
