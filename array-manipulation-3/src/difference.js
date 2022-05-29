/* exported difference */

function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] !== second[j]) {
        var different = true;
      } else {
        different = false;
        break;
      }
    }
    if (different === true) {
      newArray.push(first[i]);
    }
  }
  for (j = 0; j < second.length; j++) {
    for (i = 0; i < first.length; i++) {
      if (second[j] !== first[i]) {
        different = true;
      } else {
        different = false;
        break;
      }
    }
    if (different === true) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}
