/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const array = [];
  let secondFromTop = 0;

  if (stack.peek() === undefined) {
    return undefined;
  }

  array.push(stack.peek());

  stack.pop();

  if (stack.peek() === undefined) {
    stack.push(array[0]);
    return undefined;
  }

  secondFromTop = stack.peek();

  stack.push(array[0]);

  return secondFromTop;
}
