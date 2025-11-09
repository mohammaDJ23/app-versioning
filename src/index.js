const { Auth } = require('./auth');

function main() {
  const auth = new Auth();

  auth.login();

  console.log(auth.isAuthenticated);
  console.log(`Hello!`);
}

main();
