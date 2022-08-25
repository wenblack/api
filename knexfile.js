const path = require ("path")
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      //Location of database file
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },
    useNullAsDefault:true
  }
};
