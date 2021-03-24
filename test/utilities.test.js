// IMPORT MODULES under test here:
import { guessNumber } from '../utilties.js';

const test = QUnit.test;

test('this should compare the guess to the number',  => {
    //Arrange
    // Set up your arguments and expectations
    const magicNumber = 2;
    const guess = 2;
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(guessNumber(2), 'true', 'You guessed the right number');
});
