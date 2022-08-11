/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {

  const insertList = new LinkedList(value, list.next);

  insertList.next = list.next;

  list.next = insertList;
}
