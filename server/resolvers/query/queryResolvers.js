const authenticate = require('../authenticate')
const { createSelectQuery } = require('../makeQuery')
const axios = require('axios')

module.exports = {
  Query: {
    async getUser(parent, input, { req, app, postgres }){
      try {
        const selectAllUsers = {
          text: "SELECT * FROM hired.users WHERE github_access_token !=''"
        }
        const allUsers = await postgres.query(selectAllUsers)
        console.log(" List of all users are: ", allUsers)
      } catch (error) {
        console.log('Could not find any user! ', error)
      }
    },
    async getUserPortfolio(parent, input, { req, app, postgres }) {
      try {
        let user_id = input.user_id;

        // Build query string to SELECT * in all rows in porftolio table where user_id = input.user_id
        const getUserPortfolioQuery = createSelectQuery(['*'], 'hired.portfolio', 'user_id', user_id);

        // Run query with query string and get the goods
        const portfolio = await postgres.query(getUserPortfolioQuery);

        return {
          message: `Successfully retreived ${user_id}'s portfolio.`,
          portfolio: portfolio.rows
        }
      }
      catch (e) {
        console.log("Error in getUserPortfolio: ", e.message);
        throw e.message;
      }
    },
    async getMentors(parent, input, { req, app, postgres }){
      const mentors = {
          text: "SELECT * FROM hired.mentors"
        }

        const results = await postgres.query(mentors)

        return results.rows
    },
    async githubInfo (parent, {input}, {req, app, postgres}){
      const userId = authenticate(app, req)
      const getGithubInfo = {
        text: 'SELECT github_access_token FROM hired.users WHERE id=$1',
        values: [userId]
      }
      const postgresResponse = await postgres.query(getGithubInfo)
      const access_token = postgresResponse.rows[0].github_access_token;
      console.log(" The access token is: ", access_token)
      console.log("type of access_token: ", typeof(access_token))
      const result = await axios({
        url: 'https://api.github.com/graphql',
        method: 'post',
        data: {
          query: `
            query {
              viewer{
                name
                repositories(last: 1){
                  nodes {
                    name
                    createdAt
                    updatedAt
                    description
                    url
                    stargazers{
                      totalCount
                    }
                  }
                }
              }
            }
          `
        },
        headers: { 'Authorization': `token ${access_token}` }
      })
      // console.log("Number of Followers: ", result.data.data.viewer.followers.totalCount)
      // console.log("Number of Repositories: ", result.data.data.viewer.repositories.totalCount)
      // console.log("Number of Stars: ", result.data.data.viewer.starredRepositories.totalCount)
      console.log("The data is ............",result.data.data.viewer.repositories.nodes)
      return{
        name: result.data.data.viewer.name,
        repositories: result.data.data.viewer.repositories.nodes
      }
    }
  },
}
