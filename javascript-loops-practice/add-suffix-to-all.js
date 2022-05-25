/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newWords = [];
  for (var i = 0; i < words.length; i += 1) {
    newWords.push(words[i] + suffix);
  }
  return newWords;
}
