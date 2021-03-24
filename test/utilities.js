export function guessNumber(guess, magicNumber) {
    if (guess > magicNumber) return 1;
    if (guess < magicNumber) return -1;
    if (guess === magicNumber) return 0;
}

