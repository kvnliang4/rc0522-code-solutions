/* exported includesSeven */
function includesSeven(array) {
  var hasSeven = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      hasSeven[0] = true;
      break;
    } else {
      hasSeven[0] = false;
    }
  }
  if (hasSeven[0] === undefined) {
    hasSeven[0] = false;
  }
  return hasSeven[0];
}
