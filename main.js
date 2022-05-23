const playerSelection = 'rock';
const computerSelection = computerPlay();

console.log(playerSelection, computerSelection)

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];

    return choice;
}

function playRound() {
    if (playerSelection.toLowerCase() === computerSelection) {
        alert("It's a draw!");
    } else if (computerSelection === 'paper') {
        alert('You lose! Paper beats Rock!');
    } else {
        alert('You win! Rock beats Scissors!');
    }
}

playRound();