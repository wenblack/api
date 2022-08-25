const path = require ("path")
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      //Location of database file
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },//Migration Locate
    migrations:{
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
      
    },
    useNullAsDefault:true,
  },
};
/*To Create a Migration File of Knex, use:
npx knex migrate:make createNotes

To Run a Migration use:
npx knex migrate:latest
*/