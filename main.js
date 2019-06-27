const ropascArray = ['Rock', 'Paper', 'Scissors'];
const container = document.querySelector('#container');
let scoreboard = document.createElement('div');
container.appendChild(scoreboard);
let compScore = document.createElement('p');
let yourScore = document.createElement('p');
scoreboard.appendChild(compScore);
scoreboard.appendChild(yourScore);
let results = document.createElement('div');
container.appendChild(results);

let playerScore = 0;
let computerScore = 0;


var rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound('Rock');
});

var paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound('Paper');
});

var scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playRound('Scissors');
});

function computerPlay() {
    const result = ropascArray[Math.floor(Math.random() * ropascArray.length)];
    return result;
};

function score() {
    yourScore.textContent = 'Your Score: ' + playerScore;
    compScore.textContent = 'Computer Score: ' + computerScore;
};

function checkWinner() {
    if (playerScore >= 5 ) {
        alert('GAME OVER, YOU WIN!');
        location.reload();
    } else if (computerScore >= 5) {
        alert('GAME OVER. DEFEAT.') 
        location.reload();
    } else if (playerScore >= 5 && computerScore >= 5) {
        alert('RESULTS UNCLEAR, NO DEFINITIVE WINNER. MUST BE A DRAW.')
        location.reload();
    }
};


function playRound(playerSelection) {
    computerSelection = computerPlay();
    if (computerSelection === 'Rock' && playerSelection === 'Rock') {
        playerScore, computerScore += 0.5;
        score();
        checkWinner();
        results.textContent = 'Tie!';
        return results;
    } else if (computerSelection === 'Rock' && playerSelection === 'Paper') {
        playerScore += 1;
        score();
        checkWinner();
        results.textContent = 'You win! Paper beats rock';
        return results;
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        computerScore += 1;
        score();
        checkWinner();
        results.textContent = 'You lose, rock beats scissors';
        return results;
    }

    if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        computerScore += 1;
        score();
        checkWinner();
        results.textContent = 'You lose, paper beats rock';
        return results;
    } else if (computerSelection === 'Paper' && playerSelection === 'Paper') {
        playerScore, computerScore += 0.5;
        score();
        checkWinner();
        results.textContent = 'Tie!';
        return results;
    } else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
        playerScore += 1;
        score();
        checkWinner();
        results.textContent = 'You win! Scissors beat paper';
        return results;
    }

    if (computerSelection === 'Scissors' && playerSelection === 'Rock') {
        playerScore += 1;
        score();
        checkWinner();
        results.textContent = 'You win! Rock beats scissors';
        return results;
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        computerScore += 1;
        score();
        checkWinner();
        results.textContent = 'You lose, scissors beat paper';
        return results;
    } else if (computerSelection === 'Scissors' && playerSelection === 'Scissors') {
        playerScore, computerScore += 0.5;
        score();
        checkWinner();
        results.textContent = 'Tie!';
        return results;
    }

};