const authenticate = require('../authenticate')

module.exports = {
  Query: {
    async getUser(parent, input, { req, app, postgres }){
      const id = 13
      return {
        id
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
