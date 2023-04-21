const jwt = require('jsonwebtoken')

const verifyJWT = async (req, res, next) => {

  // grab token with Authorization header
  let token = req.header("Authorization")

  // check if there is a token
  if (!token) {
    return res.status(403).json({ message: 'Access denied' })
  }

  // check if token has header that starts with Bearer
  if (token.startsWith('Bearer ')) {
    // get the actual token
    token = token.split(' ')[1]
  } else {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  // verify the user
  const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
  req.user = verified
  next()
}

module.exports = verifyJWT