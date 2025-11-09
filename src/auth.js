function Auth() {
  this.isAuthenticated = true;
  this.token = '';
  this.time = new Date().toISOString();
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
