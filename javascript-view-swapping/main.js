var tabContainer = document.querySelector('.tab-container');
var tab = document.querySelectorAll('.tab');
var view = document.querySelectorAll('.view');

tabContainer.addEventListener('click', click);

function click(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tab.length; i++) {
      tab[i].className = 'tab';
      if (event.target.textContent === tab[i].textContent) {
        event.target.className = 'tab active';
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (var j = 0; j < tab.length; j++) {
      view[j].className = 'hidden';
      if (view[j].getAttribute('data-view') === dataView) {
        view[j].className = 'view';
      }
    }
  }
}
