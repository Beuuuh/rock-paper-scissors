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
    computer = computerSelection
    playerSelection = playerSelection
    console.log(computer)
}

function game(){
    for(i = 0; i < 5; i++) {
        playRound()
    }
}
