const takeAChance = require('./take-a-chance');

const promise1 = takeAChance('kevin');

promise1.catch(error => {
  console.error(error.message);
});

promise1.then(value => {
  console.log(value);
});
