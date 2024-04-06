const player1ScoreDisplay = document.getElementById('player1Score');
const player2ScoreDisplay = document.getElementById('player2Score');
const rollButton = document.getElementById('rollButton');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const winnerMessage = document.getElementById('winnerMessage');
let player1Score = 0;
let player2Score = 0;

function rollDice() {
    const dice1Value = Math.floor(Math.random() * 6) + 1;
    const dice2Value = Math.floor(Math.random() * 6) + 1;
    console.log("Dice 1 value:", dice1Value);
    console.log("Dice 2 value:", dice2Value);

    dice1.src = `images/dice${dice1Value}.png`; 
    dice2.src = `images/dice${dice2Value}.png`;

    const difference = Math.abs(dice1Value - dice2Value);
    if (dice1Value > dice2Value) {
        player1Score += difference;
    } else if (dice2Value > dice1Value) {
        player2Score += difference;
    }
    player1ScoreDisplay.textContent = player1Score;
    player2ScoreDisplay.textContent = player2Score;

    checkWinner();
}

function checkWinner() {
    const winningScore = 15; 
    if (player1Score >= winningScore) {
        alert('Player 1 wins!');
        resetGame();
    } else if (player2Score >= winningScore) {
        alert('Player 2 wins!');
        resetGame();
    }
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    player1ScoreDisplay.textContent = player1Score;
    player2ScoreDisplay.textContent = player2Score;
    dice1.src = 'images/dice1.png';
    dice2.src = 'images/dice2.png';
}

rollButton.addEventListener('click', rollDice);
