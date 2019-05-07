const { gql } = require('apollo-server-express')

module.exports = gql`

  scalar Date

  type Query {
    getUser: User,
  }

  type User {
    id: ID!,
    email: String,
    password: String,
    fullname: String,
    campus: String,
    location: String,
    role: String,
    current_job: String,
    avatar: String,
    date_created: Date
  }

  type Mutation {
    Appointment(number: Int!, date: Date): AppointmentResponse!
    LinkedIn(user_id: Int!, date_link: Date, feed_id: Int): LinkedInResponse!
  }

  type AppointmentResponse {
    message: String
  }

  type LinkedInResponse {
    message: String
  }

`

