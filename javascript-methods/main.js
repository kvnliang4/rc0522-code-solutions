var x = 5;
var y = 8;
var z = 84;

var maximumValue = Math.max(x, y, z);

console.log('the maximum value is:', maximumValue);

var heroes = ['batman', 'spiderman', 'ironman', 'superman'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('random index:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('random hero:', randomHero);

var library = [
  {
    title: 'Cat in the Hat',
    author: 'Dr. Seuss'
  },
  {
    title: 'Green Eggs and Ham',
    author: 'Dr Seuss'
  },
  {
    title: 'The Lorax',
    author: 'Dr. Seuss'
  }
];

var lastBook = library.pop();

console.log('last book:', lastBook);

var firstBook = library.shift();

console.log('first book:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Kevin Liang';

var firstAndLastName = fullName.split(' ');
console.log('First and last name:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('My Name:', sayMyName);
