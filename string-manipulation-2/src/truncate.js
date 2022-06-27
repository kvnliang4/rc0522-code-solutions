/* exported truncate */

/* new new var and assign it an empty string
use for loop to add each index of the string to new variable
use if statement to check if length parameter is greater than the length of the string
add '...' to the end of new var after the if statement and loops
return new var */

function truncate(length, string) {
  var text = '';
  if (string.length >= length) {
    for (var i = 0; i < length; i++) {
      text += string[i];
    }
  } else {
    for (i = 0; i < string.length; i++) {
      text += string[i];
    }
  }
  text += '...';
  return text;
}
