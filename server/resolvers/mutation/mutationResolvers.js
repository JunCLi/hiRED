const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 12
const crypto = require('crypto')
const Promise = require('bluebird')
const authenticate = require('../authenticate')
const axios = require('axios')
const pubsub = require("../../utils/pubsub")

const { createCookie, setCookie } = require('./setCookie')
const { createInsertQuery, createUpdateQuery, createSelectQuery } = require('../makeQuery')

module.exports = {
	Mutation: {
		async signup(parent, { input }, { app, req, postgres }) {
			try {
				const { email, password, fullname } = input

				const checkDuplicateQuery = createSelectQuery(['email'], 'hired.users', 'email', email)
				const checkDuplicateQueryResult = await postgres.query(checkDuplicateQuery)

				if (checkDuplicateQueryResult.rows.length) throw 'This email has already been taken'

				const hashedPassword = await bcrypt.hash(password, saltRounds)
				const newUserObject = {
					email: email,
					password: hashedPassword,
					fullname: fullname,
				}

				const signupQuery = createInsertQuery(newUserObject, 'hired.users')
				const signupQueryResult = await postgres.query(signupQuery)

				const tokenData = signupQueryResult.rows[0].id
				let myJWTToken = await createCookie(tokenData, 16)
				setCookie('hiRED_app', myJWTToken, req.res)

				return {
					message: 'success',
				}
			} catch (err) {
				throw err
			}
		},

		async signupForm2(parent, { input }, { app, req, postgres }) {
			try {
				const user_id = authenticate(app, req)
				const { campus, program_name, study_year, study_cohort, role, current_job, location, mentor, job_location } = input

				const updateUserObject = {
					campus: campus,
					study_year: study_year,
					study_cohort: study_cohort,
					role: role,
					current_job: current_job,
					location: location,
          job_location: job_location,
          programs: program_name,

				}
				const updateUserQuery = createUpdateQuery(updateUserObject, 'id', 'hired.users', user_id)
				await postgres.query(updateUserQuery)

				if (mentor) {
					const insertMentorObject = {
						user_id: user_id,
						status: true,
					}
					const insertMentorQuery = createInsertQuery(insertMentorObject, 'hired.mentors')
					await postgres.query(insertMentorQuery)
				}

				if (program_name) {
					const selectProgramColumns = ['id']
					const programIdQuery = createSelectQuery(selectProgramColumns, 'hired.programs', 'name', program_name)
					const programIdQueryResult = await postgres.query(programIdQuery)

					if (!programIdQueryResult.rows.length) throw 'There is no program of that name'

					const insertProgramsUsersObject = {
						user_id: user_id,
						program_id: programIdQueryResult.rows[0].id,
					}
					const insertProgramsUsersQuery = createInsertQuery(insertProgramsUsersObject, 'hired.program_users', true)
					await postgres.query(insertProgramsUsersQuery)
				}
				return {
					message: 'success',
				}
			} catch (err) {
				throw err
			}
		},

		async updateProfile(parent, { input }, { req, app, postgres }){

			try {
				const user_id = authenticate(app, req)
				const {campus, current_job, description, email, fullname, location, mentor, program_name, role, study_year, study_cohort} = input

				const updateUserObject = {
					campus: campus,
					current_job: current_job,
					description: description,
					email: email,
					fullname: fullname,
					location: location,
					role: role,
					study_year: study_year,
					study_cohort: study_cohort
				}

				const updateUserQuery = createUpdateQuery(updateUserObject, 'id', 'hired.users', user_id)
				await postgres.query(updateUserQuery)

				if (mentor) {
					const updateMentorObject = {
						status: mentor
					}
					const updateMentorQuery = createUpdateQuery(updateMentorObject, 'user_id', 'hired.mentors', user_id)
					await postgres.query(updateMentorQuery)
				}

				if (program_name) {
					const selectProgramColumns = ['id']
					const programIdQuery = createSelectQuery(selectProgramColumns, 'hired.programs', 'name', program_name)
					const programIdQueryResult = await postgres.query(programIdQuery)

					if (!programIdQueryResult.rows.length) throw 'There is no program of that name'

					// const selectProgramsusersColumns = ['user_id', 'program_id']

					const insertProgramsUsersObject = {
						user_id: user_id,
						program_id: programIdQueryResult.rows[0].id
					}
					const insertProgramsUsersQuery = createInsertQuery(insertProgramsUsersObject, 'hired.program_users', true)
					await postgres.query(insertProgramsUsersQuery)
				}

				return {
					message: 'success'
				}
			} catch(err) {
				throw err
			}
		},

		async login(parent, { input }, { app, req, postgres }) {
			try {
				let { email, password } = input
				email = email.toLowerCase()

				const passwordQuery = createSelectQuery(['id, password'], 'hired.users', 'email', email)
				const queryResult = await postgres.query(passwordQuery)

				if (!queryResult.rows.length) throw 'incorrect email'

				const dbPassword = queryResult.rows[0].password
				const match = await bcrypt.compare(password, dbPassword)

				if (!match) throw 'incorrect password'

				const tokenData = queryResult.rows[0].id
				let myJWTToken = await createCookie(tokenData, 16)
				setCookie('hiRED_app', myJWTToken, req.res)

				return {
					message: 'Login Successful!',
				}
			} catch (err) {
				throw err
			}
		},

		async addUserPortfolio(parent, { input }, { req, app, postgres}){
      try {

        const user_id = authenticate(app, req)

        const { title, description, type, custom_link, api_link, thumbnail } = input;

        const newPortfolioObject = {
          user_id: user_id,
          title: title,
          description: description,
          type: type,
          custom_link: custom_link,
          api_link: api_link,
          thumbnail: thumbnail
        }

        const addUserPortfolioQuery = createInsertQuery(newPortfolioObject, 'hired.portfolio', true);

        const addUserPortfolioQueryResult = await postgres.query(addUserPortfolioQuery);

        return {
          user_id: user_id,
          title: title,
          description: description,
          type: type,
          custom_link: custom_link,
          api_link: api_link,
          thumbnail: thumbnail
        }
      }
      catch (e) {
        console.log("Error in addPortfolio: ", e.message);
        throw e.message;
      }
		},

		async addMentors(parent, { input }, { app, req, postgres }) {
			try {
				let user_id = authenticate(app, req)

				status = input.status

				const newMentor = {
					text: 'INSERT INTO hired.mentors (user_id, status) VALUES ($1, $2) RETURNING *',
					values: [user_id, status],
				}

				let result = await postgres.query(newMentor)

				return {
					message: 'Successfully became a mentor!',
				}
			} catch (e) {
				console.log('Error in addMentors: ', e.message)
				throw e.message
			}
		},

    async addSkills(parent, {input}, { req, app, postgres }) {
      const user_id = authenticate(app, req)

      const skills_id = input.map(d=> d.skills_id)

     let insertValues;

     skills_id.forEach(async (skills, i) => {
        insertValues = {
         text: `INSERT INTO hired.skills_users (user_id, skills_id) VALUES ($1, $2) RETURNING *`,
         values: [user_id, skills]
        }
      const result =  await postgres.query(insertValues);
     })
      return {
        message: "success"
      }
		},

		async updateUserPortfolio(parent, { input }, { app, req, postgres }) {
			// Check for auth to update?
			try {
				const { id, user_id, title, description, type, custom_link, api_link, thumbnail } = input

				const newPortfolioObject = {
					id: id,
					user_id: user_id,
					title: title,
					description: description,
					type: type,
					custom_link: custom_link,
					api_link: api_link,
					thumbnail: thumbnail,
				}

				const portfolioUpdateQuery = createUpdateQuery(newPortfolioObject, 'id', 'hired.portfolio')

				const portfolioUpdateQueryResult = await postgres.query(portfolioUpdateQuery)

				return {
					id: id,
					user_id: user_id,
					title: title,
					description: description,
					type: type,
					custom_link: custom_link,
					api_link: api_link,
					thumbnail: thumbnail,
				}
			} catch (e) {
				console.log('Error in updateUserPortfolio Resolver: ', e.message)
				throw e.message
			}
		},

		async deleteUserPortfolio(parent, input, { app, req, postgres }) {
			// Check for auth to delete?
			try {
				const id = input.id

				const deleteUserPortfolioQuery = {
					text: 'DELETE FROM hired.portfolio WHERE id = $1 RETURNING *',
					values: [id],
				}

				const deleteUserPortfolioQueryResult = await postgres.query(deleteUserPortfolioQuery)

				return {
					message: 'Successfully deleted portfolio item',
				}
			} catch (e) {
				console.log('Error in deleteUserPortfolio Resolver: ', e.message)
				throw e.message
			}
		},

		async saveDribbbleCode(parent, { api_code }, { app, req, postgres }) {
			try {
				let userId = authenticate(app, req)

				let url =
					'https://dribbble.com/oauth/token?client_id=97883b392791de1ff6facb092f049a91a1f1590a8e3172b61ef7d06be61651b6&client_secret=421e7b150aa6ec3c3efae5e5f4bee5ef8ea4f66794380a6940f46937e3762b5e&code=' +
					api_code

				let DribbbleRes = await axios
					.post(url, {
						'Access-Control-Allow-Origin': 'http://localhost:3000',
						'Access-Control-Expose-Headers': 'ETag, Link, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset',
						'Access-Control-Allow-Credentials': 'true',
					})
					.catch(err => {
						console.log('this is catch error, :', err)
					})

				const psql = {
					text:
						'UPDATE hired.users SET dribbble_api_code = $1,  dribbble_access_token = $2, dribbble_connected = $3 WHERE id=$4 RETURNING *;',
					values: [api_code, DribbbleRes.data.access_token, true, userId],
				}

				let query = await postgres.query(psql)
			} catch (e) {
				throw e.message
			}
		},

    async addMentors(parent, {input}, { req, app, postgres }) {
      try {
        let user_id =  authenticate(app, req)

        status = input.status

        const newMentor = {
          text: "INSERT INTO hired.mentors (user_id, status) VALUES ($1, $2) RETURNING *",
          values: [user_id, status]
        }

        let result = await postgres.query(newMentor)

        return {
          message: "Successfully became a mentor!"
        }
      }
      catch (e) {
        console.log("Error in addMentors: ", e.message);
        throw e.message;
      }
		},

    async updateUserPortfolio(parent, { input }, { req, app, postgres }) {
      try {

        const user_id = authenticate(app, req)

        const { id, title, description, type, custom_link, api_link, thumbnail } = input;

        const newPortfolioObject = {
          id: id,
          user_id: user_id,
          title: title,
          description: description,
          type: type,
          custom_link: custom_link,
          api_link: api_link,
          thumbnail: thumbnail
        }

        const portfolioUpdateQuery = createUpdateQuery(newPortfolioObject, 'id','hired.portfolio');

        const portfolioUpdateQueryResult = await postgres.query(portfolioUpdateQuery);

        return {
          id: id,
          user_id: user_id,
          title: title,
          description: description,
          type: type,
          custom_link: custom_link,
          api_link: api_link,
          thumbnail: thumbnail
				}
			}
			catch (e) {
				console.log(e.message)
				throw e.message;
			}
		},

     async saveGithubCode(parent, input, {req, app, postgres}){
      try {
       const userId = authenticate(app, req)
       let url =
       'https://github.com/login/oauth/access_token?client_id=a7ec9ab65600c7fc7e5c&client_secret=9267763cc3035b2c91da699e7c051cb62040d7fc&code=' +
       input.api_code
     let GithubRes = await axios
       .post(url, {
         'Access-Control-Allow-Origin': 'http://localhost:3000',
         'Access-Control-Expose-Headers': 'ETag, Link, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset',
         'Access-Control-Allow-Credentials': 'true',
       })
       .catch(err => {
         console.log('this is catch error, :', err)
			 })
			const githubAccessTokenArray = GithubRes.data.split('access_token=')
			const githubFilterScope = githubAccessTokenArray[1].split('&scope=')
			const githubAccessToken = githubFilterScope[0];
      const insertGithubAPI = {
        text: 'UPDATE hired.users SET github_api_code=$1, github_access_token=$2 WHERE id=$3 RETURNING *',
        values: [input.api_code, githubAccessToken, userId]
      }
      await postgres.query(insertGithubAPI);
      } catch (error) {
        console.log(" The error is: ", error);
      }
    },

    async addStatus(parent, {input}, {req, app, postgres}){
      try {
        let user_id =  1 //authenticate(app, req)
        const insertStatus = {
          text: "INSERT INTO hired.status ( user_id, role, looking_for, location) VALUES ($1, $2, $3, $4) RETURNING *",
          values: [ user_id, input.role, input.looking_for, input.location]
        }
        let result = await postgres.query(insertStatus)
        return {
          message: "The data is successfully inserted!"
        }
      }
      catch (e) {
        console.log("Sorry! there is an error: ", e.message);
        throw e.message;
      }
    },
async addConversation(parent, input, {req, app, postgres}) {
      const user_id_1 = authenticate(app, req)
      const user_id_2 = input.user_id_2

      const start_convo = [user_id_1, user_id_2]
      const receive_convo = [user_id_1, user_id_2]

    	const checkConversation = {
        text: "SELECT * FROM hired.conversations WHERE hired.conversations.user_id_1 = ANY($1) AND hired.conversations.user_id_2 = ANY($2)",
        values: [start_convo, receive_convo]
      }

      const results = await postgres.query(checkConversation)
      // check if conversation exists. If it does return conversation id, if not then create a conversation
			if(results.rows.length > 0) {
				const conversation_id = results.rows[0].id
				return {
					id: conversation_id
				}
			}
			else {

				const newConversation = {
					text: 'INSERT INTO hired.conversations (user_id_1, user_id_2) VALUES ($1, $2) RETURNING *',
					values: [user_id_1, user_id_2],
				}

				const result = await postgres.query(newConversation)

				const new_conversation_id = result.rows[0].id

				return {
					id: new_conversation_id
				}
			}
		},

    async addMessages(parent, input, {req, app, postgres}) {
      const from_user = authenticate(app, req)

      const content = input.content
      const conversation_id = input.conversation_id


      const newMessages = {
        text: `INSERT INTO hired.messages (content, conversation_id, from_user) VALUES ($1, $2, $3) RETURNING *`,
        values: [content, conversation_id, from_user]
      }

      const result = await postgres.query(newMessages)

      let from_user_id = result.rows[0].from_user

        const checkUserFullName = {
          text: "SELECT fullname FROM hired.users WHERE hired.users.id = $1",
          values: [from_user_id]
        }

      const user_fullname_result = await postgres.query(checkUserFullName)

      result.rows[0].fullname = user_fullname_result.rows[0].fullname

      pubsub.publish("messageAdded", {messageAdded: result.rows[0]})

      return {
        message: "Yes"
      }

		},

 		async deleteUserPortfolio(parent,  input, { req, app, postgres }) {
    // Check for auth to delete!!!!
    try {
      const id = input.id;

      const deleteUserPortfolioQuery = {
        text: 'DELETE FROM hired.portfolio WHERE id = $1 RETURNING *',
        values: [id]
      }

      const deleteUserPortfolioQueryResult = await postgres.query(deleteUserPortfolioQuery);

      return {
        message: 'Successfully deleted portfolio item'
      }
    } catch (e) {
        console.log("Error in deleteUserPortfolio Resolver: ", e.message);
        throw e.message;
      }
    },
	}
}
