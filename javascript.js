function computerPlay() {
    let selector = Math.random()
    if(selector <= 0.3) {
        return "rock"
    } else if(selector <= 0.6) {
        return "paper"
    } else {
        return "scissors"
    }
}

let computerSelection
let playerSelection
let playerWins = 0
let computerWins = 0

function playRound(playerSelection, computerSelection) {
    // checks every possibility
    if(playerSelection == "paper" && computerSelection == "scissors") {
        console.log(`You have put ${playerSelection} and computer have put ${computerSelection}... computer wins!`)
        computerWins++
    } else if(playerSelection == "rock" && computerSelection == "paper") {
        console.log(`You have put ${playerSelection} and computer have put ${computerSelection}... computer wins!`)
        computerWins++
    } else if(playerSelection == "scissors" && computerSelection == "rock") {
        console.log(`You have put ${playerSelection} and computer have put ${computerSelection}... computer wins!`)
        computerWins++
    } if(playerSelection == "paper" && computerSelection == "rock") {
        console.log(`You have put ${playerSelection} and computer have put ${computerSelection}... you won!`)
        playerWins++
    } else if(playerSelection == "rock" && computerSelection == "scissors") {
        console.log(`You have put ${playerSelection} and computer have put ${computerSelection}... you won!`)
        playerWins++
    } else if(playerSelection == "scissors" && computerSelection == "paper") {
        console.log(`You have put ${playerSelection} and computer have put ${computerSelection}... you won!`)
        playerWins++
    } else if(playerSelection == computerSelection) {
        console.log("It's a draw!")
    }
}

let rock = document.querySelector(".Rock")
let scissors = document.querySelector(".Scissors")
let paper = document.querySelector(".Paper")

rock.addEventListener("click", playRound(rock, computerSelection))
scissors.addEventListener("click", playRound(scissors, computerSelection))
paper.addEventListener("click", playRound(paper, computerSelection))
