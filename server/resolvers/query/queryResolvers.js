const authenticate = require('../authenticate')
const { createSelectQuery } = require('../makeQuery')


module.exports = {
  Query: {
    async getUser(parent, input, { req, app, postgres }){
      const id = 13
      return {
        id
      }
    },
    async getUserPortfolio(parent, input, { req, app, postgres }) {
      //input.user_id is an optional param. If it is undefined the query will use authenticated user
      try {
        let user_id;
        !input.user_id ? user_id = authenticate(app,req) : user_id = input.user_id;

        // Build query string to SELECT * in all rows in porftolio table where user_id = input.user_id
        const getUserPortfolioQuery = createSelectQuery(['*'], 'hired.portfolio', 'user_id', user_id);

        // Run query with query string and get the goods
        const portfolio = await postgres.query(getUserPortfolioQuery);

        return portfolio.rows
      }
      catch (e) {
        console.log("Error in getUserPortfolio: ", e.message);
        throw e;
      }
    },
    async getMentors(parent, input, { req, app, postgres }){
      const mentors = {
          text: "SELECT * FROM hired.mentors"
        }

        const results = await postgres.query(mentors)

        return results.rows
    }
  },
}
