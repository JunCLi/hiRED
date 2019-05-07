const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 12
const crypto = require('crypto')
const Promise = require('bluebird')
const authenticate = require('../authenticate')

module.exports = {
  Mutation: {
    // async signup( parent, { input: { email, password }, }, { req, app, postgres }) {
    // }
  },
}



