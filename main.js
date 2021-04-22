function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const person1 = new Person("John", "Doe", "7-29-1995");

const person2 = new Person("Jason", "Kang", "8-1-1996");

console.log(person1.getBirthYear());
console.log(person2.getFullName());
