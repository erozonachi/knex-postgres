// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://postgres:root@127.0.0.1:5432/tasks_db',
    pool: {
      min: 2,
      max: 10
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'db_migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
