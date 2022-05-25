var student = {
  firstName: 'Kevin',
  lastName: 'Liang',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOcupation = 'assistant';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOcupation:', student.previousOcupation);
console.log('value of student:', student);

var vehicle = {
  make: 'lexus',
  model: 'IS 300',
  year: 2020
};

vehicle['color'] = 'red';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Snoopy',
  type: 'imaginary'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
