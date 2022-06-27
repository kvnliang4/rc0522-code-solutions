/* exported unique */
function unique(array) {
  var newArray = [];
  if (array.length === 0) {
    return array;
  }
  newArray.push(array[0]);
  for (var i = 1; i < array.length; i++) {
    for (var j = 0; j < newArray.length; j++) {
      if (array[i] !== newArray[j]) {
        var different = true;
      } else {
        different = false;
        break;
      }
    }
    if (different === true) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
