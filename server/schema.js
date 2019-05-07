const { gql } = require('apollo-server-express')

module.exports = gql`

  type User {
    id: ID,
    fullname: String
  }
  type Query {
    getUser(id : ID): User,
  }
`

