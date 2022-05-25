/* exported isVowel */

function isVowel(character) {
  var isVowel;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if (character === vowels[i] || character === vowels[i].toUpperCase()) {
      isVowel = true;
      break;
    } else {
      isVowel = false;
    }
  }
  return isVowel;
}
