/* exported tail */

/* create new empty array */
/* var newArray = []; */
/* want to push each element except the first of the parameter array into new array */
/* array.push() */
/* can utilize a for loop to push each iteration of elements of parameter array into new array */
/* can skip first element by setting var i to 1 instead of 0 in teh initialization */
/* condition can be set by setting i to less than the length of the array */
/* iteration is set to 1 +=1 */
/* for (i=1; i<array.length;i++) */

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i += 1) {
    newArray.push(array[i]);
  }
  return newArray;
}
