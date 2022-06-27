/* exported isPalindromic */

/* create variable and assign it the remainder of string % 2
create new variable palindrome as a check
create 2 variables to hold parts of the strings
use for loops to check the first and second half of the string
for the first loop, set initialization to i = 0 and condition to i less than length - remainder, all divided by 2 and add each letter to firststring
the second loops, set initialization to i = length - 1 and condition to i greater than length - remainder, all divided by 2 and add each letter to seocnd string
use if statement to check if firsthalf and secondhalf is equal and set palidrome vairable accodingly
return palindrome */

function isPalindromic(string) {
  var newString = string.replace(/\s/g, '');
  var palindrome;
  var remainder = newString.length % 2;
  var firstHalf = '';
  var secondHalf = '';

  for (var i = 0; i < (newString.length - remainder) / 2; i++) {
    if (newString[i] !== ' ') {
      firstHalf += newString[i];
    }
  }
  for (i = newString.length - 1; i > (newString.length - remainder) / 2; i--) {
    if (newString[i] !== ' ') {
      secondHalf += newString[i];
    }
  }
  if (secondHalf === firstHalf) {
    palindrome = true;
  } else {
    palindrome = false;
  }
  return palindrome;
}

/* needed to create a new variable newString and assign it the value to string.replace(/\s/g, '') to remove spaces */
