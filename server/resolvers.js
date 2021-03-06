const queryResolvers = require('./resolvers/query/queryResolvers')
const mutationResolvers = require('./resolvers/mutation/mutationResolvers')
const mentorsResolvers = require('./resolvers/mentors/mentorsResolvers')
const subscriptionResolvers = require("./resolvers/subscription/subscriptionResolvers")
const userResolvers = require('./resolvers/query/userResolvers')




module.exports = () => {
  return {
    ...queryResolvers,
    ...mutationResolvers,
    ...mentorsResolvers,
		...subscriptionResolvers,
		...userResolvers,
  }
}
