/* exported getWords */

function getWords(string) {
  var words = string.split(' ');
  if (string === '') {
    words.splice(0, 1);
  }
  return words;
}
