// IMPORT MODULES under test here:
import { guessNumber } from './utilities.js';

const test = QUnit.test;

test('this should compare the guess to the number and return a value', (expect) => {
   
    const x = 2;
    const y = 2;
  
    expect.equal(guessNumber(x, y), 0);
});


test('this should compare the guess to the number and return a value', (expect) => {
   
    const x = -2;
    const y = 2;
  
    expect.equal(guessNumber(x, y), -1);
});


test('this should compare the guess to the number and return a value', (expect) => {
   
    const x = 4;
    const y = 2;
  
    expect.equal(guessNumber(x, y), 1);
});

