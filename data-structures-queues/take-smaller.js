/* exported takeSmaller */

function takeSmaller(queue) {
  const front = queue.peek();

  queue.dequeue();
  if (queue.peek() === undefined) {
    return front;
  }

  if (front < queue.peek()) {
    queue.enqueue(queue.peek());
    queue.dequeue();
    return front;
  } else if (front === queue.peek()) {
    queue.enqueue(front)
    queue.dequeue();
    return front;
  } else if (front > queue.peek()) {
    queue.enqueue(front);
    return queue.dequeue();

  }
}
