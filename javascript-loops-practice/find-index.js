/* exported findIndex */
function findIndex(array, value) {
  var equalValue;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      equalValue = i;
      break;
    } else {
      equalValue = -1;
    }
  }
  return equalValue;
}
