'use strict';

// console.log(document.querySelector('.message').textContent);

/*document.querySelector('.message').textContent = 'Correct number!';
document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 15;

//console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 33;
const value = document.querySelector('.guess').value;
console.log('Input value: ' + value);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log('Number to guess: ' + secretNumber);


const displayMessage = function (field, text) {
    document.querySelector('.' + field).textContent = text;
}

//check button
document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value;

    if (!guess) {
        displayMessage('message', '⛔ No number');
    } else if (score <= 1) {
        displayMessage('message', 'You lost the game! ❌');
        score = 0;
        displayMessage('score', score);
    } else if (guess > secretNumber) {
        displayMessage('message', 'Too high');
        displayMessage('score', score);
        displayMessage('guess', null);
        score--;
    } else if (guess < secretNumber) {
        displayMessage('message', 'Too low');
        displayMessage('score', score);
        displayMessage('guess', null);
        score--;
    } else { //win game - correct number (guess === secretNumber)
        displayMessage('message', 'Correct number! 🎈');
        displayMessage('number', secretNumber);
        score += 5;
        displayMessage('score', score);
        if (score > highScore) {
            highScore = score;
            displayMessage('highscore', highScore);
        }
        //selecting body and set green bg-color
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
    }
});

//again button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log('New number to guess: ' + secretNumber);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('message', 'Start guessing...');
    displayMessage('score', score);
    displayMessage('number', '?')
    document.querySelector('.guess').value = null;
})