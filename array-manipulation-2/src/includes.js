/* exported includes */

/* create new variable includes
use an if statement to compare each value of array
use for loop to check each value
assign includes true or false depending on comparison
return includes */

function includes(array, value) {
  var includes;
  if (array[0] === undefined) {
    includes = false;
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      includes = true;
      break;
    } else {
      includes = false;
    }
  }
  return includes;
}

/* needed to include an initial if statement to check if the array is an empty one */
