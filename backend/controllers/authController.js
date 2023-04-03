const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

// Register User
const register = async (req, res) => {
    const {
        username,
        email,
        password,
        description,
        profilePicture,
        favGames,
        recentlyPlayed
    } = res.body

    const hashedPwd = await bcrypt.hash(password, 10)

    const userObject = new User({
        username,
        email,
        password: hashedPwd,
        description,
        profilePicture,
        favGames,
        recentlyPlayed
    })

    const user = await User.create(userObject)

    if (user) {
        res.status(201).json({ message: `New user ${username} created` })
    } else {
        res.status(500).json({ message: `Invalid user data received` })
    }
}

// Login
const login = async (req, res) => {
    const { email , password } = req.body

    const user = await User.findOne({email: email})

    if (!user) {
        return res.status(400).json({ message: 'User does not exist'})
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials'})
    }

    const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET)
    delete user.password
    res.status(200).json({ accessToken, user })
}