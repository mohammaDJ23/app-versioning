const { Dashboard } = require('./dashboard');

function main() {
  const user = {
    name: 'Mohammad',
    lastName: 'Nowresideh',
    age: 28,
  };

  const dashboard = new Dashboard(user);

  console.log(dashboard.create());
}

main();
