const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 12
const crypto = require('crypto')
const Promise = require('bluebird')
const authenticate = require('../authenticate')

const { createCookie, setCookie } = require('./setCookie')
const { createInsertQuery, createUpdateQuery, createSelectQuery } = require('../makeQuery')

module.exports = {
  Mutation: {
    async signup(parent, { input }, { req, app, postgres }){
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
          message: 'success'
        }
      }catch(err){
        throw err
      }
    },

    async signupForm2(parent, { input }, { req, app, postgres}) {
      try {
        const user_id = authenticate(app, req)
        const { campus, program_name, study_year, study_cohort, role, current_job, location, mentor } = input

        const updateUserObject = {
          'campus': campus,
          'current_job': current_job,
          'location': location,
          'role': role,
          'study_year': study_year,
          'study_cohort': study_cohort,
        }

        const updateUserQuery = createUpdateQuery(updateUserObject, 'id', 'hired.users', user_id)
        await postgres.query(updateUserQuery)

        if (mentor) {
          const insertMentorObject = {
            user_id: user_id,
            status: true
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
            program_id: programIdQueryResult.rows[0].id
          }
          const insertProgramsUsersQuery = createInsertQuery(insertProgramsUsersObject, 'hired.program_users', true)
          await postgres.query(insertProgramsUsersQuery)
        }
        return {
          message: 'success'
        }
      }catch(err){
        throw err
      }
    },

    async updateProfile(parent, { input }, { req, app, postgres }){
      const user_id = authenticate(app, req)
      const {campus, current_job, email, fullname, location, mentor, program_name, role, study_year, study_cohort} = input

      const updateUserObject = {
        'campus': campus,
        'current_job': current_job,
        'email': email,
        'fullname': fullname,
        'location': location,
        'role': role,
        'study_year': study_year,
        'study_cohort': study_cohort
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

        console.log('program id: ', programIdQueryResult.rows[0].id)

        const insertProgramsUsersObject = {
          user_id: user_id,
          program_id: programIdQueryResult.rows[0].id
        }
        const insertProgramsUsersQuery = createInsertQuery(insertProgramsUsersObject, 'hired.program_users', true)
        // await postgres.query(insertProgramsUsersQuery)
      }

      return {
        message: 'success'
      }
    },

    async login(parent, { input }, { req, app, postgres }){
      try {
        let {email, password} = input
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
          message: 'Login Successful!'
        }
      }catch(err){
        throw err
      }
    },
    async addUserPortfolio(parent, { input }, { req, app, postgres}){
      try {

        const { user_id, title, description, type, custom_link, api_link, thumbnail } = input;

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
      // Check for auth to update?

      try {
        const { id, user_id, title, description, type, custom_link, api_link, thumbnail } = input;

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
        console.log("Error in updateUserPortfolio Resolver: ", e.message);
        throw e.message;
      }
    },
    async deleteUserPortfolio(parent,  input, { req, app, postgres }) {
      // Check for auth to delete?

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
      }
      catch (e) {
        console.log("Error in deleteUserPortfolio Resolver: ", e.message);
        throw e.message;
      }
    },

  },
}



