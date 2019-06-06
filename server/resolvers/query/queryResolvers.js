const authenticate = require('../authenticate')
const { createSelectQuery } = require('../makeQuery')
const axios = require('axios')
const Fuse = require('fuse.js')

module.exports = {
	Query: {
		async getUser(parent, input, { req, app, postgres }) {
			try {
				const selectAllUsers = {
					text: "SELECT * FROM hired.users WHERE github_access_token !=''",
				}
				const allUsers = await postgres.query(selectAllUsers)
				return allUsers.rows
			} catch (error) {
				console.log('Could not find any user! ', error)
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

		async githubInfo(parent, { input }, { req, app, postgres }) {
			const userId = authenticate(app, req)
			const getGithubInfo = {
				text: 'SELECT github_access_token FROM hired.users WHERE id=$1',
				values: [userId],
			}
			const postgresResponse = await postgres.query(getGithubInfo)
			const access_token = postgresResponse.rows[0].github_access_token
			const result = await axios({
				url: 'https://api.github.com/graphql',
				method: 'post',
				data: {
					query: `
            query {
              viewer{
                name
								repositories(last: 20){
                  nodes {
                    name
                    createdAt
                    description
										forkCount
										id
										isLocked
										isPrivate
										owner{
											login
										}
										pushedAt
										resourcePath
                    stargazers{
                      totalCount
                    }
										sshUrl
										updatedAt
										url
                  }
                }
              }
              }
          `,
				},
				headers: { Authorization: `token ${access_token}` },
			})
			return {
				name: result.data.data.viewer.name,
				repositories: result.data.data.viewer.repositories.nodes,
			}
		},

    async getMentors(parent, input, { req, app, postgres }){
			let getAllMentors;
			let results;

			const fullnameSearch = input.fullnameSearch
			const program_name = input.getPrograms
			const skills_id =input.getSkills

			/// skills filter ////
      if (skills_id.length > 0) {
        const skills_id_array = input.getSkills.map(d=> d.skills_id)

              const getSkills = {
               text: "SELECT * FROM hired.skills_users WHERE skills_id = ANY($1)",
               values: [skills_id_array]
              }

            const skills = await postgres.query(getSkills)

         // now we have the users with those given skills. We only need the users id.

           let user_id_skills = skills.rows.map((d,i) => d.user_id)

           // get unique values. We don't need all the extra user id's

           user_id_skills = [...new Set(user_id_skills)];

           // join the users to filter out the ones without the required skills

         const getMentorsSkills = {
             text: `SELECT fullname, email, role, campus, location, current_job, avatar, status, user_id, hired.mentors.id AS mentor_id
                     FROM hired.users
                     INNER JOIN hired.mentors
                     ON hired.mentors.user_id = hired.users.id
                     WHERE hired.users.id = ANY($1)
                     `,
             values: [user_id_skills]
           }

        results = await postgres.query(getMentorsSkills)
      }
      /// program filter ///

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
                          WHERE hired.users.id = ANY($1)
                          `,
                  values: [user_id]
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

        /// search filter ///

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
    async getAllSkills(parent, {input}, { req, app, postgres }) {

      const matchSkills = {
        text: `SELECT * FROM hired.skills`,
      }

     const results = await postgres.query(matchSkills)

      return results.rows
		},

   async listMyDribbbles(parent, _, { app, req, postgres }) {
			try {
				let userId = authenticate(app, req)
				// let userId = 4
				// getting the userId dribbble_access_token
				let psql = {
					text: 'SELECT dribbble_access_token FROM hired.users where id = $1;',
					values: [userId],
				}
				let query = await postgres.query(psql)
				let myAccessToken = query.rows[0].dribbble_access_token
				let dribbbleJson = await axios.get(
					'https://api.dribbble.com/v2/user/shots?access_token=' + myAccessToken
				)
				return dribbbleJson.data
			} catch (e) {
				console.log('Sorry! This returned an error of: ', e.message)
				throw e.message
			}
		},

    async getStatus(parent, {input}, {req, app, postgres}){
      try {
        const getAllStatus = {
          text: 'SELECT * FROM hired.status WHERE user_id=1'
        }
        const result = await postgres.query(getAllStatus)
        //console.log(" The result is: ============================ : ", result)
      } catch (error) {

      }
		},

    async getMessages(parent, input, { req, app, postgres }) {
          let myConversation = input.conversation_id;

          const messages = {
            text: `SELECT conversation_id, content, from_user, hired.users.fullname AS fullname
                   FROM hired.messages
                   INNER JOIN hired.users
                   ON hired.messages.from_user = hired.users.id
                   WHERE conversation_id = $1`,
            values: [myConversation]
          };

          const results = await postgres.query(messages);

          return results.rows;
        },
        async getConversations(parent, input, { req, app, postgres }) {

          const conversation = {
            text: "SELECT * FROM hired.conversations"
          };
          const result = await postgres.query(conversation);
          return result.rows
        },
	},
}
