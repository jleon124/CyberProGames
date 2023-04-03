const jwt = require('jsonwebtoken')

const verifyJWT = async (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization

    if (!authHeader) {
        return res.status(403).json({ message: 'Access denied' })
    }

    const token = authHeader.split(' ')[1]

    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    req.user = verified
    next()
}

module.exports = verifyJWT