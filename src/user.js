function User(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
}

User.prototype.log = function() {
  console.log(
    `The user, ${this.name} ${this.lastName}, has ${this.age} ${this.age > 0 ? 'years' : 'year'} old.`,
  );
};

module.exports = { User };
