const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

// @desc    Register a user
// @route   POST auth/register
// @access  Private
const register = async (req, res) => {

  // grab values from request body
  const { username, email, password } = req.body

  // check if values are present
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  // check if another user has same username
  const duplicate = await User.findOne({ username }).collation({ locale: 'en', strength: 2 }).lean().exec()

  if (duplicate) {
    return res.status(409).json({ message: 'Duplicate username' })
  }

  // scramble password with salt rounds
  const hashedPwd = await bcrypt.hash(password, 10)

  // create new user with values
  const newUser = new User({
    username,
    email,
    password: hashedPwd
  })

  // upload new user to db
  const savedUser = await User.create(newUser)

  // check if user created
  if (savedUser) {
    res.status(201).json({ message: `New user ${username} created` })
  } else {
    res.status(500).json({ message: `Invalid user data received` })
  }
}

// @desc    Login a user
// @route   POST auth/login
// @access  Private
const login = async (req, res) => {

  // grab values from request body
  const { email, password } = req.body

  // try to find user with email
  const user = await User.findOne({ email: email })
  if (!user) {
    return res.status(400).json({ message: 'User does not exist' })
  }

  // see if passwords match
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' })
  }

  // create token with method for id
  const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET)
  delete user.password
  res.status(200).json({ token, user })
}

module.exports = {
  register,
  login
}