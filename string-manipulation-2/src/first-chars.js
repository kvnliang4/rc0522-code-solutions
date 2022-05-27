/* exported firstChars */

function firstChars(length, string) {
  var text = '';
  if (string.length === 0 && string[0] === undefined) {
    return string;
  }
  if (string.length < length) {
    for (var i = 0; i < string.length; i++) {
      text += string[i];
    }
  } else if (string.length >= length) {
    for (i = 0; i < length; i++) {
      text += string[i];
    }
  }
  return text;
}
