/* exported ransomCase */

/* create new var text and assign it an empty string
use a for loop to add each index of the string to text
use an if statement to check if each index is odd or even using the remainder operator
if the index is even, capitalize using toUpperCase and add to text, else toLowerCase if odd
return text */

function ransomCase(string) {
  var text = '';
  for (var i = 0; i < string.length; i++) {
    if ((i + 2) % 2 > 0) {
      text += string[i].toUpperCase();
    } else {
      text += string[i].toLowerCase();
    }
  }
  return text;
}
