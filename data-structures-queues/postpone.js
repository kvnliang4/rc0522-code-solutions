/* exported postpone */

function postpone(queue) {
  const front = queue.peek();
  if (queue.peek() !== undefined) {
    queue.dequeue();
    queue.enqueue(front);
  }
}
