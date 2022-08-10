/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  for (let i = 0; i < index; i++) {
    queue.enqueue(queue.peek());
    queue.dequeue();
  }

  return queue.dequeue();
}
