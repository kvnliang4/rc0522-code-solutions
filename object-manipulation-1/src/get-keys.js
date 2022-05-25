/* exported getKeys */

function getKeys(object) {
  var keys = [];
  for (var i in object) {
    keys.push(i);
  }
  return keys;
}
