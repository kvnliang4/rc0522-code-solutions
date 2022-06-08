var countdownMessage = document.querySelector('.countdown-display');

var count = 4;

var interval = setInterval(countdown, 1000);

function countdown() {
  if (count > 0) {
    countdownMessage.textContent = count--;
  } else {
    clearInterval(interval);
    countdownMessage.textContent = '~Earth Beeeelooowww Us~';
  }
}
