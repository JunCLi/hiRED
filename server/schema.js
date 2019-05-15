const { gql } = require('apollo-server-express')

module.exports = gql`

  scalar Date

  type Query {
    getUser: User
    getMentors(fullnameSearch: String, getPrograms: String, getSkills: [userSkills]): [Mentors]!
    getAllSkills: [Skills]!
    getUserPortfolio(user_id: Int!): [Portfolio]!
  }

  type getUserPortfolioResponse {
    message: String,
    portfolio: [Portfolio]
  }

  input userSkills {
    skills_id: Int
  }

  type Skills {
    id: Int,
    label: String
    value: String
  }

  type Portfolio {
    id: Int,
    user_id: Int,
    title: String,
    description: String,
    type: String,
    custom_link: String,
    api_link: String,
    thumbnail: String
  }

  input AddUserPortfolioInput {
    user_id: Int,
    title: String,
    description: String,
    type: String,
    custom_link: String,
    api_link: String,
    thumbnail: String
  }

  input UpdateUserPortfolioInput {
    id: Int!,
    user_id: Int,
    title: String,
    description: String,
    type: String,
    custom_link: String,
    api_link: String,
    thumbnail: String
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
    avatar: String,
  }


  type Mentors {
    status: Boolean,
    user: User,
  }

  input programObject {
    id: Int,
    name: String
  }

  type Programs {
    id: Int,
    name: String
  }

  type Mutation {
    Appointment(number: Int!, date: Date): AppointmentResponse!
    LinkedIn(user_id: Int!, date_link: Date, feed_id: Int): LinkedInResponse!
    addMentors(input: AddMentorsObject): addMentorsResponse!
    signup(input: SignupObject!): SignupResponse!
    signupForm2(input: SignupForm2Object!): SignupForm2Response!
    login(input: LoginObject!): LoginResponse!
    addUserPortfolio(input: AddUserPortfolioInput!): Portfolio!
    updateUserPortfolio(input: UpdateUserPortfolioInput!): Portfolio!
    deleteUserPortfolio(id: Int!): deleteUserPortfolioResponse!
    addSkills(input: [skillsTags]): addSkillsResponse!
  }

   input skillsTags {
    skills_id: Int,
  }


  type addSkillsResponse {
    message: String
  }

  type deleteUserPortfolioResponse {
    message: String
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

  input SignupForm2Object {
    campus: String,
    program_name: String,
    study_year: String,
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

  type SignupForm2Response {
    message: String
  }
`

