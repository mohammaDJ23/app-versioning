const { Auth } = require('./auth');

function main() {
  const auth = new Auth();

  auth.login();
}

main();
