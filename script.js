
const openingScreen = document.getElementById("opening");
const gameScreen = document.getElementById("game-screen");
const pointsInput = document.getElementById("points");
const startGameButton = document.getElementById("start-game");
const player1Score = document.getElementById("player1-score");
const player2Score = document.getElementById("player2-score");
const dice1Image = document.getElementById("dice1");
const dice2Image = document.getElementById("dice2");
const rollDiceButton = document.getElementById("roll-dice");
const holdButton = document.getElementById("hold");

let goal = 10;
let currentPlayer = 1;
let player1CurrentScore = 0;
let player2CurrentScore = 0;

function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  player1Score.textContent = player1CurrentScore;
  player2Score.textContent = player2CurrentScore;
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function updateDiceImages(diceValue1, diceValue2) {
  dice1Image.src = `assets/dice-${diceValue1}.png`; 
  dice2Image.src = `assets/dice-${diceValue2}.png`; 
}

startGameButton.addEventListener("click", function () {
  goal = parseInt(pointsInput.value, 10);
  openingScreen.style.display = "none";
  gameScreen.style.display = "block";
});

rollDiceButton.addEventListener("click", function () {
  const diceValue1 = rollDice();
  const diceValue2 = rollDice();
  updateDiceImages(diceValue1, diceValue2);

if (diceValue1 === 6 && diceValue2 === 6 && currentPlayer === 1) {
    player1CurrentScore = 0;}
if (diceValue1 === 6 && diceValue2 === 6 && currentPlayer === 2) {
    player2CurrentScore = 0;
switchPlayer(); } else {
    if (currentPlayer === 1) {
      player1CurrentScore += diceValue1 + diceValue2;
      player1Score.textContent = player1CurrentScore;
    } else {
      player2CurrentScore += diceValue1 + diceValue2;
      player2Score.textContent = player2CurrentScore;
    }
  }
});

holdButton.addEventListener("click", function () {
  if (currentPlayer === 1) {
    player1Score.textContent = player1CurrentScore;
  } else {
    player2Score.textContent = player2CurrentScore;
  }
  if (player1CurrentScore >= goal || player2CurrentScore >= goal) {
    alert(`Player ${currentPlayer} wins!`);
    window.location.reload(); 
  }
  player1CurrentScore = 0;
  player2CurrentScore = 0;
  switchPlayer();
});
