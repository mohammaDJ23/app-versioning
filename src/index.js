const { Auth } = require('./auth');

function main() {
  const auth = new Auth();

  console.log(`Hello! Is it authenticated? ${auth.isAuthenticated}`);
}

main();
