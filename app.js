// import functions and grab DOM elements
import { guessNumber } from './test/utilities.js';
const button = document.getElementById('button');
const guess = document.getElementById('guess');
const results = document.getElementById('results');
const magicNumber = Math.ceil(Math.random() * 20);
const attemptsValue = 
console.log('magic', magicNumber);



let attempts = 4;

button.addEventListener('click', () => {
    
    attempts--;
    console.log(button);
    console.log(attempts);
    if (attempts === 4) 'Out of attempts, better luck next Time!';

    switch (guessNumber(guess, magicNumber)) {
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
// initialize state

// set event listeners to update state and DOM