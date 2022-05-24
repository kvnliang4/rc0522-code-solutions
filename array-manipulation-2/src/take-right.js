/* exported takeRight */

function takeRight(array, count) {
  var newArray = [];
  if (array.length >= count) {
    for (var i = array.length - count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  } else {
    newArray = array;
  }
  return newArray;
}
