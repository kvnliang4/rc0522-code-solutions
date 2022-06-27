/* exported capitalizeWord */

/* create var text and assign it an empty string
capitalize text[0] by using toUpperCase so the first index of teh string is always capitalized
use a for loop to loop through each index to text
use toLowerCase to lowercase each of the letters
set var i = 1 in initialization to skip over the first index.
return text */

function capitalizeWord(word) {
  var check = word.toLowerCase();
  var text = '';
  text = word[0].toUpperCase();
  if (check === 'javascript') {
    text = 'JavaScript';
  } else {
    for (var i = 1; i < word.length; i++) {
      text += word[i].toLowerCase();
    }
  }
  return text;
}

/* added new var check and assigned to it word.toLowerCase so that the whole word parameter is lowercased
implemented if statement to check if var check is strictly equal to javascript.
if it is, then set text to JavaScript */
