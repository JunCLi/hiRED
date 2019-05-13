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
    async getUserProfile(parent, input, { req, app, postgres }){
      try {
        const user_id = authenticate(app, req)

        const selectColumns = [
          'id',
          'email',
          'fullname',
          'campus',
          'location',
          'role',
          'current_job',
          'avatar',
          'study_year',
          'study_cohort'
        ]

        const getUserProfileQuery = createSelectQuery(selectColumns, 'hired.users', 'id', user_id)
        const getUserProfileResult = await postgres.query(getUserProfileQuery)

        return getUserProfileResult.rows[0]
      } catch (err) {
        throw err
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
    }
  },
}
