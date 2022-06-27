/* exported lastChars */

function lastChars(length, string) {
  var text = '';
  if (string.length < length) {
    return string;
  } else if (string.length >= length) {
    for (var i = string.length - length; i < string.length; i++) {
      text += string[i];
    }
  }
  return text;
}
