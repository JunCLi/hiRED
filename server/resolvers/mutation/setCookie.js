const jwt = require('jsonwebtoken')

module.exports.createCookie = (data, expHours) => {
  const exp = Math.floor(Date.now() / 1000 + 60 * 60 * expHours)
  return jwt.sign({
    data: data,
    exp: exp
  }, 'secret')
}


module.exports.setCookie = (tokenName, token, res) => {
  res.cookie(tokenName, token, {
    httpOnly: true,
    secure: false,
  })
}
