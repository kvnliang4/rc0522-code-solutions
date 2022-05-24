var open = document.querySelector('.open-button');
var close = document.querySelector('.no-button');
var modal = document.querySelector('.container');

open.addEventListener('click', openModal);

function openModal(event) {
  modal.className = 'container display';
}

close.addEventListener('click', closeModal);

function closeModal(event) {
  modal.className = 'container hidden';
}
