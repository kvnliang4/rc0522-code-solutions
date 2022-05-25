/* exported countdown */
function countdown(number) {
  var countdown = [];
  for (var i = number; i >= 0; i += -1) {
    countdown.push(i);
  }
  return countdown;
}
