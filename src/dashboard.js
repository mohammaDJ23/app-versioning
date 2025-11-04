function Dashboard(user) {
  this.user = user;
}

Dashboard.prototype.create = function() {
  return `A dashboard created for a user, ${this.user.name} ${this.user.lastName}`;
};

module.exports = {
  Dashboard,
};
