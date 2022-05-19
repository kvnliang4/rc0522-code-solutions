/* exported getIndexes */
function getIndexes(array) {
  var indexes = [];
  for (var i = 0; i < array.length; i += 1) {
    indexes.push(i);
  }
  return indexes;
}
