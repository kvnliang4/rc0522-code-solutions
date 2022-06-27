/* exported union */

function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    for (i = 0; i < first.length; i++) {
      if (second[j] !== first[i]) {
        var different = true;
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
