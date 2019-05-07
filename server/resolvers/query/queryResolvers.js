const authenticate = require('../authenticate')

module.exports = {
  Query: {
    async getUser(parent, input, { req, app, postgres }){
      const id = 13
      return {
        id
      }
    },
  },
}
