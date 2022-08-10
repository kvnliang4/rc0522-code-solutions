/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let smallest = queue.dequeue();

  if (queue.peek() === undefined) {
    return smallest;
  }

  while (smallest > queue.peek()) {
    queue.enqueue(smallest);
    smallest = queue.dequeue();
  }
  return smallest;

}
