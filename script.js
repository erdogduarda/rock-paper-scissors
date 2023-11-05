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
        }
        else if (playerMove == "Rock" && computerMove == "Paper"){
            message = "Paper beats Rock. You lose!";
        }
        else if (playerMove == "Scissors" && computerMove == "Paper"){
            message = "Scissors beat Paper. You win!";
        }
        else if (playerMove == "Scissors" && computerMove == "Rock"){
            message = "Rock beats Scissors. You lose!";
        }
        else if (playerMove == "Paper" && computerMove == "Rock"){
            message = "Paper beats Rock. You win!";
        }
        else if (playerMove == "Paper" && computerMove == "Scissors"){
            message = "Scissors beat Paper. You lose!";
        }
        else {
            message = "Input error!";
            i--;
        }
        console.log(message)
    }
}

let rounds = parseInt(prompt("Enter the number of rounds you wanna play: "))
playGame(rounds)