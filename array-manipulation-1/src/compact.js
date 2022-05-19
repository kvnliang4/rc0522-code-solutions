/* exported compact */

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i += 1) {
    if (array[i] === false) {
      continue;
    } else if (array[i] === null) {
      continue;
    } else if (Number.isNaN(array[i])) {
      continue;
    } else if (array[i] === 0) {
      continue;
    } else if (array[i] === undefined) {
      continue;
    } else if (array[i] === '') {
      continue;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
