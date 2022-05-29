/* exported equal */

function equal(first, second) {
  var check;
  if (first.length !== second.length) {
    check = false;
    return check;
  } else if (first.length === 0 && second.length === 0) {
    check = true;
    return check;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      check = true;
    } else {
      check = false;
      return check;
    }
  }
  return check;
}
