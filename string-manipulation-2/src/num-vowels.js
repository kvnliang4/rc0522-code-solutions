/* exported numVowels */

function numVowels(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'A' || string[i] === 'a') {
      count++;
    } else if (string[i] === 'E' || string[i] === 'e') {
      count++;
    } else if (string[i] === 'I' || string[i] === 'i') {
      count++;
    } else if (string[i] === 'O' || string[i] === 'o') {
      count++;
    } else if (string[i] === 'U' || string[i] === 'u') {
      count++;
    } else {
      continue;
    }
  }
  return count;
}
