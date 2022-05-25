/* exported take */

/* create new array
use for loop to push elements of array into new array
set var i < count in condition
return new array */

function take(array, count) {
  var newArray = [];
  if (count > array.length) {
    newArray = array;
  } else {
    for (var i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

/* add if statement to account for count being larger than array */
