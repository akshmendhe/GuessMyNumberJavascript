'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//console.log(secretNumber);

let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when guess is not provided
  if (!guess) {
    document.querySelector('.message').textContent = '🤷‍♀️ No Number!';
  } else {
    // when player wins
    if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🥂 Correct Number!';
      document.querySelector('.number').textContent = secretNumber;
      // set background color to green
      document.querySelector('body').style.backgroundColor = '#60b347';
      // set width of secret number
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
      }
      document.querySelector('.highscore').textContent = highscore;
    }
    // when the guess is either more or less
    else {
      if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent =
          guess > secretNumber ? '⚡ Too High!' : '⚡ Too Low!';
      } else {
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#FF0000';
        document.querySelector('.message').textContent =
          '🤦‍♂️ You Lost the Game!';
      }
    }
  }
});

// again button
document.querySelector('.again').addEventListener('click', function () {
  // reset values to initial values
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // generate new random number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
