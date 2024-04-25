"use strict";
/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
Examples(Input1, Input2 --> Output):
*/
function rps(p1, p2) {
    if ((p1 === 'paper' && p2 === 'rock') || (p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper')) {
        return 'Player 1 won!';
    }
    else if (p1 === p2) {
        return 'Draw!';
    }
    else {
        return 'Player 2 won!';
    }
}
//outra resolução:
const beats = {
    'scissors': 'paper',
    'paper': 'rock',
    'rock': 'scissors',
};
function rps2(p1, p2) {
    if (p1 === p2)
        return 'Draw!';
    if (beats[p1] == p2)
        return 'Player 1 won!';
    return 'Player 2 won!';
}
/*Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.*/
function findAverage(array) {
    if (array.length > 0)
        return array.reduce((a, b) => a + b, 0) / array.length;
    return 0;
}
//outra forma
const findAverage2 = (array) => array.length > 0 ? array.reduce((a, b) => a + b, 0) / array.length : 0;
console.log(findAverage2([2, 1]));
