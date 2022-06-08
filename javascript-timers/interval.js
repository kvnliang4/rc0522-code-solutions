var countdownMessage = document.querySelector('.countdown-display');

var count = 4;

function countdown() {
  if (count > 0) {
    countdownMessage.textContent = count--;
  } else {
    clearInterval(3);
    countdownMessage.textContent = '~Earth Beeeelooowww Us~';
  }
}

setInterval(countdown, 1000);
