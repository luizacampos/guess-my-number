'use strict';

/*
1. Generate a random number
2. get the the typed number in input.number
3. Buttons: Check and Again (click addEventListener) 
4. p.message --> too high or too low
5. div.number --> show the random number
*/

// Generate a random number in a self-invoking function
let randomNumber = Math.floor(Math.random() * 20) + 1;

// Target the HTML elements
let againButton = document.querySelector('button.again');
let divNumber = document.querySelector('div.number');
let inputElem = document.querySelector('input.guess');
let checkButton = document.querySelector('button.check');
let pMessage = document.querySelector('p.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');

// Check if the typed number is the correct one
function guessNumber() {
  Number(score.textContent);

  if (Number(inputElem.value) === randomNumber) {
    pMessage.innerText = '🎉 Correct number!';
    document.body.style.backgroundColor = '#60b347';
    divNumber.textContent = randomNumber;

    if (score.textContent > highScore.textContent) {
      highScore.textContent = score.textContent;
    }
  } else if (Number(inputElem.value) < randomNumber) {
    pMessage.innerText = 'Too low';
    score.textContent--;
  } else if (Number(inputElem.value) > randomNumber) {
    pMessage.innerText = 'Too high';
    score.textContent--;
  }
}

// addEventListener Check button
checkButton.addEventListener('click', guessNumber);

// addEventListener Again Button
againButton.addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  // console.log(randomNumber);
  pMessage.innerText = 'Start guessing...';
  inputElem.value = '';
  document.body.style.backgroundColor = '#222';
  divNumber.textContent = '?';
  score.textContent = 20;
  return randomNumber;
});
