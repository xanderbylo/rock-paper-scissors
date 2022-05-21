const playerSelection = 'Rock';
const computerSelection = computerPlay();

console.log(playerSelection, computerSelection);

function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];

    return choice;
}

function playRound() {
    if (playerSelection == computerSelection) {
        alert("It's a draw!");
    } else if (computerSelection == 'Paper') {
        alert('You lose! Paper beats Rock!');
    } else {
        alert('You win! Rock beats Scissors!');
    }
}

playRound();