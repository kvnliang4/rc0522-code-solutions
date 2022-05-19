/* exported filterOutStrings */
function filterOutStrings(values) {
  var newArray = [];
  for (var i = 0; i < values.length; i++) {
    if (isNaN(values[i]) || values[i] - 1 + 1 !== values[i] + 1 - 1) {
      values[i] = 0;
    } else {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
