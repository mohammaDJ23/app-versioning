const { User } = require('./user');

function main() {
  const user = new User();

  user.create('Mohammad', 'Nowresideh');

  console.log(user);
  console.log('hello world.');
}

main();
