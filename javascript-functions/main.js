function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  console.log(minutes + ' minutes is equal to: ' + seconds + ' seconds.');
}

convertMinutesToSeconds(5);

function greet(name) {
  console.log('Hey, ' + name);
}

greet('Beavis');

function getArea(width, height) {
  var area = width * height;
  console.log('The area is: ' + area);
}

getArea(17, 42);

var mainCharacter = {
  firstName: 'Lelouche',
  lastName: 'Lamperouge'
};

function getFirstName(person) {
  console.log('the first name of this person is: ' + person.firstName);
}

getFirstName(mainCharacter);

var strictlandPropane = ['propane', 'and', 'propane', 'accessories'];

function getLastElement(array) {
  var lastElement = array.length - 1;
  console.log('The last element in this array is: ' + array[lastElement]);
}

getLastElement(strictlandPropane);
