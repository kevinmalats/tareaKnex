// Update with your config settings.


module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgress://postgres:postgres@localhost:5432/test'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'test',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
