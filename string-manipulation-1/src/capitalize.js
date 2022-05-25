/* exported capitalize */

/* use string[0] to get the first letter of the string */
/* use string[0].toUpperCase(); to capitalize the first letter of the string */
/* use string.splice(0, 1) to delete the first letter of the string */
/* return string[0].toUpperCase() + string; */

function capitalize(string) {
  var newString;
  newString = string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    newString += string[i].toLowerCase();
  }
  return newString;
}

/* create undefined variable newString */
/* define newString as the first letter of the string parameter capitalized by
assigning it the value of string[0].toUpperCase(); */
/* create for loop to add the values of the rest of the string parameter */
/* set var i = 1 in initialization of for loop to skip the first letter of the string parameter */
/* use addition assignment operator to continually add values to newString over each iterization */
/* return newString */
