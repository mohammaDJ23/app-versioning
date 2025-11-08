const { User, Users } = require('./user');

function main() {
  const users = new Users();

  const user = new User('Mohammad', 'Nowresideh', 28);
  
  user.log();

  users.push(user);
}

main();
