const sqliteconnection = require("../../sqlite");

const createUsers = require("./createUsers")

async function migrationsRun() {
  const schemas = [
    createUsers
  ].join('');

  sqliteconnection()
    .then(deb => deb.exec(schemas))
    .catch(error => console.error(error));
}

module.exports = migrationsRun