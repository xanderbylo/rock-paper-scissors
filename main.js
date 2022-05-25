function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];

    return choice;
}

function playRound() {
    const computerSelection = computerPlay();
    const playerSelection = prompt('Rock, Paper or Scissors?');

    if (playerSelection.toLowerCase() === computerSelection) {
        alert("It's a draw!");
        console.log(playerSelection, computerSelection)
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        alert('You lose! Paper beats Rock!');
        console.log(playerSelection, computerSelection)
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        alert('You win! Rock beats Scissors!');
        console.log(playerSelection, computerSelection)
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        alert('You lose! Scissors beats Paper!');
        console.log(playerSelection, computerSelection)
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        alert('You win! Paper beats Rock!');
        console.log(playerSelection, computerSelection)
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        alert('You lose! Rock beats Scissors!');
        console.log(playerSelection, computerSelection)
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        alert('You win! Scissors beats Paper!');
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