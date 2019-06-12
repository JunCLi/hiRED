const { AuthenticationError } = require('apollo-server')
const jwt = require('jsonwebtoken')

const authenticate = (app, req) => {

  try {
      const jwtCookie = req.cookies['hiRED_app']

    const verified_information = jwt.verify(jwtCookie, 'secret')


    return verified_information.data

  } catch(err) {
    throw err
  }

}

module.exports = authenticate
