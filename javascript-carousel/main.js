var rightButton = document.querySelector('.fa-chevron-right');
var leftButton = document.querySelector('.fa-chevron-left');

var progressDot = document.querySelectorAll('button');

var images = document.querySelectorAll('img');

var index = 0;

function rotate() {
  index++;
  if (index >= images.length || index < 0) {
    index = 0;
  }
  progressDot.forEach(button => {
    button.className = '';
  });
  images.forEach(img => {
    img.className = 'hidden';
  });
  progressDot[index].className = 'current-position';
  images[index].className = 'display';
}

var intervalId = setInterval(rotate, 3000);

rightButton.addEventListener('click', nextImage);
leftButton.addEventListener('click', previousImage);

function nextImage(event) {
  index++;
  if (index >= images.length || index < 0) {
    index = 0;
  }
  progressDot.forEach(button => {
    button.className = '';
  });
  images.forEach(img => {
    img.className = 'hidden';
  });
  progressDot[index].className = 'current-position';
  images[index].className = 'display';
  clearInterval(intervalId);
  intervalId = setInterval(rotate, 3000);
}

function previousImage(event) {
  index--;
  if (index >= images.length) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }
  progressDot.forEach(button => {
    button.className = '';
  });
  images.forEach(img => {
    img.className = 'hidden';
  });
  progressDot[index].className = 'current-position';
  images[index].className = 'display';
  clearInterval(intervalId);
  intervalId = setInterval(rotate, 3000);
}

window.addEventListener('click', chooseIndex);

function chooseIndex(event) {
  var dataView = event.target.getAttribute('data-view');
  if (event.target.tagName === 'BUTTON') {
    progressDot.forEach(button => {
      button.className = '';
    });
    images.forEach(img => {
      img.className = 'hidden';
    });
    for (var i = 0; i < images.length; i++) {
      if (dataView === progressDot[i].getAttribute('data-view')) {
        index = i;
        progressDot[index].className = 'current-position';
        images[index].className = 'display';
        clearInterval(intervalId);
        intervalId = setInterval(rotate, 3000);
      }
    }
  }
}
