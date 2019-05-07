const queryResolvers = require('./resolvers/query/queryResolvers')
const mutationResolvers = require('./resolvers/mutation/mutationResolvers')



module.exports = () => {
  return {
    ...queryResolvers,
    // ...mutationResolvers,
  }
}
