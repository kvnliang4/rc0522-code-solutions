/* exported initial */

/* create new empty array
  var newArray = [];
want to push each element of parameter array except the last into the new array
can use a for loop to push an element into new array with each iterization
can skip the push of the last element by setting the condition to i < array.length - 1
  for (var i = 0; i < array.length - 1; i++) {}
 return new array */

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i += 1) {
    newArray.push(array[i]);
  }
  return newArray;
}
