/* exported dropRight */

function dropRight(array, count) {
  var newArray = [];
  if (array.length >= count) {
    for (var i = 0; i < array.length - count; i++) {
      newArray.push(array[i]);
    }
  } else {
    newArray = array;
  }
  return newArray;
}
