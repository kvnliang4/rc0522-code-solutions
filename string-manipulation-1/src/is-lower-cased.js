/* exported isLowerCased */

/* used the code for isUpperCase() but replaced Upper with Lower */

function isLowerCased(string) {
  var isLowerCased;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      isLowerCased = true;
      continue;
    } else {
      isLowerCased = false;
      break;
    }
  }
  return isLowerCased;
}
