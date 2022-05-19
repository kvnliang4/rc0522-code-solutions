/* exported reverseWord */

function reverseWord(string) {
  var newWord = '';
  for (var i = string.length - 1; i >= 0; i += -1) {
    newWord += string[i];
  }
  return newWord;
}
