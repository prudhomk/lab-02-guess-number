// import functions and grab DOM elements
import { guessNumber } from './test/utilities.js';
const button = document.getElementById('button');
const resetButton = document.getElementById('reset-button');
const guess = document.getElementById('guess');
const results = document.getElementById('results');
let magicNumber;
const attemptsNum = document.getElementById('attempts-counter');
const message = document.getElementById('exit-prompt');
console.log('magic', magicNumber);



let attempts = 4;


button.addEventListener('click', () => {
    
    attempts--;
    attemptsNum.textContent = attempts;
    magicNumber = Number(Math.ceil(Math.random() * 20));
    


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

    if (attempts === 0) {
        button.disabled = true;
        resetButton.disabled = false;
        message.textContent = 'Thanks for playing!';
    }
}); 

resetButton.addEventListener('click', () => {
    resetButton.disabled = true;
    button.disabled = false;
    attempts = 4;
    attemptsNum.textContent = attempts;
    results.textContent = '';
    message.textContent = 'Let\'s go again!';
    guess.value = '';
    magicNumber = Number(Math.ceil(Math.random() * 20));
    
});
