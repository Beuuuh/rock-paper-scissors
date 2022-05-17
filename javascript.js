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

function game() {
    for(i = 0; i < 5; i++) {
        computerSelection = computerPlay()
        playerSelection = prompt("Try it out").toLowerCase()
        playRound(playerSelection, computerSelection)
        if(i == 5 && playerWins > computerWins) {
            console.log("YOU WON THE GAME!")
        } else if(i == 5 && playerWins < computerWins) {
            console.log("You lost the game!")
        } else {
            while(playerWins == computerWins) {
                computerSelection = computerPlay()
                playerSelection = prompt("Try it out").toLowerCase()
                playRound(playerSelection, computerSelection)
            }
        }
    }
}

game();