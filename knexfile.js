// Update with your config settings.

require('dotenv').config();

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: process.env.SQLITE_FILE
    }
  },

  staging: {
    client: 'mysql',
    connection: { }
  },

  production: {
    client: 'mysql',
    connection: { }
  }

};
