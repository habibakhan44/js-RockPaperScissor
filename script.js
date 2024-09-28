

let choices = ["rock", "paper", "scissors"];
let playerDisplay = document.getElementById("playerDisplay");
let computerDisplay = document.getElementById("computerDisplay");
let resultDisplay = document.getElementById("resultDisplay");
let playerScoreDisplay = document.getElementById("playerScoreDisplay");
let computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                result = "YOU WIN!";
            } else {
                result = "YOU LOSE!";
            }
        } else if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                result = "YOU WIN!";
            } else {
                result = "YOU LOSE!";
            }
        } else if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                result = "YOU WIN!";
            } else {
                result = "YOU LOSE!";
            }
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    if (result === "YOU WIN!") {
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (result === "YOU LOSE!") {
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}

