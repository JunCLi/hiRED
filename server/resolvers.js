const queryResolvers = require('./resolvers/query/queryResolvers')
const mutationResolvers = require('./resolvers/mutation/mutationResolvers')
const mentorsResolvers = require('./resolvers/mentors/mentorsResolvers')




module.exports = () => {
  return {
    ...queryResolvers,
    ...mutationResolvers,
    ...mentorsResolvers,
  }
}
