const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d'})
}

// @desc    Login a user
// @route   POST /api/user/login
// @access  Private
const loginUser = async (req, res) => {

    // grab email and password from request body
    const { email, password } = req.body

    // check if both values are present
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // try to find user with email
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(400).json({ message: 'Wrong email' })
    }

    // see if passwords match
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        return res.status(400).json({ message: 'Wrong password' })
    }

    // create token with method for 1d
    const token = createToken(user._id)
    if (!token) {
        return res.status(400).json({ message: 'Error with user id' })
    }

    res.status(200).json(user)
}

// @desc    Register a user
// @route   POST /api/user/register
// @access  Private
const createUser = async (req, res) => {
    
    // grab username, email, password from request body
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
    const newUser = await User.create({
        username,
        email,
        password: hashedPwd
    })

    // create token with method for 1d
    const token = createToken(newUser._id)
    if (!token) {
        return res.status(400).json({ message: 'Error with user id' })
    }

    if (newUser) {
        res.status(201).json(newUser)
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }
}


// @desc    Get all users
// @route   GET /api/user
// @access  Private
const getAllUsers = async (req, res) => {
    // .find({ username: 'user' }) to find specific
    const users = await User.find({}).lean()

    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
    }

    res.status(200).json(users)
}

// @desc    Get user
// @route   GET /api/user
// @access  Private
const getUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ID' })
    }

    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    res.status(200).json(user)
}

// @desc    Update a user
// @route   PATCH /api/user/:id
// @access  Private
const updateUser = async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(400).json({ message: 'User ID required' })
    }

    if (!id) {
        return res.status(400).json({ message: 'Invalid ID' })
    }

    const user = await User.findById(id)

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    const { description } = req.body

    if (!description) {
        return res.status(400).json({ message: 'All fields reqiured' })
    }

    user.description = description

    const updatedUser = await user.save()

    res.json({ message: `${updatedUser.username} updated` })
}

// @desc    Delete a user
// @route   DELETE /api/user/:id
// @access  Private
const deleteUser = async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(400).json({ message: 'User ID required' })
    }

    const user = await User.findOneAndDelete({ _id: id })

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    res.json({ message: `Username ${user.username} with ID ${user._id} deleted` })
}

module.exports = {
    loginUser,
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}