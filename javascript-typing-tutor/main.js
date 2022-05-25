var letters = document.querySelectorAll('span');
var count = 0;
var right = 0;
var inputs = 0;

var button = document.querySelector('.play-again');
var popUp = document.querySelector('.row');
var score = document.querySelector('.score');

window.addEventListener('keydown', logKey);

button.addEventListener('click', reset);

letters[0].className = 'current'; /* the first letter isn't being underlined?? */

function reset(event) {
  count = 0;
  right = 0;
  inputs = 0;
  for (var i = 0; i < letters.length; i++) {
    letters[i].className = 'none';
  }
  popUp.className = 'row hidden';
}

function logKey(event) {
  if (event.key === letters[count].textContent) {
    letters[count].className = 'correct';
    count++;
    right++;
    inputs++;
    letters[count].className = 'current';
  } else {
    letters[count].className = 'incorrect';
    inputs++;
  }
  if (count + 1 >= letters.length) {
    popUp.className = 'row display';
    score.textContent = 'Your accuracy is: ' + ((right / inputs) * 100) + '%';
  }
}
