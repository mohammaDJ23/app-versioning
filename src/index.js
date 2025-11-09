const { Auth } = require('./auth');
const { User } = require('./user');

function main() {
  const auth = new Auth();
  const user = new User('Mohammad', 'Nowresideh');

  auth.login();

  user.log();
  user.getFullName();
}

main();
