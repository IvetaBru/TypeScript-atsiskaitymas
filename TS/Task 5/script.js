/* ------------------------------ TASK 5 -----------------------------------
Parašykite TS funkciją, kuri atlieka žirklės/popierius/akmuo žaidimo patikrinimą ir grąžina atsakymą.
Funkcija priima du tekstus ir grąžina tekstą.

Pvz.:
  "scissors", "paper" --> "Player 1 won!"
  "scissors", "rock" --> "Player 2 won!"
  "paper", "paper" --> "Draw!"
-------------------------------------------------------------------------- */
var game = function (text1, text2) {
    if (text1 === 'scissors' && text2 === 'paper' ||
        text1 === 'rock' && text2 === 'scissors' ||
        text1 === 'rock' && text2 === 'paper') {
        return "Player 1 won!";
    }
    else if (text2 === 'scissors' && text1 === 'paper' ||
        text2 === 'rock' && text1 === 'scissors' ||
        text2 === 'rock' && text1 === 'paper') {
        return "Player 2 won!";
    }
    else if (text1 === 'paper' && text2 === 'paper' ||
        text1 === 'scissors' && text2 === 'scissors' ||
        text1 === 'rock' && text2 === 'rock') {
        return "Draw!";
    }
    else {
        return "Wrong gameplay!";
    }
};
console.log(game('rock', 'rock'));
console.log(game('rock', 'scissors'));
console.log(game('paper', 'scissors'));
console.log(game('paper', 'popierius'));
