const { User } = require('./user');

function main() {
  const user = new User('Mohammad', 'Nowresideh', 28);
  
  user.log();
}

main();
