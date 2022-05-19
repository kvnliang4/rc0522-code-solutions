/* exported isUpperCased */

/* use a for loop to check each letter */
/* for (var i = 0; i < string.length; i++)
/* can check by comparing string[i] to string[i].toUpperCase() using comparison operator strictly equals */
/* string[i] === string[i].toUpperCase */
/* implement in an if statement */
/* if an iteration is true, continue, break if false */

function isUpperCased(string) {
  var isUpperCased;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      isUpperCased = true;
      continue;
    } else {
      isUpperCased = false;
      break;
    }
  }
  return isUpperCased;
}

/* needed to add an undefined variable that gets assigned the value true or false depending
on each comparison in each iteration of the loop */
