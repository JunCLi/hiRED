const { gql } = require('apollo-server-express')

module.exports = gql`

  scalar Date

  type Query {
    getUser: User
    getMentors: [Mentors]!
    getUserPortfolio(user_id: Int!): [Portfolio]!
    githubInfo: githubInfo
  }

  type githubInfo{
    name: String
    repositories: [Repo]
  }

  type Repo{
    name: String,
    createdAt: Date,
    updatedAt: Date,
    description: String,
    url: String,
    stargazers: Stars
  }

  type Stars{
    totalCount: Int
  }
  type getUserPortfolioResponse {
    message: String,
    portfolio: [Portfolio]
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
    github_api_code: String,
    github_access_token: String,
    github_social: GithubSocial
  }
  type GithubSocial {
    github: GithubItems
  }
  type GithubItems{
    id: ID!
    token: String
    date_pulled: Date
  }
  type Mentors {
    status: Boolean,
    user: User
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
    saveGithubCode(api_code: String): String
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

