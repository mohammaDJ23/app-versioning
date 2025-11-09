const { Auth } = require('./auth');

function main() {
  const auth = new Auth();

  console.log(auth.isAuthenticated);
  console.log(`Hello!`);
}

main();
