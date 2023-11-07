function getMove(){
    let num = Math.ceil(Math.random() * 3)
    let move
    switch(num){
        case 1:
            move = "Rock"
            break
        case 2:
            move = "Paper"
            break
        case 3:
            move = "Scissors"
            break
    }
    return move
}
let table = document.getElementById("table")
let playerScoreElement = document.getElementById("scoreP")
let computerScoreElement = document.getElementById("scoreC")

let message = document.getElementById("message")
table.append(message)

let playerScore = 0
let computerScore = 0

function updateScore(){
    playerScoreElement.textContent = "Player Score: " + playerScore
    computerScoreElement.textContent = "Computer Score: " + computerScore
}

function checkGameEnd(){
    if(playerScore===5){
        message.innerText = "Player wins the game! With the score of 5 against " + computerScore
        resetGame()
    }
    else if (computerScore === 5) {
        message.innerText = "Computer wins the game! With the score of 5 against " + playerScore
        resetGame()
    }
}

function resetGame() {
    playerScore = 0
    computerScore = 0
    updateScore()
}

function playGame(pickOne){
    let playerMove = pickOne
    let computerMove = getMove()

    if (playerMove == computerMove){
        message.innerText = "It's a DRAW!";
    }
    else if (playerMove == "Rock" && computerMove == "Scissors"){
        message.innerText = "Rock beats Scissors. You win!";
        playerScore++;
    }
    else if (playerMove == "Rock" && computerMove == "Paper"){
        message.innerText = "Paper beats Rock. You lose!";
        computerScore++;
    }
    else if (playerMove == "Scissors" && computerMove == "Paper"){
        message.innerText = "Scissors beat Paper. You win!";
        playerScore++;
    }
    else if (playerMove == "Scissors" && computerMove == "Rock"){
        message.innerText = "Rock beats Scissors. You lose!";
        computerScore++;
    }
    else if (playerMove == "Paper" && computerMove == "Rock"){
        message.innerText = "Paper beats Rock. You win!";
        playerScore++;
    }
    else if (playerMove == "Paper" && computerMove == "Scissors"){
        message.innerText = "Scissors beat Paper. You lose!";
        computerScore++;
    }
    updateScore()
    checkGameEnd()
}

const rock = document.getElementById("rock")
rock.addEventListener('click', function() {
    playGame("Rock")
})

const paper = document.getElementById("paper")
paper.addEventListener('click', function() {
    playGame("Paper")
})

const scissors = document.getElementById("scissors")
scissors.addEventListener('click', function() {
    playGame("Scissors")
})