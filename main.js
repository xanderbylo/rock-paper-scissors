let playerScore = 0;
let computerScore = 0;

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
        console.log(playerSelection, computerSelection);
        console.log(playerScore, computerScore)
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        alert('You lose! Paper beats Rock!');
        computerScore++;
        console.log(playerSelection, computerSelection);
        console.log(playerScore, computerScore)
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        alert('You win! Rock beats Scissors!');
        playerScore++;
        console.log(playerSelection, computerSelection);
        console.log(playerScore, computerScore)
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        alert('You lose! Scissors beats Paper!');
        computerScore++;
        console.log(playerSelection, computerSelection);
        console.log(playerScore, computerScore)
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        alert('You win! Paper beats Rock!');
        playerScore++;
        console.log(playerSelection, computerSelection);
        console.log(playerScore, computerScore)
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        alert('You lose! Rock beats Scissors!');
        computerScore++;
        console.log(playerSelection, computerSelection);
        console.log(playerScore, computerScore)
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        alert('You win! Scissors beats Paper!');
        playerScore++;
        console.log(playerSelection, computerSelection);
        console.log(playerScore, computerScore)
    }
}

function game() {
    for (let round = 1; round < 6; round++) {
        playRound();
        console.log('Round ' + round)
    }

    if (round = 5 && playerScore > computerScore) {
        alert('Player wins ' + playerScore + '-' + computerScore + '!');
        console.log('Player wins!')
    } else if (round = 5 && computerScore > playerScore) {
        alert('Computer wins ' + computerScore + '-' + playerScore + '!');
        console.log('Computer wins!')
    } else {
        alert("It's a draw! " + playerScore + '-' + computerScore + '!');
        console.log("It's a draw!")
    }
}

game();