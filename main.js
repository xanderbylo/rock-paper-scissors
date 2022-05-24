const playerSelection = prompt('Rock, Paper or Scissors?');
const computerSelection = computerPlay();

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];

    return choice;
}

function playRound() {
    if (playerSelection.toLowerCase() === computerSelection) {
        alert("It's a draw!");
        console.log(playerSelection, computerSelection)
    } else if (computerSelection === 'paper') {
        alert('You lose! Paper beats Rock!');
        console.log(playerSelection, computerSelection)
    } else {
        alert('You win! Rock beats Scissors!');
        console.log(playerSelection, computerSelection)
    }
}

function game() {
    for (let round = 1; round < 6; round++) {
        playRound();
        console.log('Round ' + round)
    }
}

game();