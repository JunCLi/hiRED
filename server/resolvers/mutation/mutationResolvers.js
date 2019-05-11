const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 12
const crypto = require('crypto')
const Promise = require('bluebird')
const authenticate = require('../authenticate')
const axios = require('axios')

const { createCookie, setCookie } = require('./setCookie')
const { createInsertQuery, createUpdateQuery, createSelectQuery } = require('../makeQuery')

module.exports = {
	Mutation: {
		async signup(parent, { input }, { req, app, postgres }) {
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

		async signupPage2(parent, { input }, { req, app, postgres }) {
			try {
				const user_id = authenticate(app, req)
				const { campus, program_name, study_year, study_cohort, role, current_job, location, mentor } = input

				const updateUserObject = {
					campus: campus,
					// 'study_year': study_year,
					// 'study_cohort': study_cohort,
					role: role,
					current_job: current_job,
					location: location,
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

				// if (program_name) {
				//   const insertProgramObject = {
				//     name: program_name
				//   }
				//   const insertProgramQuery = createInsertQuery(insertProgramObject, 'hired.programs')
				//   const insertProgramResult = cr

				//   const insertPorgramsUsersObject = {
				//     user_id: user_id,
				//     program_id: program_id
				//   }
				// }
				return {
					message: 'success',
				}
			} catch (err) {
				throw err
			}
		},

		async login(parent, { input }, { req, app, postgres }) {
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
				console.log('this is myJWTToken: ', myJWTToken)
				setCookie('hiRED_app', myJWTToken, req.res)

				return {
					message: 'Login Successful!',
				}
			} catch (err) {
				throw err
			}
		},
		async addUserPortfolio(parent, { input }, { req, app, postgres }) {
			try {
				const { user_id, title, description, type, custom_link, api_link, thumbnail } = input

				const newPortfolioObject = {
					user_id: user_id,
					title: title,
					description: description,
					type: type,
					custom_link: custom_link,
					api_link: api_link,
					thumbnail: thumbnail,
				}

				const addUserPortfolioQuery = createInsertQuery(newPortfolioObject, 'hired.portfolio', true)

				const addUserPortfolioQueryResult = await postgres.query(addUserPortfolioQuery)

				return {
					user_id: user_id,
					title: title,
					description: description,
					type: type,
					custom_link: custom_link,
					api_link: api_link,
					thumbnail: thumbnail,
				}
			} catch (e) {
				console.log('Error in addPortfolio: ', e.message)
				throw e.message
			}
		},
		async addMentors(parent, { input }, { req, app, postgres }) {
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
		async updateUserPortfolio(parent, { input }, { req, app, postgres }) {
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
		async deleteUserPortfolio(parent, input, { req, app, postgres }) {
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

		async saveDribbbleCode(parent, { api_code }, { req, app, postgres }) {
			try {
				let userId = authenticate(app, req)
				
				let url =
					'https://dribbble.com/oauth/token?client_id=97883b392791de1ff6facb092f049a91a1f1590a8e3172b61ef7d06be61651b6&client_secret=421e7b150aa6ec3c3efae5e5f4bee5ef8ea4f66794380a6940f46937e3762b5e&code=' +
					api_code

				let DribbbleRes = await axios
					.post(url, {
						'Access-Control-Allow-Origin': 'http://localhost:3000',
						'Access-Control-Expose-Headers':
							'ETag, Link, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset',
						'Access-Control-Allow-Credentials': 'true',
					})
					.catch(err => {
						console.log('this is catch error, :', err)
					})
				console.log('Get dribbble access_token, ', DribbbleRes.data.access_token)

				const psql = {
					text:
						'UPDATE hired.users SET dribbble_api_code = $1,  dribbble_access_token = $2 WHERE id=$3 RETURNING *;',
					values: [api_code, DribbbleRes.data.access_token, userId],
				}

				let query = await postgres.query(psql)
			} catch (e) {
				throw e.message
			}
		},

		// async ListMyDribbbles (parent, input, { req, app, postgres }) {
		// 	try{

		// let json = await axios.get(
		// 	'https://api.dribbble.com/v2/user/shots?access_token=' + DribbbleRes.data.access_token
		// )
		// 		let userId = authenticate(req, app);

		// 		const psql = {
		// 			text: 'SELECT token FROM hired.dribbble WHERE user_ID = $1',
		// 			values: [userId]
		// 		}

		// 		let query = await postgres.query(psql)

		// 	} catch (e) {

		// 	}
		// }
	},
}
