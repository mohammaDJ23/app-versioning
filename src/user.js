function User() {
  this.name = '';
  this.lastName = '';
}

User.prototype.create = function(name, lastName) {
  this.name = name;
  this.lastName = lastName;
};

module.exports = { User };
