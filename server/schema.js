const { gql } = require('apollo-server-express')

module.exports = gql`

  scalar Date

  type Query {
    getUser: User,
    getMentors: [User!]
  }

  type User {
    id: ID!,
    email: String,
    password: String,
    fullname: String,
    campus: String,
    mentor: String,
    location: String,
    role: String,
    programs: String,
    current_job: String,
    avatar: String
  }


  type Mutation {
    Appointment(number: Int!, date: Date): AppointmentResponse!
    LinkedIn(user_id: Int!, date_link: Date, feed_id: Int): LinkedInResponse!
    addMentors(input: AddMentorsObject): addMentorsResponse!
    signup(input: SignupObject!): SignupResponse!
    login(input: LoginObject!): LoginResponse!
  }

  input AddMentorsObject {
    status: Boolean
  }

  type addMentorsResponse {
    message: String
  }

  type AppointmentResponse {
    message: String
  }

  type LinkedInResponse {
    message: String
  }

  input SignupObject {
    email: String!,
    fullname: String,
    password: String!,
  }

  input LoginObject {
    email: String!,
    password: String!,
  }

  type SignupResponse {
    message: String
  }

  type LoginResponse {
    message: String
  }
`

