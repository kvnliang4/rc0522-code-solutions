/* exported invert */

function invert(source) {
  var object = {};
  for (var x in source) {
    object[source[x]] = x;
  }
  return object;
}
