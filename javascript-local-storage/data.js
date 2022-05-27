/* exported todos */

var todos = [];

var previousToDosJSON = localStorage.getItem('javascript-local-storage');

if (previousToDosJSON !== null) {
  todos = JSON.parse(previousToDosJSON);
}
