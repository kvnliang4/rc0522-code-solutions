/* exported reverseWords */

function reverseWords(string) {
  var split = string.split(' ');
  var secondSplit = [];
  var finalString = '';
  for (var i = 0; i < split.length; i++) {
    secondSplit.push(split[i].split('').reverse().join(''));
  }
  finalString = secondSplit.join(' ');
  return finalString;
}
