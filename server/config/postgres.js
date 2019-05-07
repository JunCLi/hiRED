const { Pool } = require('pg')

let host, user, password, database

switch (process.env.NODE_ENV) {
  case 'staging':
    host = 'localhost'
    user = 'postgres'
    password = 'root'
    database = 'postgres'
    break;
  case 'development':
    host = 'localhost'
    user = 'postgres'
    password = 'root'
    database = 'postgres'
    break;
  case 'production':
  default:
    break;
}



const postgres = new Pool({
  host: host,
  user: user,
  password: password,
  database: database,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

module.exports = postgres