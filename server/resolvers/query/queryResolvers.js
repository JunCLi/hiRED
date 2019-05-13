const authenticate = require('../authenticate')
const { createSelectQuery } = require('../makeQuery')
const axios = require('axios');


module.exports = {
  Query: {
    async getUser(parent, input, { req, app, postgres }){
      const portfolio = await postgres.query('SELECT  * from hired.users')
      console.log("portfolio: ", portfolio)
      const id = 13
      return {
        id
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

    async listMyDribbbles(parent, _, { app, req, postgres }) {
			try {
        let userId = authenticate(app, req)
        // let userId = 4
    
        console.log('this is userId: ', userId)
        
				// getting the userId dribbble_access_token
				let psql = {
					text: 'SELECT dribbble_access_token FROM hired.users where id = $1;',
					values:[userId]
				}
				console.log('this is ListMyDribbbles psql', psql)
				let query = await postgres.query(psql)
				console.log('this is ListMyDribbbles query', query.rows[0].dribbble_access_token)
        
        let myAccessToken = query.rows[0].dribbble_access_token

				let dribbbleJson = await axios.get(
					'https://api.dribbble.com/v2/user/shots?access_token=' + myAccessToken
				)
        console.log('this is dribbbleJson.data: ', dribbbleJson.data)
        return dribbbleJson.data
			} catch (e) {
        console.log('Sorry! This returned an error of: ', e.message);
				throw e.message
			}
		},
  },
}
