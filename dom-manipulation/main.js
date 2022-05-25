var numClicks = 0;

function counter(event) {
  numClicks++;
  clickCount.textContent = 'clicks: ' + numClicks;
  var temperature;
  if (numClicks < 4) {
    temperature = 'cold';
  } else if (numClicks < 7) {
    temperature = 'cool';
  } else if (numClicks < 10) {
    temperature = 'tepid';
  } else if (numClicks < 13) {
    temperature = 'warm';
  } else if (numClicks < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  hotButton.className = 'hot-button ' + temperature;
}

var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', counter);
