const authenticate = require('../authenticate')
const { createSelectQuery } = require  ('../makeQuery')

module.exports = {
  User: {
    async getPrograms(parent, input, { req, app, postgres }){
      const { id: user_id } = parent
      
      // Search program_users table for program ids assocaited with user
      const selectProgramUsersColumns = [
        'user_id',
        'program_id'
      ]
      const getProgramUsersQuery = createSelectQuery(selectProgramUsersColumns, 'hired.program_users', 'user_id', user_id)
      const getProgramUsersQueryResult = await postgres.query(getProgramUsersQuery)
    
      // Map array of programs user has using program id
      const programArray = getProgramUsersQueryResult.rows.map(async program => { 
        const selectProgramColumns = [
          'id',
          'name'
        ]
        const getProgramQuery = createSelectQuery(selectProgramColumns, 'hired.programs', 'id', program.program_id)
        const getProgramQueryResult = await postgres.query(getProgramQuery)
        
        return getProgramQueryResult.rows[0]
      })

      return programArray
    },

    async getMentor(parent, input, { req, app, postgres }){
      const { id: user_id } = parent

      // Search mentors table for mentor information
      const selectMentorColumns = [
        'status',
        'disabled',
      ]
      const getMentorQuery = createSelectQuery(selectMentorColumns, 'hired.mentors', 'user_id', user_id)
      const getMentorQueryResult = await postgres.query(getMentorQuery)

      return getMentorQueryResult.rows[0]
    }
  }
}