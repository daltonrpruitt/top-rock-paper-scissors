
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


const rockButton = document.querySelector('button.rock');
const paperButton = document.querySelector('button.paper');
const scissorsButton = document.querySelector('button.scissors');

const buttons = document.querySelectorAll('button');
console.log(`buttons = ${buttons}`);
buttons.forEach(b => console.log(`button = ${b.textContent}`) );

let playerScore = 0;
let computerScore = 0;



function setScores(){
    const playerScore_display = document.querySelector("p.playerScore");
    const computerScore_display = document.querySelector("p.computerScore");
    playerScore_display.textContent = playerScore;
    computerScore_display.textContent = computerScore;
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    setScores();
}

function processButton(e) {
    // console.log(e.target.textContent);
    const playerSelectionIndex = choices.indexOf(e.target.textContent.toLowerCase());
    // console.log(playerSelectionIndex);
    let results = playRound(playerSelectionIndex, getComputerChoiceIndex());
    console.log(results);
    if (results.toLowerCase().includes("win")) { playerScore++; }
    else if (results.toLowerCase().includes("lose")) { computerScore++; }
    else { /*tie; do nothing */ };

    setScores();

    if( playerScore >= 5) {
        alert("You win overall! With a score of " + playerScore + " to " + computerScore + "!");
        reset();
    } else if ( computerScore >= 5) {
        alert("You lost overall! With a score of " + computerScore + " to " + playerScore + "!");
        reset();
    }

}

buttons.forEach(b => b.addEventListener('click', processButton));

// rockButton.addEventListener('click', playRound(0, getComputerChoiceIndex()));
// paperButton.addEventListener('click', playRound(1, getComputerChoiceIndex()));
// scissorsButton.addEventListener('click', playRound(2, getComputerChoiceIndex()));

// game();