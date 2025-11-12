const { Dashboard } = require('./dashboard');
const { User } = require('./user');

function main() {
  const user = new User('Mohammad', 'Nowresideh');
  const dashboard = new Dashboard(user);

  console.log('A new user created which is called', user);
  console.log('A new dashboard created which is called', dashboard);
  console.log('hello world.');
}

main();
