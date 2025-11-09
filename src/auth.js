function Auth() {
  this.isAuthenticated = true;
  this.token = '';
}

Auth.prototype.isAuthenticated = function() {
  return this.isAuthenticated;
};

Auth.prototype.login = function() {
  return;
};

Auth.prototype.logout = function() {
  return;
};

module.exports = { Auth };
