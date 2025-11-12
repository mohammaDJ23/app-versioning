const { User } = require('./user');

function main() {
  const user = new User('Mohammad', 'Nowresideh');

  console.log('A new user created which is called', user);
  console.log('hello world.');
}

main();
