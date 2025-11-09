function Auth() {
  this.isAuthenticated = true;
}

Auth.prototype.isAuthenticated = function() {
  return this.isAuthenticated;
};

module.exports = { Auth };
