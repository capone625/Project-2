// Since one of our properties needs to be snake cased,
// we can disable the linting for that specific scenario
// and line so that the build doesn't fail for a lint error

module.exports = {
    development: {
      username: "root",
      // make sure to set this env variable in your .env file
      password: process.env.LOCAL_MYSQL_PASSWORD,
      database: "exampledb",
      host: "localhost",
      dialect: "mysql"
    },
    test: {
      username: "root",
      password: null,
      database: "testdb",
      host: "localhost",
      dialect: "mysql",
      logging: false
    },
    production: {
      /* eslint-disable-next-line camelcase */
      use_env_variable: JAWSDB_URL,
      dialect: mysql
    }
  };