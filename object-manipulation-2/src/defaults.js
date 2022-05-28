/* exported defaults */

function defaults(target, source) {
  var checkSource = [];
  var checkTarget = [];
  for (var x in source) {
    checkSource.push(x);
  }
  if (checkSource.length <= 0) {
    return target;
  }
  for (var y in target) {
    checkTarget.push(y);
  }
  if (checkTarget.length <= 0) {
    for (x in source) {
      target[x] = source[x];
    }
    return target;
  } else if (x !== y) {
    target[x] = source[x];
  }
  return target;
}
