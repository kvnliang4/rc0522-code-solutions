function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var click = document.querySelector('.click-button');

click.addEventListener('click', handleClick, false);

function handleOverMouse(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var hover = document.querySelector('.hover-button');

hover.addEventListener('mouseover', handleOverMouse, false);

function handleDoubleClick(event) {
  console.log('button doubled clicked');
  console.log(event);
  console.log(event.target);
}

var doubleClick = document.querySelector('.double-click-button');

doubleClick.addEventListener('dblclick', handleDoubleClick, false);
