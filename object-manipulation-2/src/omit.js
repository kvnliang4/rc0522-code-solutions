/* exported omit */

function omit(source, keys) {
  var object = {};
  for (var x in source) {
    object[x] = source[x];
    for (var i = 0; i < keys.length; i++) {
      if (x === keys[i]) {
        if (source[x] !== undefined) {
          delete object[keys[i]];
        }
      }
    }
  }
  return object;
}
