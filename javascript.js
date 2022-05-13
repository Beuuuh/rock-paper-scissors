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

let computerSelection = computerPlay()
let playerSelection = prompt("Try it out").toLowerCase()

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "paper" && computerSelection == "scissors") {
        console.log(`You have put ${playerSelection} and computer have put ${computerSelection}... computer wins!`)
    } else if(playerSelection == "rock" && computerSelection == "paper") {
        console.log(`You have put ${playerSelection} and computer have put ${computerSelection}... computer wins!`)
    } else if(playerSelection == "scissors" && computerSelection == "rock") {
        console.log(`You have put ${playerSelection} and computer have put ${computerSelection}... computer wins!`)
    } if(playerSelection == "paper" && computerSelection == "rock") {
        console.log(`You have put ${playerSelection} and computer have put ${computerSelection}... you won!`)
    } else if(playerSelection == "rock" && computerSelection == "scissors") {
        console.log(`You have put ${playerSelection} and computer have put ${computerSelection}... you won!`)
    } else if(playerSelection == "scissors" && computerSelection == "paper") {
        console.log(`You have put ${playerSelection} and computer have put ${computerSelection}... you won!`)
    } else {
        console.log("It's a draw!")
    }
}

function game(){
    for(i = 0; i < 5; i++) {
        playRound()
    }
}
