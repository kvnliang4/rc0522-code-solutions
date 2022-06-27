/* exported titleCase */

function titleCase(title) {
  var split = title.toLowerCase().split(' ');
  var final = [];
  var taboo = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var secondSplit = split[0];
  if (secondSplit === 'javascript') {
    final.push('JavaScript');
  } else if (secondSplit === 'javascript:') {
    final.push('JavaScript:');
  } else {
    secondSplit = split[0].split('');
    secondSplit.splice(0, 1, secondSplit[0].toUpperCase());
    final.push(secondSplit.join(''));
  }
  for (var i = 1; i < split.length; i++) {
    for (var j = 0; j < taboo.length; j++) {
      if (split[i] !== taboo[j]) {
        var doesNotContain = true;
      } else {
        doesNotContain = false;
        break;
      }
    }
    for (j = 0; j < split[i - 1].length; j++) {
      var colonCheck = split[i - 1].split('');
      if (colonCheck[j] === ':') {
        var hasColon = true;
        break;
      } else {
        hasColon = false;
      }
    }
    if (split[i] === 'javascript') {
      final.push('JavaScript');
    } else if (split[i] === 'javascript:') { /* I couldn't think of any other way to check for this */
      final.push('JavaScript:');
    } else if (split[i] === 'api') {
      final.push('API');
    } else if (doesNotContain === true) {
      secondSplit = split[i].split('');
      for (var k = 0; k < secondSplit.length; k++) {
        if (secondSplit[k - 1] === '-') {
          secondSplit.splice(k, 1, secondSplit[k].toUpperCase());
        }
      }
      secondSplit.splice(0, 1, secondSplit[0].toUpperCase());
      final.push(secondSplit.join(''));
    } else if (hasColon === true) {
      secondSplit = split[i].split('');
      secondSplit.splice(0, 1, secondSplit[0].toUpperCase());
      final.push(secondSplit.join(''));
    } else {
      final.push(split[i]);
    }
  }
  return final.join(' ');
}
