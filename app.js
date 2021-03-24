// import functions and grab DOM elements
import { guessNumber } from './test/utilities.js';
const button = document.getElementById('button');
const resetButton = document.getElementById('reset-button');
const guess = document.getElementById('guess');
const results = document.getElementById('results');
const magicNumber = Number(Math.ceil(Math.random() * 20));
const attemptsNum = document.getElementById('attempts-counter');
console.log('magic', magicNumber);



let attempts = 4;
attemptsNum.textContent = attempts;

button.addEventListener('click', () => {
    attempts--;
    switch (guessNumber(Number(guess.value), magicNumber)) {
        case 0:
            results.textContent = 'You Guessed the number! You got a lot of time on your hands!';
            break;
        case 1:
            results.textContent = 'Too High! Guess Again!';
            break;
        case -1:
            results.textContent = 'Too Low! Guess Again!';
            break;
    }

});

resetButton.addEventListener('click', () => {

});
//// initialize state

// set event listeners to update state and DOM