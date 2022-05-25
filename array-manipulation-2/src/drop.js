/* exported drop */

/* create new array
use forloop to push elements into new array
set i = count in initialization and i < array.length for condition
return new array */

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
