let x = document.querySelector(".x");
let o = document.querySelector(".o");

let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button"); // Corrigido para querySelectorAll
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {

    // quando alguém clica na caixa
    boxes[i].addEventListener("click", function () {

        // verifica se já tem o x ou o 
        if (this.childNodes.length == 0) { 

            let el = checkel(player1, player2);

            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);

            // computar a jogada
            if (player1 == player2) {
                player1++;
                
                if(secondPlayer == 'ai-player') {
                    // Execute a jogada da IA
                    computerPlayer();
                }
            } else {
                player2++;
            }
        }
    });
}

// Evento para saber se é 2 jogadores ou IA
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        secondPlayer = this.getAttribute("id");

        setTimeout(function () {
            let container = document.querySelector("#acontainer");
            container.classList.remove("hide");
        }, 500);
    });
}

// vê quem vai jogar
function checkel(player1, player2) {
    if (player1 == player2) {
        return x; // jogador 1 é X
    } else {
        return o; // jogador 2 é O
    }
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

    // Verificar as linhas para vitória
    const winConditions = [
        [b1, b2, b3],
        [b4, b5, b6],
        [b7, b8, b9],
        [b1, b4, b7],
        [b2, b5, b8],
        [b3, b6, b9],
        [b1, b5, b9],
        [b3, b5, b7]
    ];

    for (let condition of winConditions) {
        let [a, b, c] = condition;

        if (a.childNodes.length > 0 && b.childNodes.length > 0 && c.childNodes.length > 0) {
            let aChild = a.childNodes[0].className;
            let bChild = b.childNodes[0].className;
            let cChild = c.childNodes[0].className;

            if (aChild === bChild && bChild === cChild) {
                declareWinner(aChild); // Declara o vencedor
                return;
            }
        }
    }

    // Deu velha
    let counter = 0;
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes.length > 0) {
            counter++;
        }
    }

    if (counter === 9) {
        declareWinner('deu velha');
    }
}

// Limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner) {
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardY = document.querySelector("#scoreboard-2");
    let msg = '';

    if (winner === 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu";
    } else if (winner === 'o') {
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
        msg = "O jogador 2 venceu";
    } else {
        msg = "Deu velha!";
    }

    // Exibe a mensagem
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    // Esconde a mensagem após 3 segundos
    setTimeout(function () {
        messageContainer.classList.add("hide");
    }, 3000);

    // Zera as jogadas
    resetGame();
}

// Reseta o jogo
function resetGame() {
    player1 = 0;
    player2 = 0;

    let boxesToRemove = document.querySelectorAll(".box div");

    for (let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

// Função para o jogador AI (simples)
function computerPlayer() {
    let emptyBoxes = [];
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes.length === 0) {
            emptyBoxes.push(boxes[i]);
        }
    }

    if (emptyBoxes.length > 0) {
        let randomBox = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
        let el = o.cloneNode(true); // IA joga como 'O'
        randomBox.appendChild(el);
        player2++;
        checkWinCondition(); // Verificar vitória após jogada da IA
    }
}

// executar a lógica do CPU
function computarPlay() {


    let clone0 = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for(let i = 0; i < boxes.length; i++) {

        let randomNumber = Math.floor(Math.random() * 5);

        // só preencher se estiver vazio o filho
        if(boxes[i].childNodes[0] == undefined) {
        if(randomNumber <= 1) {
           boxes[i].appendChild(clone0);
           counter++;
           break;
        }
        // checagem de quantas estão preenchidas
     } else {
        filled++;
     }
     

  }

   if(counter == 0 && filled < 9) {
    computerPlayer();
   }

}



