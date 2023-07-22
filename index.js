
const choices = ["rock", "paper", "scissors"];

function getComputerChoiceIndex() {
    return Math.floor( Math.random()*3);
}

function getComputerChoice() {
    return choices[getComputerChoiceIndex()];
}


const formattedChoices = choices.map(x => x.charAt(0).toUpperCase() + x.slice(1));


function playRound(playerSelectionIndex, computerSelectionIndex) {
    if (playerSelectionIndex == computerSelectionIndex) {
        return "Tie with both choosing " + formattedChoices[playerSelectionIndex];
    } else if (playerSelectionIndex == (computerSelectionIndex + 1) % 3) {
        return "You Win! " + formattedChoices[playerSelectionIndex] + " beats " + formattedChoices[computerSelectionIndex];
    } else if (playerSelectionIndex == (computerSelectionIndex + 3 - 1) % 3) {
        return "You Lose! " + formattedChoices[computerSelectionIndex] + " beats " + formattedChoices[playerSelectionIndex];
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        
        let playerSelection = prompt("Please enter your selection from either 'Rock', 'Paper', or 'Scissors' : ");
        let playerSelectionIndex = choices.indexOf(playerSelection.toLowerCase());
        if (playerSelectionIndex == -1 ) {
            throw Error("Invalid selection : " + playerSelection + " is not a valid choice!");
        }
        
        let results = playRound(playerSelectionIndex, getComputerChoiceIndex());
        
        if (results.toLowerCase().includes("win")) { playerScore++; }
        else if (results.toLowerCase().includes("lose")) { computerScore++; }
        else { /*tie; do nothing */ };
        console.log(results);
    }

    if (playerScore > computerScore) {
        console.log("You win overall! With a score of " + playerScore + " to " + computerScore + "!");
    } else if (playerScore < computerScore) {
        console.log("You lost overall! With a score of " + computerScore + " to " + playerScore + "!");
    } else {
        console.log("Tied overall! Both with scores of " + computerScore + "!");
    }
}

game();