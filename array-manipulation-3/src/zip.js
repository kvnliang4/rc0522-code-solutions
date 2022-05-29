/* exported zip */

function zip(first, second) {
  var newArray = [];
  if (first.length > second.length) {
    var length = second.length;
  } else {
    length = first.length;
  }
  for (var i = 0; i < length; i++) {
    newArray.push([first[i], second[i]]);
  }
  return newArray;
}
