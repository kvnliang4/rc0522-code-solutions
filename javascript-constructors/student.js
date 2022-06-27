/* exported Student */
function Student(firstname, lastname, Subject) {
  this.firstName = firstname;
  this.lastName = lastname;
  this.subject = Subject;
}

Student.prototype.getFullName = function () {
  var fullName = this.firstName + ' ' + this.lastName;
  return fullName;
};

Student.prototype.getIntroduction = function () {
  var introduction = 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  return introduction;
};
