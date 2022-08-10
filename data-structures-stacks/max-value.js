/* exported maxValue */

function maxValue(stack) {
  let maxValue = stack.peek();

  if (stack.peek() === undefined) {
    return -Infinity;
  } else {
    while (stack.peek() !== undefined) {
      if (maxValue < stack.peek()) {
        maxValue = stack.peek();
      }
      stack.pop();
    }
    return maxValue;
  }


}
