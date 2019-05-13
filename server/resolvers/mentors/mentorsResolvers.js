const authenticate = require('../authenticate')

module.exports = {
  Mentors: {
    async user(parent, input, {app, req, postgres}) {
        let user_id = parent.user_id

        const getMentors = {
          text: "SELECT * FROM hired.users WHERE id = $1",
          values: [user_id]
        }

        const results = await postgres.query(getMentors)

       return results.rows[0]

    },
  }

}
