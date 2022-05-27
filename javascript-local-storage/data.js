/* exported todos */

var todos = [];

var previousToDosJSON = localStorage.getItem('javascript-local-storage');

window.addEventListener('beforeunload', stringify);

function stringify(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}

if (previousToDosJSON !== null) {
  todos = JSON.parse(previousToDosJSON);
}
