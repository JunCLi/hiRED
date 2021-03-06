const { gql } = require('apollo-server-express')

module.exports = gql`

  scalar Date

  type Query {
    getUser: User
    getMentors(fullnameSearch: String, getPrograms: String, getSkills: [userSkills]): [Mentors]!
    getAllSkills: [Skills]!
    getUserPortfolio(user_id: Int): [Portfolio]!
    githubInfo: githubInfo
    getStatus(user_id: Int!): Status
    listMyDribbbles: [Dribbble_Items]
    getMessages(conversation_id:ID):[Messages]
    getConversations: [ConversationRooms]
    getUserProfile: User
    getConversation(id:ID): ConversationRoom
    getRedBookUsers: [User!]
  }


  type ConversationRoom {
    id:Int
    user_id_1: Int,
    user_id_2: Int,
  }

  type Status {
    id: ID!,
    user_id: Int,
    role: String,
    looking_for: String,
    location: String
  }

  type ConversationRooms{
      id:Int
      user_id_1: Int,
      user_id_2: Int,
    }

  type Messages{
      from_user:Int,
      conversation_id: Int,
      content:String,
      date_created:String
      fullname:String
    }

  type Subscription{
    messageAdded(conversation_id: ID!): Messages
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
		description: String,
    campus: String,
    mentor: Boolean,
    location: String,
    role: String,
    programs: String,
    job_location: String,
    current_job: String,
    avatar: String,
    study_year: String,
    study_cohort: String,
		getMentor: Mentors,
    getPrograms: [Programs]
    dribbble_connected: Boolean,
    dribbble_api_code: String,
    dribbble_access_token: String,
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
    user: User,
  }

  input StatusInput {
    id: ID,
    user_id: Int,
    role: String,
    looking_for: String,
    location: String
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
    updateProfile(input: UpdateProfileObject!): MessageResponse!
    login(input: LoginObject!): LoginResponse!
    addUserPortfolio(input: AddUserPortfolioInput!): Portfolio!
    updateUserPortfolio(input: UpdateUserPortfolioInput!): Portfolio!
    deleteUserPortfolio(id: Int!): deleteUserPortfolioResponse!
    saveGithubCode(api_code: String): String
    addStatus(input: StatusInput): addStatusResponse!
    saveDribbbleCode (api_code: String): Boolean
    addSkills(input: [skillsTags]): addSkillsResponse!
    addConversation(user_id_2: Int): addConversationResponse!
    addMessages(content: String, conversation_id: Int): addMessagesResponse!
  }

  type addStatusResponse {
    message: String
  }

  type addMessagesResponse {
    message: String
  }


  type addConversationResponse {
    id: Int
  }

   input skillsTags {
    skills_id: Int,
  }


  type addSkillsResponse {
    message: String
  }

	type MessageResponse {
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
    programs: String,
    job_location: String,
  }

	input UpdateProfileObject {
    email: String
    fullname: String
    password: String
		description: String
    campus: String
    program_name: String
    study_year: String
    study_cohort: String
    role: String
    current_job: String
    location: String
    mentor: Boolean
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

  type Dribbble_Items {
    id: ID
    title: String
    description: String
    height: Int
    width: Int
    html_url: String
    published_at: Date
    updated_at: Date
    images: Dribbble_Images
  }

  type Dribbble_Images {
    hidpi: String
    normal: String
    one_x: String
    teaser: String
  }

`

