/* exported chunk */

function chunk(array, size) {
  var newArray = [];
  var remainder = array.length % size;
  for (var i = 0; i < (array.length - remainder) / size; i++) {
    newArray[i] = [];
    for (var j = i * size; j < size * i + size; j++) {
      newArray[i].push(array[j]);
    }
  }
  if (remainder > 0) {
    for (var k = (array.length - remainder) / size; k < ((array.length - remainder) / size) + 1; k++) {
      newArray[k] = [];
      for (var l = array.length - remainder; l < array.length; l++) {
        newArray[k].push(array[l]);
      }
    }
  }
  return newArray;
}
