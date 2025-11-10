const { User } = require('./user');
const { Dashboard } = require('./dashboard');

function main() {
  const user = new User('Mohammad', 'Nowresideh');
  const dashboard = new Dashboard(user);

  console.log(user);
  console.log(dashboard);
  console.log('hello world');
}

main();
