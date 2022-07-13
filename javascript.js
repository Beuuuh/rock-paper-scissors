function computerPlay() {
    let selector = Math.random()
    if(selector <= 0.3) {
        return "rock";
    } else if(selector <= 0.6) {
        return "paper";
    } else {
        return "scissors";
    };
};

let computerSelection;
let playerSelection;
let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    // checks every possibility
    if(playerSelection == "paper" && computerSelection == "scissors") {
        console.log(`You have put ${playerSelection} and computer have put ${computerSelection}... computer wins!`);
        computerWins++;
    } else if(playerSelection == "rock" && computerSelection == "paper") {
        console.log(`You have put ${playerSelection} and computer have put ${computerSelection}... computer wins!`);
        computerWins++;
    } else if(playerSelection == "scissors" && computerSelection == "rock") {
        console.log(`You have put ${playerSelection} and computer have put ${computerSelection}... computer wins!`);
        computerWins++;
    } if(playerSelection == "paper" && computerSelection == "rock") {
        console.log(`You have put ${playerSelection} and computer have put ${computerSelection}... you won!`);
        playerWins++;
    } else if(playerSelection == "rock" && computerSelection == "scissors") {
        console.log(`You have put ${playerSelection} and computer have put ${computerSelection}... you won!`);
        playerWins++;
    } else if(playerSelection == "scissors" && computerSelection == "paper") {
        console.log(`You have put ${playerSelection} and computer have put ${computerSelection}... you won!`);
        playerWins++;
    } else if(playerSelection == computerSelection) {
        console.log("It's a draw!");
    };
};

const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const playerLabel = document.getElementById("playerLabel");
const computerLabel = document.getElementById("computerLabel");

rock.addEventListener("click", () => {
    playerSelection = "rock";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

paper.addEventListener("click", () => {
    playerSelection = "paper";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

scissors.addEventListener("click", () => {
    playerSelection = "scissors";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
});

playerLabel.innerText = "Player score: " + playerWins;
computerLabel.innerText = "Computer score: " + computerWins;

if(playerWins < 5) {
    playerLabel.innerText = "Player score: " + playerWins;
    computerLabel.innerText = "Computer score: " + computerWins;
}