/* ------------------------------ TASK 4 -----------------------------------
Parašykite TS funkciją, kuri priima tekstą ir grąžina skaičių susidedantį iš vienetų ir nulių tokio ilgio, kokio yra pats žodis. Skaičius visada prasideda vienetu.

Pvz.:
  "labas"   --> 10101
  "kebabas" --> 1010101
  "a"       --> 1
-------------------------------------------------------------------------- */
var wordsToNumbers = function (word) {
    var wordSplit = word.split('').map(function (_, i) { return (i % 2 === 0 ? '1' : '0'); }).join('');
    return parseInt(wordSplit);
};
console.log(wordsToNumbers('Labas'));
console.log(wordsToNumbers('kebabas'));
console.log(wordsToNumbers('a'));
