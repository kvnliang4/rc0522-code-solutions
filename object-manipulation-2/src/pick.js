/* exported pick */

function pick(source, keys) {
  var object = {};
  for (var x in source) {
    for (var i = 0; i < keys.length; i++) {
      if (x === keys[i]) {
        if (source[x] !== undefined) {
          object[x] = source[x];
        }
      }
    }
  }
  return object;
}
