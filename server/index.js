const express = require('express')
const cookieParser = require('cookie-parser')
const chalk = require('chalk')
const cors = require('cors')
const path = require('path')
const { ApolloServer } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const axios = require('axios')

const fallback = require('express-history-api-fallback')
const http = require("http")

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
	const root = path.resolve(__dirname, '../client/build')

	// Serve the static front-end from /public when deployed
	app.use(express.static(root))

	app.get("/*", function(req, res){
		res.sendFile(path.join(__dirname, "../client/build/index.html"), function(err){
			if(err) {
				res.status(500).send(err)
			}
		})
	})

}


	// Allow requests from dev server address
	const corsConfig = {
		origin: 'http://localhost:3000',
		credentials: true,
	}
	app.set('CORS_CONFIG', corsConfig)

	// Allow requests from dev server address
	app.use(cors(corsConfig))


resolvers = resolvers()

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
})

const apolloServer = new ApolloServer({
	context: ({ req, connection }) => {
		if (connection) {
			return connection.context
		}
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

let server = http.createServer(app)

apolloServer.installSubscriptionHandlers(server)

postgres.on('error', (err, client) => {
	console.error('Unexpected error on idle postgres client', err)
	process.exit(-1)
})

server.listen(PORT, () => {
	console.log(`>> ${chalk.blue('Express running:')} http://localhost:${PORT}`)

	console.log(`>> ${chalk.magenta('GraphQL playground:')} http://localhost:${PORT}/graphql`)
	
console.log(`>> ${chalk.magenta('Sub Link:')} ws://localhost:${PORT}${apolloServer.subscriptionsPath}`)
})

server.on('error', err => {
	console.log(err)
})
