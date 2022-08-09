/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const array = [];

  if (stack.peek() === undefined) {
    return undefined;
  } else {
    array.push(stack.peek());
    stack.pop();
    stack.push(value);
    stack.push(array[0]);
  }
}
