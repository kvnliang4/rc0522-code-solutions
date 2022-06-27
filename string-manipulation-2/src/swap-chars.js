/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var word = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      word += string[secondIndex];
    } else if (i === secondIndex) {
      word += string[firstIndex];
    } else {
      word += string[i];
    }
  }
  return word;
}
