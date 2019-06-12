const { Pool } = require('pg')

let host, user, password, database

host = 'localhost'
user = 'postgres'
password = 'root'
database = 'postgres'
let schema = "hired"

switch (process.env.NODE_ENV) {
  case 'staging':
    host = 'localhost'
    user = 'postgres'
    password = 'root'
    database = 'postgres'
    schema = 'hired'
    break;
  case 'development':
    host = 'localhost'
    user = 'postgres'
    password = 'root'
    database = 'postgres'
    schema = 'hired'
    break;
  case 'production':
  default:
    host = 'localhost'
    user = 'postgres'
    password = ''
    database = 'postgres'
    schema = 'hired'
    break;
}


const postgres = new Pool({
  host: host || 'locahost',
  user: user || 'postgres',
  password: password || 'root',
  database: database || 'postgres',
  schema: schema || 'hired',
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

module.exports = postgres