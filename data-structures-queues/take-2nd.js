/* exported take2nd */

function take2nd(queue) {
  const front = queue.peek();

  queue.dequeue();
  if (queue.peek() === undefined) {
    return front;
  } else {
    queue.enqueue(front);
    return queue.dequeue();

  }
}
