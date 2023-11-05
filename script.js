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

function playGame(number){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 1; i <= number; i++){
        let input = prompt("Enter a move: ")
        let playerMove1 = input[0].toUpperCase()
        let playerMove2 = input.slice(1).toLowerCase()
        let playerMove = playerMove1 + playerMove2
        let computerMove = getMove()
        let message = "";

        if (playerMove == computerMove){
            message = "It's a DRAW!";
        }
        else if (playerMove == "Rock" && computerMove == "Scissors"){
            message = "Rock beats Scissors. You win!";
            playerScore++;
        }
        else if (playerMove == "Rock" && computerMove == "Paper"){
            message = "Paper beats Rock. You lose!";
            computerScore++;
        }
        else if (playerMove == "Scissors" && computerMove == "Paper"){
            message = "Scissors beat Paper. You win!";
            playerScore++;
        }
        else if (playerMove == "Scissors" && computerMove == "Rock"){
            message = "Rock beats Scissors. You lose!";
            computerScore++;
        }
        else if (playerMove == "Paper" && computerMove == "Rock"){
            message = "Paper beats Rock. You win!";
            playerScore++;
        }
        else if (playerMove == "Paper" && computerMove == "Scissors"){
            message = "Scissors beat Paper. You lose!";
            computerScore++;
        }
        else {
            message = "Input error!";
            i--;
        }
        console.log(message)
    }
    if (playerScore > computerScore) {
        console.log("You win the game with a score of " + playerScore + " to " + computerScore + "!");
    } else if (computerScore > playerScore) {
        console.log("You lose the game with a score of " + computerScore + " to " + playerScore + "!");
    } else {
        console.log("The game ends in a tie with a score of " + playerScore + " to " + computerScore + "!");
    }
}

let rounds = parseInt(prompt("Enter the number of rounds you wanna play: "))
playGame(rounds)