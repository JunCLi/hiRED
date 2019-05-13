const authenticate = require('../authenticate')
const { createSelectQuery } = require('../makeQuery')
const Fuse = require("fuse.js")


module.exports = {
  Query: {
    async getUser(parent, input, { req, app, postgres }){
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
        let getAllMentors;
        let results;

        const fullnameSearch = input.fullnameSearch
        const program_name = input.getPrograms


        if (program_name) {

          const getProgram = {
            text: "SELECT * FROM hired.programs WHERE name = $1",
            values: [program_name]
          }

          const programs = await postgres.query(getProgram)


          const userProgram = {
                text: "SELECT * FROM hired.program_users WHERE program_id = $1",
                values: [programs.rows[0].id]
              }

          const users = await postgres.query(userProgram)

          let user_id = users.rows.map(d=> d.user_id)

           getAllMentors = {
                  text: `SELECT fullname, email, role, campus, location, current_job, avatar, status, user_id, hired.mentors.id AS mentor_id
                          FROM hired.users
                          INNER JOIN hired.mentors
                          ON hired.mentors.user_id = hired.users.id
                          WHERE hired.users.id = $1 OR hired.users.id = $2
                          `,
                  values: user_id
                }

          results = await postgres.query(getAllMentors)

        } else {
             getAllMentors = {
                text: `SELECT fullname, email, role, campus, location, current_job, avatar, status, user_id, hired.mentors.id AS mentor_id
                        FROM hired.users
                        INNER JOIN hired.mentors
                        ON hired.mentors.user_id = hired.users.id
                        `
              }


            results = await postgres.query(getAllMentors)
        }




        if (fullnameSearch) {
          var options = {
            shouldSort: true,
            threshold: 0.6,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
              "fullname",
            ]
          };

          const fuse = new Fuse(results.rows, options); // "list" is the item array
          const result = fuse.search(fullnameSearch)

          return result
        }

        return results.rows
    },
  },
}
