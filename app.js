// import functions and grab DOM elements
const button = document.getElementById('button');
const guess = document.getElementById('guess');
const results = document.getElementById('results');



const magicNumber = Math.ceil(Math.random() * 20);
console.log(magicNumber);
let attempts = 1;

button.addEventListener('click', () => {
    
    attempts++;

   
    results.textcontent = 'You guessed the number, you sure got a lot of time on your hands!';
});
// initialize state

// set event listeners to update state and DOM