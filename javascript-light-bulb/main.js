var numClicks = 0;

var container = document.querySelector('#container');
var innerCircle = document.querySelector('.inner-circle');
var outterCircle = document.querySelector('.outter-circle');

innerCircle.addEventListener('click', lightSwitch);

function lightSwitch(event) {
  numClicks++;
  if (numClicks % 2 > 0) {
    container.className = 'yellow-container';
    innerCircle.className = 'inner-circle yellow-inner-circle box-shadow';
    outterCircle.className = 'outter-circle yellow-outter-circle';
  } else {
    container.className = 'black-background-container';
    innerCircle.className = 'inner-circle black-background-inner-circle';
    outterCircle.className = 'outter-circle black-background-outter-circle';
  }
}
