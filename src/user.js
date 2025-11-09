function User(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

User.prototype.log = function() {
  console.log(this.name, this.lastName);
};

User.prototype.getFullName = function() {
  return this.name + ' ' + this.lastName;
};

module.exports = { User };
