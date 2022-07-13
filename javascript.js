//GAME

let computerSelection;
let playerSelection;
let playerWins = 0;
let computerWins = 0;
let roundWinner = "";

function playRound(playerSelection, computerSelection) {
    // checks every possibility
    if (playerSelection == computerSelection) {
        roundWinner = 'tie';
    };
    if ((playerSelection == 'rock' && computerSelection === 'scissors') ||
        (playerSelection == 'scissors' && computerSelection === 'paper') ||
        (playerSelection == 'paper' && computerSelection === 'rock')) {
        playerWins++;
        roundWinner = 'player';
    };
    if ((computerSelection == 'rock' && playerSelection === 'scissors') ||
        (computerSelection == 'scissors' && playerSelection === 'paper') ||
        (computerSelection == 'paper' && playerSelection === 'rock')) {
        computerWins++;
        roundWinner = 'computer';
    };
    updateScore();
};

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


const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
let playerLabel = document.getElementById("playerLabel");
let computerLabel = document.getElementById("computerLabel");
let tieWinLost = document.getElementById("twl");

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

function updateScore() {
    if(roundWinner == "tie") {
        tieWinLost.textContent = "Tie!";
        playerLabel.textContent = `Player score: ${playerWins}`;
        computerLabel.textContent = `Computer score ${computerWins}`;
        console.log("Tie");
    }; 
    if(roundWinner == "player") {
       tieWinLost.textContent = "You have WON!";
       playerLabel.textContent = `Player score: ${playerWins}`;
       computerLabel.textContent = `Computer score ${computerWins}`;
       console.log("player won");
    };  
    if(roundWinner == "computer") {
        tieWinLost.textContent = "You have LOST!";
        playerLabel.textContent = `Player score: ${playerWins}`;
        computerLabel.textContent = `Computer score ${computerWins}`;
        console.log("computer won");
    };
};
