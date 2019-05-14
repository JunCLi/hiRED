const express = require('express')
const cookieParser = require('cookie-parser')
const chalk = require('chalk')
const cors = require('cors')
const path = require('path')
const { ApolloServer } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const axios = require('axios')

const fallback = require('express-history-api-fallback')

const postgres = require('./config/postgres')
const typeDefs = require('./schema')
let resolvers = require('./resolvers')

const app = express()
const PORT = process.env.PORT || 8080
app.set('PORT', process.env.PORT || 8080)
app.set('JWT_SECRET', process.env.JWT_SECRET || 'DEV_SECRET')

app.set('JWT_COOKIE_NAME', 'token')
app.use(cookieParser())

if (process.env.NODE_ENV === 'production') {
	const root = path.resolve(__dirname, '../public')

	// Serve the static front-end from /public when deployed
	app.use(express.static(root))
	app.use(fallback('index.html', { root }))
}

if (process.env.NODE_ENV !== 'production') {
	// Allow requests from dev server address
	const corsConfig = {
		origin: 'http://localhost:3000',
		credentials: true,
	}
	app.set('CORS_CONFIG', corsConfig)

	// Allow requests from dev server address
	app.use(cors(corsConfig))
}

// try {
// 	let url =
//     'https://dribbble.com/oauth/token?client_id=97883b392791de1ff6facb092f049a91a1f1590a8e3172b61ef7d06be61651b6&client_secret=421e7b150aa6ec3c3efae5e5f4bee5ef8ea4f66794380a6940f46937e3762b5e&code=f0a0faa57e5f762e619eb0b6fd4758828259580469680f546c79a307338a2ce1'
// 	let getDribbble = axios.post(url, {
// 		'Access-Control-Allow-Origin': '*',
// 		'Access-Control-Expose-Headers': 'ETag, Link, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset',
// 		'Access-Control-Allow-Credentials': 'true',
// 	})
// 	let dribbble = Promise.resolve(getDribbble)
// 	dribbble.then(function(res) {
// 		console.log('this is res', res)
// 	})
//   dribbble.catch(function(err){
//     console.log('this is catch error, :', err)
//   })
  
// 	console.log('this is dribbble from index.js :', dribbble)
// } catch (e) {
// 	throw e.message
// }

resolvers = resolvers()

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
})

const apolloServer = new ApolloServer({
	context: ({ req }) => {
		if (req.headers.referer === 'http://localhost:8080/graphql' && process.env.NODE_ENV !== 'production') {
			app.set('SKIP_AUTH', true)
		} else {
			app.set('SKIP_AUTH', false)
		}
		return {
			app,
			req,
			postgres,
		}
	},
	schema,
})

apolloServer.applyMiddleware({
	app,
	cors: app.get('CORS_CONFIG'),
})

postgres.on('error', (err, client) => {
	console.error('Unexpected error on idle postgres client', err)
	process.exit(-1)
})

const server = app.listen(PORT, () => {
	console.log(`>> ${chalk.blue('Express running:')} http://localhost:${PORT}`)

	console.log(`>> ${chalk.magenta('GraphQL playground:')} http://localhost:${PORT}/graphql`)
})

server.on('error', err => {
	console.log(err)
})
