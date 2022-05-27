var books = [
  {
    ISBN: '111',
    title: 'Cat in the Hat',
    author: 'Dr. Seuss'
  },
  {
    ISBN: '222',
    title: 'Green Eggs and Ham',
    author: 'Dr. Seuss'
  },
  {
    ISBN: '333',
    title: 'The Lorax',
    author: 'Dr. Seuss'
  }
];
var booksString = JSON.stringify(books);
console.log(booksString);
console.log('typeof: ' + typeof booksString);

var studentInfo = '{"studentId": "007", "stringName": "James"}';

console.log(studentInfo);
console.log('typeof: ' + typeof studentInfo);

var studentObject = JSON.parse(studentInfo);

console.log(studentObject);
console.log('typeof: ' + typeof studentObject);
