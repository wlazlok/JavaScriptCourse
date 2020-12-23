'use strict';

//selecting elements
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const diceElement = document.querySelector('.dice');
const scoreElementPlayer0 = document.querySelector('#score--0');
const scoreElementPlayer1 = document.querySelector('#score--1');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;
let gameStatus = true;

//functions
const displayTotalScore = function () {
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
}

const switchPlayer = function () {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
}
const resetGame = function () {
    gameStatus = true;
    scoreElementPlayer0.textContent = 0;
    scoreElementPlayer1.textContent = 0;
    diceElement.classList.add('hidden');
    document.querySelector(`#current--0`).textContent = 0;
    document.querySelector(`#current--1`).textContent = 0;
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    activePlayer = 0;
}

//starting conditions
resetGame();

//rolling dice functionality 
buttonRoll.addEventListener('click', function () {
    if (gameStatus) {
        displayTotalScore();

        const dice = Math.trunc(Math.random() * 6) + 1;
        diceElement.classList.remove('hidden');
        diceElement.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
})

//holding score functionality
buttonHold.addEventListener('click', function () {
    scores[activePlayer] += currentScore;
    currentScore = 0;
    displayTotalScore();
    if (scores[activePlayer] >= 50) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceElement.classList.add('hidden');
        gameStatus = false;
    } else {
        switchPlayer();
    }
})

//new game functionality
buttonNew.addEventListener('click', resetGame);
