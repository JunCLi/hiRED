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
    signup(
      input: SignupObject!
    ):SignupResponse!
    signupPage2(input: SignupPage2Object!): SignupPage2Response!
    login(
      input: LoginObject!
    ):LoginResponse!
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

  input SignupPage2Object {
    campus: String,
    program_name: String,
    study_year: Int,
    study_cohort: String,
    role: String,
    current_job: String,
    location: String,
    mentor: Boolean,
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

  type SignupPage2Response {
    message: String
  }
`

