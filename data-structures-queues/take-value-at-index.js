/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return queue.peek();
  }
  for (let i = 0; i < index; i++) {
    queue.enqueue(queue.peek());
    queue.dequeue();
  }

  return queue.dequeue();
}
