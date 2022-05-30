/* exported isAnagram */

/* use .replace(/\s/g, ''); on each string to remove spaces
use 2 forloops to loop each letter of the first string and second string.
use if statement to check each letter and return false  if none if a letter doesnt match any in the second string
return true after the loop. */

function isAnagram(firstString, secondString) {
  var noSpace1 = firstString.replace(/\s/g, '');
  var noSpace2 = secondString.replace(/\s/g, '');
  var string1 = noSpace1.split('');
  string1.sort();
  var string2 = noSpace2.split('');
  string2.sort();
  if (string1.join() === string2.join()) {
    return true;
  } else {
    return false;
  }
}

/* create new variables noSpace1 and noSpace2 and use .replace(/\s/g, ''); to take away spaces
create new variables string1 and string2
use split() method on noSpace1 and noSpace2 to split up the letters in each string and assign the results to string1 and string2
use sort() method on string1 and string2 to sort the characters in the newly formed array
use join() method to merge the letters in the array back to a string
use if statement to check if the values of string1 and string2 are equal
if equal, return true, else return false */
